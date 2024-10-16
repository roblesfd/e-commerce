import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ConfirmAccount = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { token } = useParams();

  const confirmAccountWithToken = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/confirmar/" + token,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Hubo un problema con la confirmación de la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    confirmAccountWithToken();
  }, []);

  let content;

  if (loading) {
    content = (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Cargando...</h2>
        <p>Por favor espera mientras confirmamos tu cuenta.</p>
      </div>
    );
  } else if (success) {
    content = (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">
          Tu cuenta ha sido confirmada exitosamente
        </h2>
        <p className="font-bold">
          <Link to={`/ingresar`}>Ahora puedes Iniciar sesión en tu cuenta</Link>
        </p>
      </div>
    );
  } else {
    content = (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Error</h2>
        <p>El enlace solicitado ya no está disponible</p>
        <p className="mt-8 hover:text-black font-bold">
          <Link to={`/`}>Volver al inicio</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-8 text-primary-950">
        {content}
      </div>
    </div>
  );
};

export default ConfirmAccount;
