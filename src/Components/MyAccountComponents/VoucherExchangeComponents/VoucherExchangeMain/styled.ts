import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const HideScrollArrows = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  /* Força remover qualquer botão de scroll */
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  /* Estiliza o scrollbar horizontal */
  &::-webkit-scrollbar {
    height: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #a0aec0;
    border-radius: 10px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #a0aec0 transparent;
`;
