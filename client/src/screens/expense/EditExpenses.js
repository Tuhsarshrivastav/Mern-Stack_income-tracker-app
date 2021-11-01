import React from "react";
import moneySVG from "../../img/money.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateExpAction } from "../../redux/slices/expenses/expenseSlices";
import DisabledButton from "../../components/DisabledButton";

//form validations
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount Name is required"),
});
const EditContent = ({
  location: {
    state: { expense },
  },
}) => {
  //dispatch
  const dispatch = useDispatch();

  //formik form
  const formik = useFormik({
    initialValues: {
      title: expense?.title,
      description: expense?.description,
      amount: expense?.amount,
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        id: expense?._id,
      };
      dispatch(updateExpAction(data));
    },
    validationSchema: formSchema,
  });

  const expensedata = useSelector((state) => state.expenses);
  const { appErr, serverErr, loading, expenseUpdated } = expensedata;
  return (
    <section className="py-5 bg-secondary vh-100">
      <div className="container text-center">
        <a className="d-inline-block mb-5">
          <img
            className="img-fluid"
            src={moneySVG}
            alt="SVGeXPENSES"
            width="200"
          />
        </a>
        <div className="row mb-4">
          <div className="col-12 col-md-8 col-lg-5 mx-auto">
            <div className="p-4 shadow-sm rounded bg-white">
              <form onSubmit={formik.handleSubmit}>
                <span className="text-muted">
                  {/* {data?.type === "income" ? " Income" : " Expense"} */}
                </span>
                <h2 className="mb-4 fw-light">
                  {/* {data?.type === "income"
                    ? " Update Income"
                    : " Update Expense"} */}
                </h2>
                {/* Display Err */}
                {appErr || serverErr ? <h1>error</h1> : null}
                <div className="mb-3 input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Title"
                    value={formik.values.title}
                    onChange={formik.handleChange("title")}
                    onBlur={formik.handleBlur("title")}
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.title && formik.errors.title}
                </div>
                <div className="mb-3 input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Description"
                    value={formik.values.description}
                    onChange={formik.handleChange("description")}
                    onBlur={formik.handleBlur("description")}
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.description && formik.errors.description}
                </div>
                <div className="mb-3 input-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.amount && formik.errors.amount}
                </div>

                {loading ? (
                  <DisabledButton />
                ) : (
                  <button type="submit" className="btn btn-primary mb-4 w-100">
                    Add
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditContent;