import { Link } from "react-router-dom";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormFooter from "../../components/form/FormFooter";
import FormInput from "../../components/form/FormInput";
import { signupSchema } from "./inputValidationSchema";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-secondary-900 dark:text-secondary-50">
      <FormContainer checkoutSchema={signupSchema}>
        <FormHeader title="Regístro de cuenta" />
        <FormInput
          inputType="text"
          labelText="Nombre de usuario"
          inputName="username"
        />
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
            Registrarme
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-primary-950"
            to="/ingresar"
          >
            ¿Ya tienes una cuenta? Iniciar sesión
          </Link>
        </FormFooter>
      </FormContainer>
    </div>
  );
};

export default Signup;
