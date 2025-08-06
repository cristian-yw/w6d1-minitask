import logo from "/vite.svg";
import ListItem from "./ListItem.jsx";
import { useContext } from "react";
import { AuthContext } from "./authContext.js";


function Header() {
    const { isLoggedIn, username } = useContext(AuthContext);
  const navBtn = [
    { text: "NO1", route: "/shopping" },
    { text: "NO2", route: "/login" },
    { text: "NO3", route: "/todos" },
  ];
  return (
    <header 
    >
      <nav className="mx-auto flex justify-between items-center w-full max-w-6xl ">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <ul className="flex list-none gap-2.5">
          {navBtn.map((nav, idx) => {
            // return <li key={idx}>{nav}</li>
            return <ListItem listText={nav.text} to={nav.route} key={idx} />;
          })}
        </ul>
      </nav>
        <div className="flex items-center gap-2.5 ml-auto">
            {isLoggedIn ? (
            <span className="text-white">Selamat datang, {username}!</span>
            ) : (
            <span className="text-white">Silakan login</span>
            )}
        </div>
    </header>
  );
}

export default Header;
