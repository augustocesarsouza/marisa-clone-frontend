import AccessoriesCategory from '../CategoryNavigationComponents/AccessoriesCategory/AccessoriesCategory';
import ChildishCategory from '../CategoryNavigationComponents/ChildishCategory/ChildishCategory';
import FemaleCategory from '../CategoryNavigationComponents/FemaleCategory/FemaleCategory';
import FootwearCategory from '../CategoryNavigationComponents/FootwearCategory/FootwearCategory';
import HomeCategory from '../CategoryNavigationComponents/HomeCategory/HomeCategory';
import JeansCategory from '../CategoryNavigationComponents/JeansCategory/JeansCategory';
import LingerieCategory from '../CategoryNavigationComponents/LingerieCategory/LingerieCategory';
import MasculineCategory from '../CategoryNavigationComponents/MasculineCategory/MasculineCategory';
import OffersCategory from '../CategoryNavigationComponents/OffersCategory/OffersCategory';
import PlusSizeCategory from '../CategoryNavigationComponents/PlusSizeCategory/PlusSizeCategory';

interface NavModalFloatingMainProps {
  whichNavigation: string;
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const NavModalFloatingMain = ({
  whichNavigation,
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: NavModalFloatingMainProps) => {
  return (
    <>
      {whichNavigation === 'feminino' && (
        <FemaleCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'calcado' && (
        <FootwearCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'lingerie' && (
        <LingerieCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'jeans' && (
        <JeansCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'masculino' && (
        <MasculineCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'infantil' && (
        <ChildishCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'plus-size' && (
        <PlusSizeCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'acessorios' && (
        <AccessoriesCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'casa' && (
        <HomeCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}

      {whichNavigation === 'oferta' && (
        <OffersCategory
          onMouseEnterContainerMainModal={onMouseEnterContainerMainModal}
          onMouseLeaveContainerMainModal={onMouseLeaveContainerMainModal}
        />
      )}
    </>
  );
};

export default NavModalFloatingMain;
