// import * as Styled from './styled';

import HighlightImgs from '../HighlightComponents/HighlightImgs/HighlightImgs';
import StoreBenefitsBar from '../HighlightComponents/StoreBenefitsBar/StoreBenefitsBar';
import BrowseByCategoryMain from '../BrowseByCategoryComponents/BrowseByCategoryMain/BrowseByCategoryMain';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import CardigansSweatshirtsJeans from '../FashionCategoriesComponents/CardigansSweatshirtsJeans/CardigansSweatshirtsJeans';
import HomepageMasculineChildishPlusSize from '../FashionCategoriesComponents/HomepageMasculineChildishPlusSize/HomepageMasculineChildishPlusSize';
import WinterShoesAndCompleteYourLook from '../FashionCategoriesComponents/WinterShoesAndCompleteYourLook/WinterShoesAndCompleteYourLook';
import HomepageMarisaIntimate from '../FashionCategoriesComponents/HomepageMarisaIntimate/HomepageMarisaIntimate';
import LingerieEverydayAndForGiftingBelts from '../FashionCategoriesComponents/LingerieEverydayAndForGiftingBelts/LingerieEverydayAndForGiftingBelts';
import MoreOffersAndJustArrived from '../FashionCategoriesComponents/MoreOffersAndJustArrived/MoreOffersAndJustArrived';
import HomepageBasicBlousesCharactersWholeFamilyLittleFinds from '../FashionCategoriesComponents/HomepageBasicBlousesCharactersWholeFamilyLittleFinds/HomepageBasicBlousesCharactersWholeFamilyLittleFinds';
import HomepageDownloadMarisaApp from '../FashionCategoriesComponents/HomepageDownloadMarisaApp/HomepageDownloadMarisaApp';

const HomeBodyMain = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <HighlightImgs />
        <StoreBenefitsBar />
      </div>

      <BrowseByCategoryMain />

      <CardigansSweatshirtsJeans />
      {/* Quando fazer o Product no backend de algum jeito colocar uma variavel que saiba qual é o 'blusa, acessorios-e-bolsas, tricos' só com Product */}

      <HomepageMasculineChildishPlusSize />

      <WinterShoesAndCompleteYourLook />

      <HomepageMarisaIntimate />

      <LingerieEverydayAndForGiftingBelts />

      <MoreOffersAndJustArrived />

      <HomepageBasicBlousesCharactersWholeFamilyLittleFinds />

      <HomepageDownloadMarisaApp />

      <FooterMain></FooterMain>
    </div>
  );
};

export default HomeBodyMain;
