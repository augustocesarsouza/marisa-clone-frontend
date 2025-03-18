import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import MoreSvg from '../../Svg/MoreSvg/MoreSvg';
import MinusSvg from '../../Svg/MinusSvg/MinusSvg';

const Navigation = () => {
  const [clickMyProfile, setClickMyProfile] = useState(false);
  const [informationLGPD, setInformationLGPD] = useState(false);

  const RefContainerMyProfileSvg = useRef<HTMLDivElement | null>(null);
  const RefContainerInformationSvg = useRef<HTMLDivElement | null>(null);

  const RefH1Addresses = useRef<HTMLHeadingElement | null>(null);
  const RefH1OrderHistory = useRef<HTMLHeadingElement | null>(null);
  const RefH1RefundAndExchangeVoucher = useRef<HTMLHeadingElement | null>(null);
  const RefH1Returns = useRef<HTMLHeadingElement | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onClickContainerMyProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === null) return;

    putColorBlackFourHeaderNav();

    const container = RefContainerMyProfileSvg.current as HTMLDivElement;
    const h1Profile = container.firstChild as HTMLHeadingElement;

    const container2 = RefContainerInformationSvg.current as HTMLDivElement;
    const h1Profile2 = container2.firstChild as HTMLHeadingElement;

    const svgs = container2.getElementsByTagName('svg');
    svgs[0].style.fill = 'black';
    h1Profile2.style.color = 'black';

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setInformationLGPD(false);
    setClickMyProfile((prev) => {
      const value = !prev;

      if (value) {
        h1Profile.style.color = '#ec008c';

        timeoutRef.current = setTimeout(() => {
          const svgs = container.getElementsByTagName('svg');
          svgs[0].style.fill = '#ec008c';
        }, 10);
      } else {
        h1Profile.style.color = 'black';

        timeoutRef.current = setTimeout(() => {
          const svgs = container.getElementsByTagName('svg');
          svgs[0].style.fill = 'black';
        }, 10);
      }

      return value;
    });
  };

  const onClickContainerInformationLGPD = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === null) return;

    putColorBlackFourHeaderNav();

    const container = RefContainerInformationSvg.current as HTMLDivElement;
    const h1Profile = container.firstChild as HTMLHeadingElement;

    const container2 = RefContainerMyProfileSvg.current as HTMLDivElement;
    const h1Profile2 = container2.firstChild as HTMLHeadingElement;

    const svgs = container2.getElementsByTagName('svg');
    svgs[0].style.fill = 'black';
    h1Profile2.style.color = 'black';

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setClickMyProfile(false);
    setInformationLGPD((prev) => {
      const value = !prev;

      if (value) {
        h1Profile.style.color = '#ec008c';

        timeoutRef.current = setTimeout(() => {
          const svgs = container.getElementsByTagName('svg');
          svgs[0].style.fill = '#ec008c';
        }, 20);
      } else {
        h1Profile.style.color = 'black';

        timeoutRef.current = setTimeout(() => {
          const svgs = container.getElementsByTagName('svg');
          svgs[0].style.fill = 'black';
        }, 20);
      }

      return value;
    });
  };

  const onClickEachNavMyAccount = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (e.target === null) return;

    putColorBlackFourHeaderNav();

    const container = RefContainerMyProfileSvg.current as HTMLDivElement;
    const h1Profile = container.firstChild as HTMLHeadingElement;
    putColorBlackNavHeader(h1Profile);

    const container2 = RefContainerInformationSvg.current as HTMLDivElement;
    const h1Profile2 = container2.firstChild as HTMLHeadingElement;
    putColorBlackNavHeader(h1Profile2);

    const header = e.target as HTMLHeadingElement;
    header.style.color = '#ec008c';

    setClickMyProfile(false);
    setInformationLGPD(false);
  };

  const putColorBlackNavHeader = (h1: HTMLHeadingElement) => {
    h1.style.color = 'black';
  };

  const putColorBlackFourHeaderNav = () => {
    const h1Address = RefH1Addresses.current as HTMLHeadingElement;
    const h1OrderHistory = RefH1OrderHistory.current as HTMLHeadingElement;
    const h1RefundAndExchangeVoucher = RefH1RefundAndExchangeVoucher.current as HTMLHeadingElement;
    const h1Returns = RefH1Returns.current as HTMLHeadingElement;

    putColorBlackNavHeader(h1Address);
    putColorBlackNavHeader(h1OrderHistory);
    putColorBlackNavHeader(h1RefundAndExchangeVoucher);
    putColorBlackNavHeader(h1Returns);
  };

  const spansRef = useRef<HTMLDivElement | null>(null);
  const spansInformationsRef = useRef<HTMLDivElement | null>(null);
  const [allSpans, setAllSpans] = useState<NodeListOf<HTMLSpanElement> | null>(null);
  const [allSpspansInformationsns, setSpansInformations] =
    useState<NodeListOf<HTMLSpanElement> | null>(null);

  useEffect(() => {
    if (clickMyProfile) {
      if (spansRef.current) {
        const allSpans = spansRef.current.querySelectorAll('span');
        setAllSpans(allSpans);
      }
    }
  }, [clickMyProfile]);

  useEffect(() => {
    if (informationLGPD) {
      if (spansInformationsRef.current) {
        const allSpans = spansInformationsRef.current.querySelectorAll('span');
        setSpansInformations(allSpans);
      }
    }
  }, [informationLGPD]);

  const onClickNavAfterClicked = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (e.target === null) return;

    allSpans?.forEach((el) => {
      el.style.color = 'rgb(112, 112, 112)';
    });

    const span = e.target as HTMLSpanElement;
    span.style.color = '#ec008c';
  };

  const onClickNavAfterClicked2 = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (e.target === null) return;

    allSpspansInformationsns?.forEach((el) => {
      el.style.color = 'rgb(112, 112, 112)';
    });

    const span = e.target as HTMLSpanElement;
    span.style.color = '#ec008c';
  };

  return (
    <Styled.ContainerNavigation>
      <Styled.ContainerMyProfileAndModalNavAfterClicked>
        <Styled.ContainerHeaderAndMoreSvg
          ref={RefContainerMyProfileSvg}
          onClick={(e) => onClickContainerMyProfile(e)}>
          <Styled.H1>Meu perfil</Styled.H1>
          {!clickMyProfile && <MoreSvg />}
          {clickMyProfile && <MinusSvg />}
        </Styled.ContainerHeaderAndMoreSvg>

        {clickMyProfile && (
          <Styled.ContainerNavAfterClicked ref={spansRef}>
            <Styled.Span onClick={(e) => onClickNavAfterClicked(e)}>Meus dados</Styled.Span>
            <Styled.Span onClick={(e) => onClickNavAfterClicked(e)}>Alterar dados</Styled.Span>
            <Styled.Span onClick={(e) => onClickNavAfterClicked(e)}>Alterar Senha</Styled.Span>
            <Styled.Span onClick={(e) => onClickNavAfterClicked(e)}>
              Atualizar Seu E-mail
            </Styled.Span>
          </Styled.ContainerNavAfterClicked>
        )}
      </Styled.ContainerMyProfileAndModalNavAfterClicked>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e)} ref={RefH1Addresses}>
        Endereços
      </Styled.H1>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e)} ref={RefH1OrderHistory}>
        Historico de pedidos
      </Styled.H1>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e)} ref={RefH1RefundAndExchangeVoucher}>
        Reembolso e vale troca
      </Styled.H1>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e)} ref={RefH1Returns}>
        Devoluções
      </Styled.H1>

      <Styled.ContainerMyProfileAndModalNavAfterClicked>
        <Styled.ContainerHeaderAndMoreSvg
          ref={RefContainerInformationSvg}
          onClick={(e) => onClickContainerInformationLGPD(e)}>
          <Styled.H1>Informações LGPD</Styled.H1>
          {!informationLGPD && <MoreSvg />}
          {informationLGPD && <MinusSvg />}
        </Styled.ContainerHeaderAndMoreSvg>

        {informationLGPD && (
          <Styled.ContainerNavAfterClicked ref={spansInformationsRef}>
            <Styled.Span onClick={(e) => onClickNavAfterClicked2(e)}>Meus Dados</Styled.Span>
            <Styled.Span onClick={(e) => onClickNavAfterClicked2(e)}>
              Meus Consentimentos
            </Styled.Span>
          </Styled.ContainerNavAfterClicked>
        )}
      </Styled.ContainerMyProfileAndModalNavAfterClicked>
    </Styled.ContainerNavigation>
  );
};

export default Navigation;
