import toast from "react-hot-toast";

const onLogout = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/auth/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      if (typeof window !== "undefined") sessionStorage.removeItem("jwt");

      toast.success("Cerrando sesión");
      setTimeout(() => {
        location.href = "/ingresar";
      }, 2000);
    } else {
      toast.error(data.message || "Error al iniciar sesión.");
    }
  } catch (error) {
    console.error("Ocurrió un problema");
  }
};

type LoginFormProps = {
  username: string;
  password: string;
};

const onLogin = async (values: LoginFormProps) => {
  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (response.ok) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("jwt", JSON.stringify(data));
      }
      toast.success("Has iniciado sesión");
      setTimeout(() => {
        location.href = "/";
      }, 2000);
    } else {
      toast.error(data.message || "Error al iniciar sesión.");
    }
  } catch (error) {
    toast.error("Ocurrió un problema");
  }
};

type SignupFormProps = {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

const onSignup = async (values: SignupFormProps) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/usuarios",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success("Cuenta creada exitosamente.");
      setTimeout(() => {
        location.href = "/cuenta-creada";
      }, 2000);
    } else {
      toast.error(data.message || "Hubo un problema con el registro.");
    }
  } catch (error) {
    toast.error("Hubo un problema con el registro.");
  }
};

const getAllUsers = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/usuarios",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error("Hubo un problema con el registro.");
  }
};

const requestPasswordReset = async (values: { email: string }) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/auth/request-password-reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message || "Revisa tu bandeja de correo");
    } else {
      toast.error(data.message || "Error.");
    }
  } catch (error) {
    toast.error("Ocurrió un problema");
  }
};

const sendNewPassword = async (values: { email: string; password: string }) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/auth/set-new-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message || "Contraseña actualizada con éxito");
      setTimeout(() => {
        window.location.href = "/ingresar";
      }, 2000);
    } else {
      toast.error(data.message || "Ocurrió un problema");
    }
  } catch (error) {
    toast.error("Ocurrió un problema");
  }
};

const requestGetUserByToken = async () => {
  const url = window.location.href;
  const token = url.split("/").slice(-1)[0];

  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/usuarios/user-by-token/" + token,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    toast.error("Ocurrió un problema");
  }
};

export {
  onLogout,
  onLogin,
  onSignup,
  getAllUsers,
  requestPasswordReset,
  sendNewPassword,
  requestGetUserByToken,
};
