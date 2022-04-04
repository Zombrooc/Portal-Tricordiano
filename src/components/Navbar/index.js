import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  CollectionIcon,
  HomeIcon,
  ShoppingCartIcon,
  TicketIcon,
  ArrowCircleRightIcon,
  UserAddIcon,
} from "@heroicons/react/outline";

import {
  BrandName,
  HamburgerButton,
  Header,
  Menu,
  AuthActions,
  UserAvatar,
} from "./styles";

import { AuthContext } from "../../contexts/AuthContext";
import useWindowSize from "../../hook/useWindowSize";

const menuOptions = [
  {
    name: "Feed",
    path: "/",
    icon: <CollectionIcon style={{ width: "1.25rem", height: "1.25rem" }} />,
  },
  // {
  //   name: "Imóveis",
  //   path: "/properties",
  //   icon: <HomeIcon style={{ width: "1.25rem", height: "1.25rem" }} />,
  // },
  {
    name: "Lojas",
    path: "/shop",
    icon: <ShoppingCartIcon style={{ width: "1.25rem", height: "1.25rem" }} />,
  },
  // {
  //   name: "Eventos",
  //   path: "/events",
  //   icon: <TicketIcon style={{ width: "1.25rem", height: "1.25rem" }} />,
  // },
];

const Navbar = ({ currentPage }) => {
  const size = useWindowSize();

  const [menuStatus, setMenuStatus] = useState(false);

  const { isAuthenticated, user, signOut } = useContext(AuthContext);

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  return (
    <Header>
      <div className="container" style={{ justifyContent: "space-between" }}>
        <BrandName>
          Portal
          <br />
          Tricordiano
        </BrandName>
        <Menu menuOpen={menuStatus}>
          {menuOptions.map((option, index) => (
            <Link href={option.path} key={index}>
              <a className={`${currentPage === option.name ? 'active' : null}`}>
                {option.icon}
                <span>{option.name}</span>
              </a>
            </Link>
          ))}
          <AuthActions>
            {isAuthenticated ? (
              <UserAvatar>
                <div className="text">
                  <span className="name">{ user.name }</span>
                  <small className="username">@{ user.username }</small>
                </div>

                <button
                  type="button"
                  className="signoutButton"
                  onClick={signOut}
                >
                  Sair
                </button>
              </UserAvatar>
            ) : (
              <>
                <Link href="/auth/signin">
                  <a>
                    <ArrowCircleRightIcon
                      style={{ width: "1.25rem", height: "1.25rem" }}
                    />
                    <span>Entrar</span>
                  </a>
                </Link>
                <Link href="/auth/signup">
                  <a>
                    <UserAddIcon
                      style={{ width: "1.25rem", height: "1.25rem" }}
                    />
                    <span>Cadastrar</span>
                  </a>
                </Link>
              </>
            )}
          </AuthActions>
        </Menu>
        <HamburgerButton active={menuStatus} onClick={menuHandler}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HamburgerButton>
      </div>
    </Header>
  );
};

export default Navbar;
