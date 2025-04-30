import * as Styled from './styled';

interface NavigationBodyProps {
  mouseEnterNavigation: (name: string) => void;
  mouseLeaveNavigation: () => void;
}

const NavigationBody = ({ mouseEnterNavigation, mouseLeaveNavigation }: NavigationBodyProps) => {
  return (
    <Styled.ContainerNavigation>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('feminino')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Feminino</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('calcado')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Calçados</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('lingerie')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Lingerie</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('jeans')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Jeans</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('masculino')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Masculino</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('infantil')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Infantil</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('plus-size')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Plus Size</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('acessorios')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Acessórios</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('casa')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Casa</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('oferta')}
        onMouseLeave={() => mouseLeaveNavigation()}>
        <Styled.Span data-testid="span-nav">Oferta</Styled.Span>
      </Styled.ContainerNav>
    </Styled.ContainerNavigation>
  );
};

export default NavigationBody;
