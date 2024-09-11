import { Link } from "react-router-dom";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import FormFooter from "../../components/form/FormFooter";
import { loginSchema } from "./inputValidationSchema";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-secondary-900 dark:text-secondary-50">
      <FormContainer checkoutSchema={loginSchema}>
        <FormHeader title="Iniciar sesión" />
        <FormInput
          inputType="email"
          labelText="Correo electrónico"
          inputName="email"
        />
        <FormInput
          inputType="password"
          labelText="Contraseña"
          inputName="password"
        />
        <FormFooter>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ingresar
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-primary-950"
            to="/registrarse"
          >
            ¿No estas registrado? Crear una cuenta
          </Link>
        </FormFooter>
      </FormContainer>
    </div>
  );
};

export default Login;
