import { useEffect, useState } from 'react';
import * as Styled from './styled';

interface TimeRemainingProps {
  timeRemaining: string | null;
  endTimeRemaining: (time: number) => void;
}

const TimeRemainingAddress = ({ timeRemaining, endTimeRemaining }: TimeRemainingProps) => {
  const [timeRemainingHere, setTimeRemainingHere] = useState<number>(1);

  useEffect(() => {
    if (timeRemaining !== null) {
      // Aqui convertemos o formato "00:00:09.8420555" para segundos
      const parts = timeRemaining.split(':'); // ["00", "00", "09.8420555"]
      const minutes = parseInt(parts[1], 10); // 00
      const seconds = parseFloat(parts[2]); // 9.8420555

      const totalSeconds = Math.floor(minutes * 60 + seconds); // arredonda para baixo (9 segundos)

      setTimeRemainingHere(totalSeconds);

      const interval = setInterval(() => {
        setTimeRemainingHere((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  useEffect(() => {
    endTimeRemaining(timeRemainingHere);
  }, [endTimeRemaining, timeRemainingHere]);

  return (
    <Styled.ContainerCountdown>
      Tente novamente em {timeRemainingHere} segundos
    </Styled.ContainerCountdown>
  );
};

export default TimeRemainingAddress;
