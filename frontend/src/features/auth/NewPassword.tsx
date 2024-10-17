import { useEffect, useState } from "react";
import { requestGetUserByToken, sendNewPassword } from "./apiAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

type UserObject = { email: string; password: string };

const NewPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [userData, setUserData] = useState<UserObject>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(password1, password2);

    if (password1 === password2 && userData.email) {
      sendNewPassword({ email: userData.email, password: password1 });
      setPassword1("");
      setPassword2("");
    } else {
      toast.error("Las contraseñas no coinciden");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestGetUserByToken();

      if (data) {
        setUserData({
          email: data.email,
          password: "",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {userData.email ? (
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-8 text-primary-950">
          <h2 className="text-2xl font-bold text-center mb-6">
            Ingresa una contraseña nueva
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password1"
                type="password"
                value={password1}
                placeholder="Ingresa tu contraseña nueva"
                onChange={(e) => setPassword1(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                value={password2}
                placeholder="Repite la contraseña"
                onChange={(e) => setPassword2(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="flex items-center justify-end mt-8">
              <button
                className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Guardar contraseña
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-8 text-primary-950">
          <h2 className="text-2xl font-bold text-center mb-6">ERROR</h2>
          <p className="text-center font-semibold text-lg">
            El enlace ya no es válido
          </p>
          <p className="text-center mt-6">
            <Link to="/">Volver al inicio</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
