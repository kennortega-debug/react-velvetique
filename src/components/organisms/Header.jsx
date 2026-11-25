import HeaderBrand from "../molecules/HeaderBrand";
import HeaderNavigation from "../molecules/HeaderNavigation";
import HeaderActions from "../molecules/HeaderActions";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <HeaderBrand />

        <HeaderNavigation />

        <HeaderActions />
      </div>
    </header>
  );
};
