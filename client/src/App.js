import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/users/Login";
import Register from "./screens/users/Register";
import AddIncome from "./screens/income/AddIncome";
import AddExpense from "./screens/expense/AddExpense";
import Profile from "./screens/users/Profile";
import PrivateProtectRoute from "./components/Navigation/PrivateProtectRoute";
import NotAdmin from "./components/NotAdmin";
import DashboardData from "./screens/users/DashboardData";
import AdminRoute from "./components/Navigation/Private/AdminRoute";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-admin" component={NotAdmin} />
        <AdminRoute exact path="/dashboard" component={DashboardData} />
        <PrivateProtectRoute exact path="/add-income" component={AddIncome} />
        <PrivateProtectRoute exact path="/add-expense" component={AddExpense} />
        <PrivateProtectRoute exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
