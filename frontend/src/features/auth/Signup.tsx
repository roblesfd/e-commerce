import { Link } from "react-router-dom";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormFooter from "../../components/form/FormFooter";
import FormInput from "../../components/form/FormInput";
import { signupSchema } from "./inputValidationSchema";
import { onSignup } from "./apiAuth";

const Signup = () => {
  // const handleSignupClick = async (values: FormProps) => {
  //   try {
  //     const response = await fetch(
  //       import.meta.env.VITE_BACKEND_URL + "/usuarios",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success("Cuenta creada exitosamente.");
  //       setTimeout(() => {
  //         location.href = "/cuenta-creada";
  //       }, 3000);
  //     } else {
  //       toast.error(data.message || "Hubo un problema con el registro.");
  //     }
  //   } catch (error) {
  //     toast.error("Hubo un problema con el registro.");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-20 dark:bg-secondary-800 dark:text-secondary-50">
      <FormContainer checkoutSchema={signupSchema} onSubmit={onSignup}>
        <FormHeader title="Regístro de cuenta" />
        <FormInput
          inputType="text"
          labelText="Nombre de usuario"
          inputName="username"
        />
        <FormInput inputType="text" labelText="Nombre" inputName="name" />
        <FormInput inputType="text" labelText="Apellido" inputName="lastname" />
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
          <Link
            className="inline-block align-baseline font-bold text-sm text-primary-950"
            to="/ingresar"
          >
            ¿Ya tienes una cuenta? Iniciar sesión
          </Link>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrarme
          </button>
        </FormFooter>
      </FormContainer>
    </div>
  );
};

export default Signup;
