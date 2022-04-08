import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Products from "./pages/products/Products";
import Users from './pages/users/Users';
import Error404 from "./pages/Error404";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EditUser from "./pages/users/EditUser";
import EditProduct from "./pages/products/EditProduct";
import ProtectedRoute from "./components/Protected.route";

function App() {
  return (
    <Router>
      <div id="content-wrapper">
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/dashboard" component={Home}>
            {/* <Home /> */}
          </ProtectedRoute>
          <ProtectedRoute exact path="/users" component={Users}>
            {/* <Users /> */}
          </ProtectedRoute>
          <ProtectedRoute exact path="/products" component={Products}>
            {/* <Products /> */}
          </ProtectedRoute>
          <ProtectedRoute exact path="/edit-user/:id" component={EditUser}>
            {/* <EditUser /> */}
          </ProtectedRoute>
          <ProtectedRoute exact path="/edit-product/:id" component={EditProduct}>
            {/* <EditProduct /> */}
          </ProtectedRoute>
          <Route path="*">
            <Error404></Error404>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
