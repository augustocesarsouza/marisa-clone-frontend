import FacebookSvg from '../../Svg/SocialMediaAllSvg/FacebookSvg/Facebook';
import IntagramSvg from '../../Svg/SocialMediaAllSvg/IntagramSvg/IntagramSvg';
import PinterestSvg from '../../Svg/SocialMediaAllSvg/PinterestSvg/PinterestSvg';
import TwitterSvg from '../../Svg/SocialMediaAllSvg/TwitterSvg/TwitterSvg';
import YoutubeSvg from '../../Svg/SocialMediaAllSvg/YoutubeSvg/YoutubeSvg';
import * as Styled from './styled';

const ExclusiveOffersAndSocialShare = () => {
  return (
    <Styled.ContainerMain>
      <Styled.ContainerReceiveNewsAndEnjoyAndShare>
        <Styled.ContainerReceiveNews>
          <Styled.Span>Receba novidades e ofertas com preços exclusivos:</Styled.Span>

          <Styled.Button>CADASTRE-SE AQUI</Styled.Button>
        </Styled.ContainerReceiveNews>

        <Styled.ContainerEnjoyAndShare>
          <Styled.Span>Aproveite e compartilhe a Marisa nas Redes Sociais</Styled.Span>

          <Styled.ContainerSocialMedia data-testid="container-social-media">
            <FacebookSvg></FacebookSvg>
            <IntagramSvg></IntagramSvg>
            <TwitterSvg></TwitterSvg>
            <YoutubeSvg></YoutubeSvg>
            <PinterestSvg></PinterestSvg>
          </Styled.ContainerSocialMedia>
        </Styled.ContainerEnjoyAndShare>
      </Styled.ContainerReceiveNewsAndEnjoyAndShare>
    </Styled.ContainerMain>
  );
};

export default ExclusiveOffersAndSocialShare;
