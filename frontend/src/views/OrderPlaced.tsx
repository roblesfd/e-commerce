import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-8 text-primary-950">
        <h2 className="text-2xl font-bold text-center mb-6">
          ¡Tu pedido ha sido procesado exitosamente!
        </h2>
        <p>
          Para poder utlizar tu cuenta, enviamos un enlace a tu dirección de
          correo para confirmar tu cuenta
        </p>
        <div className="flex justify-around items-center">
          <p className="font-bold mt-6 hover:opacity-80">
            <Link to="/mis-pedidos">Ver mis pedidos</Link>
          </p>
          <p className="font-bold mt-6 hover:opacity-80">
            <Link to="/">Volver al inicio</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
