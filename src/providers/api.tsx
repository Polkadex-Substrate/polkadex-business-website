import { ApiPromise, WsProvider } from '@polkadot/api';
import React, { createContext, useCallback, useEffect } from 'react';
import { toast } from 'utils/toast';

const API_FETCH = 'API_FETCH';
const API_DATA = 'API_DATA';
const API_ERROR = 'API_ERROR';

interface ApiFetch {
  type: typeof API_FETCH;
}

interface ApiSuccess {
  type: typeof API_DATA;
  payload: ApiPromise;
}

interface ApiError {
  type: typeof API_ERROR;
  payload: string;
}

type ActionType = ApiFetch | ApiSuccess | ApiError;

type StoreState = {
  api: ApiPromise;
  loading: boolean;
  success: boolean;
};

const initialState: StoreState = {
  api: null,
  loading: false,
  success: false,
};

export interface ApiCtx extends StoreState {
  connectToApi: () => void;
  currentBlock: number;
}

export const ApiContext = createContext<ApiCtx>({} as ApiCtx);

function apiReducer(state: StoreState, action: ActionType): StoreState {
  switch (action.type) {
    case API_FETCH: {
      return { ...state, loading: true, success: false };
    }
    case API_DATA: {
      return { api: action.payload, loading: false, success: true };
    }
    case API_ERROR: {
      return { ...state, loading: false, success: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

export const ApiProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [state, dispatch] = React.useReducer(apiReducer, initialState);
  const [currentBlock, setCurrentBlock] = React.useState(0);

  const connectToApi = useCallback(async (): Promise<ApiPromise | null> => {
    try {
      dispatch({ type: API_FETCH });
      const provider = new WsProvider('wss://solochain.polkadex.trade');
      const api = await ApiPromise.create({ provider });
      await api.isReady;
      toast(messages.SUCCESS_CONNECT, 'success');
      return api;
    } catch (e) {
      toast(messages.ERROR_CONNECT, 'error');
      dispatch({ type: API_ERROR, payload: e.message });
      return null;
    }
  }, []);

  useEffect(() => {
    if (!!state && !state.api && !state.loading) {
      connectToApi().then((api) => {
        if (!api) return;
        dispatch({ type: API_DATA, payload: api });
      });
    }
  }, [state, connectToApi]);

  // TODO: Loop here
  useEffect(() => {
    let sub;
    if (state?.api?.isConnected) {
      state.api.rpc.chain
        .subscribeNewHeads((header) => {
          const block = header.number.toNumber();
          setCurrentBlock(block);
        })
        .then((unsub) => {
          sub = unsub;
        });
    }
    return () => sub && sub();
  }, [state.api]);

  const value = { ...state, connectToApi, currentBlock };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

const messages = {
  SUCCESS_CONNECT: 'Connected to wss://solochain.polkadex.trade',
  ERROR_CONNECT: 'Error connecting to wss://solochain.polkadex.trade',
};
