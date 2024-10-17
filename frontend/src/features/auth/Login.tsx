import { Link } from "react-router-dom";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import FormFooter from "../../components/form/FormFooter";
import { loginSchema } from "./inputValidationSchema";
import { onLogin } from "./apiAuth";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-secondary-900 dark:text-secondary-50">
      <FormContainer checkoutSchema={loginSchema} onSubmit={onLogin}>
        <FormHeader title="Iniciar sesión" />
        <FormInput
          inputType="text"
          labelText="Nombre de usuario"
          inputName="username"
        />
        <FormInput
          inputType="password"
          labelText="Contraseña"
          inputName="password"
        />
        <FormFooter>
          <Link
            className="inline-block align-baseline font-medium text-sm text-primary-950"
            to="/registrarse"
          >
            ¿No estas registrado? Crear una cuenta
          </Link>
          <Link
            className="inline-block align-baseline font-medium text-sm text-primary-950"
            to="/recuperacion-contrasena"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ingresar
          </button>
        </FormFooter>
      </FormContainer>
    </div>
  );
};

export default Login;
