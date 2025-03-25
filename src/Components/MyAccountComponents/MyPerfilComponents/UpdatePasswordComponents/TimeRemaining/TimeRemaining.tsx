import * as Styled from './styled';

interface TimeRemainingProps {
  timeRemaining: number | null;
}

const TimeRemaining = ({ timeRemaining }: TimeRemainingProps) => {
  return (
    <>
      {timeRemaining !== null && timeRemaining > 0 && (
        <Styled.ContainerCountdown>
          Tente novamente em {timeRemaining} segundos
        </Styled.ContainerCountdown>
      )}
    </>
  );
};

export default TimeRemaining;
