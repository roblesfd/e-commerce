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
import { useContext } from "react";
import SidebarContext from "../context/sidebarContext";
import Sidebar from "./Sidebar";
import ProductItem from "../features/product/ProductItem";

const dropdownItemsData = [
  { to: "/", product: "Perfil" },
  { to: "/", product: "Configuración" },
  { to: "/", product: "Cerrar sesión" },
];

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
  const { sidebar, setSidebar } = useContext(SidebarContext);
  const navbarElement = (
    <Navbar
      bgColor="primary-500"
      title="E-COMMERCE"
      size="small"
      includesSearchBar={true}
    >
      <NavbarItem type="link" label="Acerca de" to="/" />
      <NavbarItem type="link" label="Productos" to="/" />
      <NavbarItem type="button" label="Productos" />
      <NavbarItem
        type="dropdown"
        dropdownTitle={<FontAwesomeIcon icon={faUser} />}
        dropdownItems={dropdownItemsData}
        to="/"
      />
      <NavbarItem
        type="button"
        label={<FontAwesomeIcon icon={faCartShopping} />}
        onClick={() => setSidebar(!sidebar)}
      />
    </Navbar>
  );
  const productObj = {
    id: 1,
    price: "$500.00",
    image: "https://via.placeholder.com/150",
  };
  return (
    <>
      {navbarElement}
      <div className="flex">
        <main className="min-h-screen w-full overflow-scroll bg-primary-30">
          <Outlet />
        </main>
        {sidebar && (
          <Sidebar isExtensible={true} bgColor="white">
            <li className="text-center mb-6">
              <h3 className="text-[14px] text-black">Subtotal:</h3>
              <span className="font-semibold text-black">$750.00</span>
              <div className="my-2">
                <Link
                  to="/"
                  className="rounded-md  border-2 text-white  border-secondary-500  bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 px-2 py-1"
                >
                  Ir al carrito
                </Link>
              </div>
            </li>
            {Array(5)
              .fill({ ...productObj })
              .map((product) => (
                <li>
                  <ProductItem
                    key={product.id}
                    product={product}
                    itemWidth={100}
                    direction="col"
                  />
                </li>
              ))}
          </Sidebar>
        )}
      </div>
      {footerElement}
    </>
  );
};

export default MainLayout;
