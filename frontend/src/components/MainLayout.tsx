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
import CategoryNavbar from "./CategoryNavbar";
import { categoryNavbarData } from "../utils/mockData";
import { onLogout } from "../features/auth/apiAuth";

const dropdownNavbarData = [
  { to: "/mi-cuenta", label: "Mi cuenta" },
  { to: "/", label: "Configuración" },
  { type: "button", label: "Cerrar sesión", onClick: onLogout },
];

const footerElement = (
  <FooterContainer
    size="small"
    bottomText="© 2024 E-commerce. Todos los derechos reservados"
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
      <NavbarItem type="link" label="Mis pedidos" to="/mis-pedidos" />
      <NavbarItem
        type="dropdown"
        dropdownTitle={<FontAwesomeIcon icon={faUser} />}
        dropdownItems={dropdownNavbarData}
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
      <CategoryNavbar categories={categoryNavbarData} bgColor="slate-50" />
      <div className="flex">
        <main className="min-h-screen w-full overflow-scroll bg-primary-20 dark:bg-primary-800">
          <Outlet />
        </main>
        {sidebar && (
          <Sidebar isExtensible={true} bgColor="zinc-50">
            <ul className="pb-10">
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
              {Array(8)
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
            </ul>
          </Sidebar>
        )}
      </div>
      {footerElement}
    </>
  );
};

export default MainLayout;
