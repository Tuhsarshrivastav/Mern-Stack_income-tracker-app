import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/slices/users/usersSlices";
import DataGrap from "../../components/GraphDtata";
import calcTransaction from "../../utils/accountStatistics";
import UserProfileStats from "./UserProfileStats";
import LoadingComponent from "../../components/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";

const Profile = () => {
  const history = useHistory();
  // dispatch
  const dispatch = useDispatch();

  // get data from store
  const { loading, userAuth, appErr, serverErr, profile } = useSelector(
    (state) => state.users
  );

  // get income statistics
  const incResult = profile?.income && calcTransaction(profile.income);

  // get enpenses statistics
  const expResult = profile?.expenses && calcTransaction(profile.expenses);

  // call http requiest
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {appErr}
          {serverErr}
        </ErrorDisplayMessage>
      ) : (
        <section className="py-5">
          <div className="container">
            <div className="position-relative p-8 border rounded-2">
              <div className="d-flex mb-6 align-items-center">
                <img
                  className="img-fluid me-4 rounded-2"
                  //   style="width: 64px; height: 64px;"
                  src="https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=128&amp;w=128"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold mb-0">
                    <span>
                      {profile?.firstname} {profile?.lastname}
                    </span>
                    <span className="badge ms-2 bg-primary-light text-primary">
                      {profile?.expenses?.length + profile?.income?.length}{" "}
                      Records Created
                    </span>
                  </h6>
                  {/* <p className="mb-0">{profile?.email}</p> */}
                  <p className="mb-0">Date Joined: 12-Jan-1999</p>
                  <button
                    onClick={() =>
                      history.push({
                        pathname: "update-profile",
                        state: {
                          user: userAuth,
                        },
                      })
                    }
                    className="btn"
                  >
                    Edit Profile
                    <i class="bi bi-pen fs-3 m-3 text-primary"></i>
                  </button>
                </div>
                <DataGrap
                  income={incResult?.sumTotal}
                  expenses={expResult?.sumTotal}
                />
              </div>

              <p className="mb-8"> </p>

              <UserProfileStats
                numOfTransExp={profile?.expenses?.length}
                avgExp={expResult?.avg}
                totalExp={expResult?.sumTotal}
                minExp={expResult?.min}
                maxExp={expResult?.max}
                numOfTransInc={profile?.income?.length}
                avgInc={incResult?.avg}
                totalInc={incResult?.sumTotal}
                minInc={incResult?.min}
                maxInc={incResult?.max}
              />
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => history.push("/user-expenses")}
                  className="btn me-4 w-100 btn-danger d-flex align-items-center justify-content-center"
                >
                  <span>View Expenses History</span>
                </button>
                <button
                  onClick={() => history.push("/user-income")}
                  className="btn w-100 btn-outline-success d-flex align-items-center justify-content-center"
                >
                  <span>View Income History</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
