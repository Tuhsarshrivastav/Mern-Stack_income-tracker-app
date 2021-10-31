import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenses/expenseSlices";
import usersReducer from "../slices/users/usersSlices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
  },
});
export default store;
