import LinkList from "./LinkList";

const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="navbar navbar-end bg-base-100 mx-auto my-4 w-11/12 rounded-xl shadow-xl">
        <LinkList />
      </nav>
    </header>
  );
};

export default Header;
