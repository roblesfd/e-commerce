import Feature from "../components/Feature";
import {
  faCartShopping,
  faGear,
  faList,
  faMoneyBill,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";

const MyAccount = () => {
  return (
    <div className=" p-6 md:p-8">
      <Typography type="title3">Mi cuenta</Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 md:mt-7">
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faMoneyBill}
              size="medium"
              text="Mis pedidos"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faCartShopping}
              size="medium"
              text="Mi carrito de compras"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faList}
              size="medium"
              text="Lista de deseos"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faUser}
              size="medium"
              text="Información de cuenta"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faGear}
              size="medium"
              text="Configuración de cuenta"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
        <div className="col-span-1 mx-auto">
          <Link to="#">
            <Feature
              icon={faStar}
              size="medium"
              text="Lorem ipsum"
              className="w-64"
              direction="row"
              isBordered={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
