import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoute from "./components/Pages/AdminRoute/AdminRoute";
import MakeAdmin from "./components/Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./components/Pages/Dashboard/AdminDashboard/ManageOrders/ManageOrders";
import GameDetails from "./components/Pages/GameDetails/GameDetails";
import Home from "./components/Pages/Home/Home/Home";
import Register from "./components/Pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game/:id"
            element={
              <PrivateRoute>
                <GameDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/makeadmin"
            element={
              <PrivateRoute>
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/manageorders"
            element={
              <PrivateRoute>
                <AdminRoute>
                  <ManageOrders />
                </AdminRoute>
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
