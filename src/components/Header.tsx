import Logo from "./Logo";
import Socials from "./Socials";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0 bg-accent/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <Logo />
          {/* navigasi-medium */}
          <NavLinks containerStyles="md:flex gap-2 items-center hidden" />

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
