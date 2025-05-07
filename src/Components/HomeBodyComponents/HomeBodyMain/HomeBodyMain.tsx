// import * as Styled from './styled';

import HighlightImgs from '../HighlightComponents/HighlightImgs/HighlightImgs';
import StoreBenefitsBar from '../HighlightComponents/StoreBenefitsBar/StoreBenefitsBar';
import BrowseByCategoryMain from '../BrowseByCategoryComponents/BrowseByCategoryMain/BrowseByCategoryMain';

const HomeBodyMain = () => {
  return (
    <div className="!pb-[1000px]">
      <div className="flex flex-col">
        <HighlightImgs />
        <StoreBenefitsBar />
      </div>

      <BrowseByCategoryMain />
    </div>
  );
};

export default HomeBodyMain;
