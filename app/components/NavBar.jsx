import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="py-4 md:py-6 border-b border-gray-400">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
      </div>
    </nav>
  );
};
export default NavBar;
