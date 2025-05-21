// import * as Styled from './styled';

import HighlightImgs from '../HighlightComponents/HighlightImgs/HighlightImgs';
import StoreBenefitsBar from '../HighlightComponents/StoreBenefitsBar/StoreBenefitsBar';
import BrowseByCategoryMain from '../BrowseByCategoryComponents/BrowseByCategoryMain/BrowseByCategoryMain';
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
    <div>
      <div className="flex flex-col">
        <HighlightImgs />
        <StoreBenefitsBar />
      </div>

      <BrowseByCategoryMain />

      <HomepageMasculineChildishPlusSize />

      <CardigansSweatshirtsJeans />

      <WinterShoesAndCompleteYourLook />

      <HomepageMarisaIntimate />

      <LingerieEverydayAndForGiftingBelts />

      <MoreOffersAndJustArrived />

      <HomepageBasicBlousesCharactersWholeFamilyLittleFinds />

      <HomepageDownloadMarisaApp />
    </div>
  );
};

export default HomeBodyMain;
