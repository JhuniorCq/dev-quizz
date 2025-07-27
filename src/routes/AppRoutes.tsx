import { Navigate, Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Game from "../pages/Game";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game/:language" element={<Game />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
