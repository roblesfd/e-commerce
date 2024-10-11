import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./components/404";
import MainLayout from "./components/MainLayout";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";
import ComponentTest from "./views/ComponentTest";
import ConfirmAccount from "./features/auth/ConfirmAccount";
import CreatedAccount from "./features/auth/CreatedAccount";
import PasswordRecovery from "./features/auth/PasswordRecovery";
import ProductsResult from "./views/ProductsResult";
import ShoppingCart from "./features/shopping-cart/ShoppingCart";
import OrderConfirmation from "./views/OrderConfirmation";
import OrderPlaced from "./views/OrderPlaced";
import ProductDetail from "./features/product/ProductDetail";
import MyOrders from "./features/order/MyOrders";
import WishList from "./views/WishList";
import Micuenta from "./views/MyAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/productos">
          <Route index element={<ProductsResult />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="/pruebas" element={<ComponentTest />} />
        <Route path="/mi-carrito" element={<ShoppingCart />} />
        <Route path="/confirmacion-pedido" element={<OrderConfirmation />} />
        <Route path="/pedido-realizado" element={<OrderPlaced />} />
        <Route path="/mis-pedidos" element={<MyOrders />} />
        <Route path="/lista-de-deseos" element={<WishList />} />
        <Route path="/mi-cuenta" element={<Micuenta />} />
      </Route>
      <Route>
        <Route path="registrarse" element={<Signup />} />
        <Route path="ingresar" element={<Login />} />
        <Route path="/confirmar-cuenta" element={<ConfirmAccount />} />
        <Route path="/cuenta-creada" element={<CreatedAccount />} />
        <Route path="/recuperacion-contraseña" element={<PasswordRecovery />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
