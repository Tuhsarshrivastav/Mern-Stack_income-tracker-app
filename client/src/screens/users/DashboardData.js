import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../components/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import { fatchAccountStatsAction } from "../../redux/slices/accountStats/accountStatsSlices";
import currencyFormatter from "../../utils/cuurencyFormatter";

const DashboardData = () => {
  //dispatch
  const dispatch = useDispatch();

  // call api inside useEffect
  useEffect(() => {
    dispatch(fatchAccountStatsAction());
  }, [dispatch]);
  
  // get data from store
  const state = useSelector((state) => state.account);
  const { loading, appErr, serverErr, accountsDetails } = state;

  //format date
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : serverErr || appErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : (
        accountsDetails && (
          <section class="py-6">
            <div class="container">
              {/* Grpah */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                {/* Grpah */}

              </div>
              {/* Net Profit */}
              <div style={{ textAlign: "center", margin: "20px" }}>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 mb-6">
                  <div class="p-8 border rounded-2">
                    <div class="d-flex mb-6 align-items-start justify-content-between">
                      <span
                        class="d-inline-flex align-items-center justify-content-center bg-light-light rounded-2"
                        style={{ width: "40px", height: "40px" }}
                      ></span>
                      {/* Expenses Start */}
                      <span class="badge fs-2 bg-light text-danger">
                        Total Expenses
                      </span>
                    </div>
                    <h1 class="mb-4">
                      {accountsDetails?.expenseStas &&
                        currencyFormatter(
                          "USD",
                          accountsDetails?.expenseStas[0]?.totalExp
                        )}
                    </h1>
                    <p class="mb-0">
                      <span>Number of Transactions</span>
                      <span class="text-danger ms-1">
                        <span>
                          {accountsDetails?.expenseStas[0]?.totalRecordsExp}
                        </span>
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Minimum Transactions</span>
                      <span class="text-danger ms-1">
                        <span>{accountsDetails?.expenseStas[0]?.minExp}</span>
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Maximum Transactions</span>
                      <span class="text-danger ms-1">
                        <span>{accountsDetails?.expenseStas[0]?.maxExp}</span>
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Average Transactions</span>
                      <span class="text-danger ms-1">
                        <span>
                          {accountsDetails?.expenseStas[0]?.averageExp}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-6">
                  <div class="p-8 border rounded-2">
                    <div class="d-flex mb-6 align-items-start justify-content-between">
                      <span
                        class="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                        style={{ width: "40px", height: "40px" }}
                      ></span>

                      {/* Income Start */}
                      <span class="badge fs-2 bg-primary-light text-primary">
                        Total Income
                      </span>
                    </div>
                    <h1 class="mb-4">
                      {currencyFormatter(
                        "USD",
                        accountsDetails?.incomeStas[0]?.totalIncome
                      )}
                    </h1>

                    <p class="mb-0">
                      <span>Number of Transactions</span>
                      <span class="text-danger ms-1">
                        <span>
                          {accountsDetails?.incomeStas[0]?.totalRecordsIncome}
                        </span>
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Minimum Transactions</span>
                      <span class="text-danger ms-1">
                        {accountsDetails?.incomeStas[0]?.minIncome}
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Maximum Transactions</span>
                      <span class="text-danger ms-1">
                        <span>{accountsDetails?.incomeStas[0]?.maxIncome}</span>
                      </span>
                    </p>

                    <p class="mb-0">
                      <span>Average Transactions</span>
                      <span class="text-danger ms-1">
                        <span>
                          {accountsDetails?.incomeStas[0]?.averageIncome}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default DashboardData;
