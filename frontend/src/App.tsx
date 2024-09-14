import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./components/404";
import MainLayout from "./components/MainLayout";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";
import ComponentTest from "./views/ComponentTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pruebas" element={<ComponentTest />} />
      </Route>
      <Route>
        <Route path="registrarse" element={<Signup />} />
        <Route path="ingresar" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
