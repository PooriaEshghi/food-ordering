import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePages from "./pages/HomePages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>
        <HomePages/>
      </Layout>} />
      <Route path="/user-profile" element={<span>User Profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
