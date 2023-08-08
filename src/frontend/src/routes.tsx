import { Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import FlowPage from "./pages/FlowPage";
import HomePage from "./pages/MainPage";
import LoginPage from "./pages/loginPage";
import LoginAdminPage from "./pages/AdminPage/LoginPage";
import AdminPage from "./pages/AdminPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/flow/:id/">
        <Route path="" element={<FlowPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/admin" element={<LoginAdminPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default Router;
