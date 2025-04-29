import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Img = styled.img``;

export const ContainerMain = styled.div`
  /* width: 100%; */
  max-width: 753px;
  position: relative;

  > h1 {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const ContainerLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin-bottom: 10px;
  width: 50%;
  padding: 0px 10px;
  /* position: relative; */

  > label {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  > input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: #ff69b4;
    }
  }
`;

export const ContainerInputAndQuestionMark = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerInputAndEye = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  > input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;
    width: 100%;
    color: #929292;
    background-color: #eee;
    opacity: 1;
    pointer-events: none;
    cursor: not-allowed;
    user-select: none;
  }
`;

export const ContainerImgQuestionMark = styled.div`
  display: flex;
  width: 14px;
  height: 14px;
  cursor: pointer;

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
