import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

import * as S from './styles';

const initialState = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const CountDown = ({ dateIntimestampMs = new Date('04/05/2022') }) => {
  const [state, setState] = useState(initialState);

  const updateRemainingTime = useCallback((time: Date) => {
    const timestampDay = dayjs(time);
    const nowDay = dayjs();
    if (timestampDay.isBefore(nowDay)) return initialState;
    return {
      days: addZeros(timestampDay.diff(nowDay, 'days')),
      hours: addZeros(timestampDay.diff(nowDay, 'hours') % 25),
      minutes: addZeros(timestampDay.diff(nowDay, 'minutes') % 60),
      seconds: addZeros(timestampDay.diff(nowDay, 'seconds') % 60),
    };
  }, []);

  const addZeros = (value: number, minLenght = 2) =>
    value.toString().length >= minLenght
      ? value.toString()
      : `0${value.toString()}`;

  useEffect(() => {
    const initTimer = setInterval(() => {
      setState(updateRemainingTime(dateIntimestampMs));
    }, 1000);

    return () => clearTimeout(initTimer);
  }, [dateIntimestampMs, updateRemainingTime]);

  return (
    <S.Wrapper>
      <h3>🔥 Starts in</h3>
      <S.Container>
        <S.Card>
          <span>{state.days}</span>
          <p>Days</p>
        </S.Card>
        <S.Card>
          <span>{state.hours}</span>
          <p>Hours</p>
        </S.Card>
        <S.Card>
          <span>{state.minutes}</span>
          <p>Minutes</p>
        </S.Card>
        <S.Card>
          <span>{state.seconds}</span>
          <p>Seconds</p>
        </S.Card>
      </S.Container>
    </S.Wrapper>
  );
};
