import { useContext, useEffect, useState } from "react";
import "./PaymentSuccess.css";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../utils/actions/allActions";
import { UserContext } from "../../context/user.context";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const userData = await getUserData(token, id);
          if (userData.status) {
            console.log("data", userData.data);
            setCurrentUser({
              isPremium: userData?.data?.isPremium ? true : false,
              name: userData?.data?.name,
              email: userData?.data?.email,
              token: userData?.data?.token,
              id: userData?.data?._id,
              isLoggedIn: true,
              height: userData?.data?.height,
              weight: userData?.data?.weight,
            });

            localStorage.setItem("name", userData?.data?.name);
            localStorage.setItem("email", userData?.data?.email);
            localStorage.setItem("_id", userData?.data?._id);
            localStorage.setItem("token",JSON.stringify(userData?.data?.token));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("height", userData?.data?.height);
            localStorage.setItem("weight", userData?.data?.weight);
            localStorage.setItem("isPremium",userData?.data?.isPremium ? "true" : "");
          }
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="payment-container">
      <div className="payment-success">
        <div className="payment-success-content">
          <h2>Payment Successful!</h2>
          <p>You are now a premium member.</p>
          <button
            className="go-to-button"
            onClick={() => navigate("/exercise")}
          >
            Go To Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
