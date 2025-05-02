import * as Styled from './styled';

interface NavigationBodyProps {
  mouseEnterNavigation: (name: string) => void;
  mouseLeaveNavigation: () => void;
  whichNavigationOver: string;
}

const NavigationBody = ({
  mouseEnterNavigation,
  mouseLeaveNavigation,
  whichNavigationOver,
}: NavigationBodyProps) => {
  return (
    <Styled.ContainerNavigation>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('feminino')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'feminino'}>
        <Styled.Span data-testid="span-nav">Feminino</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('calcado')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'calcado'}>
        <Styled.Span data-testid="span-nav">Calçados</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('lingerie')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'lingerie'}>
        <Styled.Span data-testid="span-nav">Lingerie</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('jeans')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'jeans'}>
        <Styled.Span data-testid="span-nav">Jeans</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('masculino')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'masculino'}>
        <Styled.Span data-testid="span-nav">Masculino</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('infantil')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'infantil'}>
        <Styled.Span data-testid="span-nav">Infantil</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('plus-size')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'plus-size'}>
        <Styled.Span data-testid="span-nav">Plus Size</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('acessorios')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'acessorios'}>
        <Styled.Span data-testid="span-nav">Acessórios</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('casa')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'casa'}>
        <Styled.Span data-testid="span-nav">Casa</Styled.Span>
      </Styled.ContainerNav>
      <Styled.ContainerNav
        onMouseEnter={() => mouseEnterNavigation('oferta')}
        onMouseLeave={() => mouseLeaveNavigation()}
        $whichNavigationOver={whichNavigationOver}
        $whichNavigation={'oferta'}>
        <Styled.Span data-testid="span-nav">Oferta</Styled.Span>
      </Styled.ContainerNav>
    </Styled.ContainerNavigation>
  );
};

export default NavigationBody;
