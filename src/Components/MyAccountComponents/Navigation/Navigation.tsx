import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import MoreSvg from '../../Svg/MoreSvg/MoreSvg';
import MinusSvg from '../../Svg/MinusSvg/MinusSvg';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationProps {
  whichWasClickedNav: (which: string) => void;
  isMyAccount: boolean;
}

const Navigation = ({ whichWasClickedNav, isMyAccount }: NavigationProps) => {
  const [clickMyProfile, setClickMyProfile] = useState(false);
  const [informationLGPD, setInformationLGPD] = useState(false);

  const RefContainerMyProfileSvg = useRef<HTMLDivElement | null>(null);
  const RefContainerInformationSvg = useRef<HTMLDivElement | null>(null);

  const RefH1Addresses = useRef<HTMLHeadingElement | null>(null);
  const RefH1OrderHistory = useRef<HTMLHeadingElement | null>(null);
  const RefH1RefundAndExchangeVoucher = useRef<HTMLHeadingElement | null>(null);
  const RefH1Returns = useRef<HTMLHeadingElement | null>(null);

  const SpanProfileMyData = useRef<HTMLSpanElement | null>(null);
  const SpanProfileChangeData = useRef<HTMLSpanElement | null>(null);
  const SpanProfileChangePassword = useRef<HTMLSpanElement | null>(null);
  const SpanProfileUpdateYourEmail = useRef<HTMLSpanElement | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    console.log(pathname);

    if (pathname === '/my-account') {
      const container = RefContainerMyProfileSvg.current as HTMLDivElement;
      const h1Profile = container.firstChild as HTMLHeadingElement;
      const svg = container.lastChild as SVGElement;

      if (h1Profile && svg) {
        h1Profile.style.color = '#ec008c';
        svg.style.fill = '#ec008c';
      }
    }

    if (pathname === '/my-account/profile') {
      putAllSpansMyProfileBlack();

      const span = SpanProfileMyData.current as HTMLSpanElement;

      if (span) {
        span.style.color = '#ec008c';
      }
    }
  }, [location.pathname, nav]);

  const onClickContainerMyProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === null) return;

    whichWasClickedNav('my-profile');

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

    whichWasClickedNav('Informações LGPD');

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

  const onClickEachNavMyAccount = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>,
    whichWasClicked: string
  ) => {
    if (e.target === null) return;

    if (whichWasClicked === 'addresses') {
      whichWasClickedNav('endereços');
    } else if (whichWasClicked === 'order-history') {
      whichWasClickedNav('Historico de pedidos');
    } else if (whichWasClicked === 'refund-and-exchange-voucher') {
      whichWasClickedNav('Reembolso e vale troca');
    }

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
    if (isMyAccount) {
      setClickMyProfile(false);
      putAllSpansMyProfileBlack();
    }

    if (informationLGPD) {
      if (spansInformationsRef.current) {
        const allSpans = spansInformationsRef.current.querySelectorAll('span');
        setSpansInformations(allSpans);
      }
    }
  }, [informationLGPD, isMyAccount]);

  const onClickNavAfterClicked = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    whichItWasClicked: string
  ) => {
    if (e.target === null) return;

    whichWasClickedNav('my-profile');

    if (whichItWasClicked === 'my-data') {
      nav('/my-account/profile');
    } else if (whichItWasClicked === 'change-data') {
      nav('/my-account/update-profile');
    } else if (whichItWasClicked === 'update-password') {
      nav('/my-account/update-password');
    } else if (whichItWasClicked === 'update-your-email') {
      nav('/my-account/update-email');
    }

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

  const putAllSpansMyProfileBlack = () => {
    const span1 = SpanProfileMyData.current as HTMLSpanElement;
    const span2 = SpanProfileChangeData.current as HTMLSpanElement;
    const span3 = SpanProfileChangePassword.current as HTMLSpanElement;
    const span4 = SpanProfileUpdateYourEmail.current as HTMLSpanElement;

    span1.style.color = 'rgb(112, 112, 112)';
    span2.style.color = 'rgb(112, 112, 112)';
    span3.style.color = 'rgb(112, 112, 112)';
    span4.style.color = 'rgb(112, 112, 112)';
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

        <Styled.ContainerNavAfterClicked ref={spansRef} $clickMyProfile={clickMyProfile}>
          <Styled.Span
            onClick={(e) => onClickNavAfterClicked(e, 'my-data')}
            ref={SpanProfileMyData}>
            Meus dados
          </Styled.Span>
          <Styled.Span
            onClick={(e) => onClickNavAfterClicked(e, 'change-data')}
            ref={SpanProfileChangeData}>
            Alterar dados
          </Styled.Span>
          <Styled.Span
            onClick={(e) => onClickNavAfterClicked(e, 'update-password')}
            ref={SpanProfileChangePassword}>
            Alterar Senha
          </Styled.Span>
          <Styled.Span
            onClick={(e) => onClickNavAfterClicked(e, 'update-your-email')}
            ref={SpanProfileUpdateYourEmail}>
            Atualizar Seu E-mail
          </Styled.Span>
        </Styled.ContainerNavAfterClicked>
      </Styled.ContainerMyProfileAndModalNavAfterClicked>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e, 'addresses')} ref={RefH1Addresses}>
        Endereços
      </Styled.H1>
      <Styled.H1
        onClick={(e) => onClickEachNavMyAccount(e, 'order-history')}
        ref={RefH1OrderHistory}>
        Historico de pedidos
      </Styled.H1>
      <Styled.H1
        onClick={(e) => onClickEachNavMyAccount(e, 'refund-and-exchange-voucher')}
        ref={RefH1RefundAndExchangeVoucher}>
        Reembolso e vale troca
      </Styled.H1>
      <Styled.H1 onClick={(e) => onClickEachNavMyAccount(e, 'returns')} ref={RefH1Returns}>
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

        <Styled.ContainerNavAfterClicked
          ref={spansInformationsRef}
          $clickMyProfile={informationLGPD}>
          <Styled.Span onClick={(e) => onClickNavAfterClicked2(e)}>Meus Dados</Styled.Span>
          <Styled.Span onClick={(e) => onClickNavAfterClicked2(e)}>Meus Consentimentos</Styled.Span>
        </Styled.ContainerNavAfterClicked>
      </Styled.ContainerMyProfileAndModalNavAfterClicked>
    </Styled.ContainerNavigation>
  );
};

export default Navigation;
