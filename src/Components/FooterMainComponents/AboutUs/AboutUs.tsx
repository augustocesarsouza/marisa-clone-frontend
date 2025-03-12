import * as Styled from './styled';

const AboutUs = () => {
  return (
    <Styled.ContainerMain>
      <Styled.Container>
        <Styled.ContainerMainFirst>
          <Styled.ContainerAllHighlighted data-testid="container-departments">
            <Styled.H1>Departamentos</Styled.H1>

            <Styled.Span>Feminino</Styled.Span>
            <Styled.Span>Calçados</Styled.Span>
            <Styled.Span>Lingerie</Styled.Span>
            <Styled.Span>Jeans</Styled.Span>
            <Styled.Span>Plus Size</Styled.Span>
            <Styled.Span>Acessórios</Styled.Span>
            <Styled.Span>Infantil</Styled.Span>
            <Styled.Span>Masculino</Styled.Span>
            <Styled.Span>Marcas</Styled.Span>
            <Styled.Span>Roupas Femininas</Styled.Span>
            <Styled.Span>Blusas</Styled.Span>
          </Styled.ContainerAllHighlighted>
          <Styled.ContainerAllHighlighted data-testid="container-institutional">
            <Styled.H1>Institucional</Styled.H1>

            <Styled.Span>Sobre a Marisa</Styled.Span>
            <Styled.Span>Nossas Lojas</Styled.Span>
            <Styled.Span>Investidores</Styled.Span>
            <Styled.Span>Termos de Segurança</Styled.Span>
            <Styled.Span>Imprensa</Styled.Span>
            <Styled.Span>Cartão Marisa</Styled.Span>
            <Styled.Span>Mapa do Site</Styled.Span>
            <Styled.Span>Certificados</Styled.Span>
            <Styled.Span>Politica de Privacidade Geral</Styled.Span>
            <Styled.Span>Fornecedores</Styled.Span>
            <Styled.Span>Canal de Denúncias</Styled.Span>
            <Styled.Span>Sustentabilidade</Styled.Span>
            <Styled.Span>Igualdade Salarial</Styled.Span>
          </Styled.ContainerAllHighlighted>
          <Styled.ContainerAllHighlighted data-testid="container-customer-service">
            <Styled.H1>Atendimento ao Cliente</Styled.H1>

            <Styled.Span>Nossos canais de Atendimento</Styled.Span>
            <Styled.Span>Fale com a gente</Styled.Span>
            <Styled.Span>Formas de Pagamento</Styled.Span>
            <Styled.Span>Troca e Devoluções</Styled.Span>
            <Styled.Span>Meus Pedidos</Styled.Span>
            <Styled.Span>Como Comprar</Styled.Span>
            <Styled.Span>Prazo de Entrega</Styled.Span>
            <Styled.Span>2ª Via de Boleto</Styled.Span>
            <Styled.Span>Regras e Promoções</Styled.Span>
          </Styled.ContainerAllHighlighted>

          <Styled.ContainerWorkWithUsAnnouncements>
            <Styled.ContainerAllHighlighted data-testid="container-wirk-with-us">
              <Styled.H1>Trabalhe Conosco</Styled.H1>

              <Styled.Span>Trabalhe Conosco</Styled.Span>
              <Styled.Span>Contratação de Modelos</Styled.Span>
            </Styled.ContainerAllHighlighted>
            <Styled.ContainerAllHighlighted data-testid="container-announcements">
              <Styled.H1>Comunicados</Styled.H1>

              <Styled.Span>Comunicado de Incidente de Segurança</Styled.Span>
            </Styled.ContainerAllHighlighted>
          </Styled.ContainerWorkWithUsAnnouncements>
        </Styled.ContainerMainFirst>

        <Styled.ContainerDidntFindWhatYouWereLookingFor>
          <Styled.H1>Não encontrou o que estava procurando?</Styled.H1>

          <Styled.ContainerWeCanHelp data-testid="container-we-can-help">
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741706148/imgs-backend-frontend-marisa/frontend/ico_ajuda_dytfie.webp"
              alt="img-message"
            />
            Podemos ajudar? Fale conosco.
          </Styled.ContainerWeCanHelp>

          <Styled.ContainerWeCanHelp data-testid="container-find-the-stores">
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741707471/imgs-backend-frontend-marisa/frontend/ico_localizacao_cinza_nfjrrk.webp"
              alt="img-location"
            />
            Encontre as lojas mais próximas.
          </Styled.ContainerWeCanHelp>
        </Styled.ContainerDidntFindWhatYouWereLookingFor>
      </Styled.Container>
    </Styled.ContainerMain>
  );
};

export default AboutUs;
