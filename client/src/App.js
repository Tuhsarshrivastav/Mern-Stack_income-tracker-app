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
import ExpensesList from "./screens/expense/ExpensesList";
import EditContent from "./components/EditContent";
import IncomeList from "./screens/income/IncomeList";
import UserProfileExpList from "./screens/users/UserProfileExpList";
import UserProfileIncList from "./screens/users/UserProfileIncList";
import UpdateProfile from "./screens/users/UpdateProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateProtectRoute exact path="/expenses" component={ExpensesList} />
        <PrivateProtectRoute exact path="/incomes" component={IncomeList} />
        <PrivateProtectRoute exact path="/edit" component={EditContent} />
        <PrivateProtectRoute
          exact
          path="/update-profile"
          component={UpdateProfile}
        />
        <PrivateProtectRoute
          exact
          path="/user-expenses"
          component={UserProfileExpList}
        />
        <PrivateProtectRoute
          exact
          path="/user-income"
          component={UserProfileIncList}
        />
        <Route exact path="/not-admin" component={NotAdmin} />
        <AdminRoute
          exact
          path="/dashboard"
          component={DashboardData}
        />
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
