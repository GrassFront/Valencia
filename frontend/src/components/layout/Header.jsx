import Navbar from "../common/Navbar";

export default function Header({ activeItem = "Home", onLoginClick }) {
  return (
    <header className="sticky top-0 z-40 w-full">
      <Navbar activeItem={activeItem} onLoginClick={onLoginClick} />
    </header>
  );
}

