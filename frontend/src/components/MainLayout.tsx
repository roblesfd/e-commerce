import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NavbarItem from "./navbar/NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import FooterContainer from "./footer/FooterContainer";
import FooterItem from "./footer/FooterItem";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const dropdownItemsData = [
  { to: "/", label: "Perfil" },
  { to: "/", label: "Configuración" },
  { to: "/", label: "Cerrar sesión" },
];

const navbarElement = (
  <Navbar bgColor="primary-500" title="E-COMMERCE" size="small">
    <NavbarItem type="link" label="Acerca de" to="/" />
    <NavbarItem type="link" label="Productos" to="/" />
    <NavbarItem type="button" label="Productos" />
    <NavbarItem
      type="dropdown"
      dropdownTitle={<FontAwesomeIcon icon={faUser} />}
      dropdownItems={dropdownItemsData}
      to="/"
    />
    <NavbarItem type="link" label={<FontAwesomeIcon icon={faCartShopping} />} />
  </Navbar>
);

const footerElement = (
  <FooterContainer
    size="small"
    bottomText="© 2024 Helpdesk. Todos los derechos reservados"
  >
    <FooterItem>
      <Link to="/">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </FooterItem>
    <FooterItem>
      <Link to="/">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </FooterItem>
    <FooterItem>
      <Link to="/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </FooterItem>
  </FooterContainer>
);

const MainLayout: React.FC = () => {
  return (
    <>
      {navbarElement}
      <div className="flex">
        <main className="min-h-screen w-full overflow-scroll">
          <Outlet />
        </main>
      </div>
      {footerElement}
    </>
  );
};

export default MainLayout;
