import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenses/expenseSlices";
import incomeReducer from "../slices/income/incomeSlices";
import usersReducer from "../slices/users/usersSlices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
    income:incomeReducer
  },
});
export default store;
