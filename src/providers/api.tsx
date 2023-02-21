import { ApiPromise, WsProvider } from '@polkadot/api';
import React, { createContext, useCallback } from 'react';

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

  const connectToApi = useCallback(async () => {
    try {
      dispatch({ type: API_FETCH });
      const provider = new WsProvider('ws://localhost:9944');
      const api = new ApiPromise({ provider });
      await api.isReady;
      dispatch({ type: API_DATA, payload: api });
    } catch (e) {
      dispatch({ type: API_ERROR, payload: e.message });
    }
  }, []);

  if (!!state && !state.api && !state.loading) {
    connectToApi().then(console.log);
  }

  const value = { ...state, connectToApi };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
