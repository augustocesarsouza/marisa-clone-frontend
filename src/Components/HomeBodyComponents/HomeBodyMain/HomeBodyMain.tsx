// import * as Styled from './styled';

import HighlightImgs from '../HighlightComponents/HighlightImgs/HighlightImgs';
import StoreBenefitsBar from '../HighlightComponents/StoreBenefitsBar/StoreBenefitsBar';

const HomeBodyMain = () => {
  return (
    <div className="!pb-[1000px]">
      <div className="flex flex-col">
        <HighlightImgs />
        <StoreBenefitsBar />
      </div>

      <div>
        <h1>other</h1>
      </div>
    </div>
  );
};

export default HomeBodyMain;
