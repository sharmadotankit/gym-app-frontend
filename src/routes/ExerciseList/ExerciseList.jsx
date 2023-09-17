import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { fetchExerciseByBodyParts } from "../../utils/actions/apiActions";
import ExerciseCard from "../../comp/ExerciseCard/ExerciseCard";
import {createCheckoutSession} from '../../utils/actions/allActions';


import "./ExerciseList.scss";
import { UserContext } from "../../context/user.context";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import loadingImg from '../../assets/loading.gif'

function ExerciseList(props) {
  let { muscleName } = useParams();
  const token = localStorage.getItem('token');
  const [exercisesForSelectedMuscle, setExercisesForSelectedMuscles] = useState(
    []
  );
  const { currentUser } = useContext(UserContext);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isStripeLoading,setIsStripeLoading] = useState(false);
  useEffect(() => {
    const fetchExerciseData = async () => {
      let itemResponse = await fetchExerciseByBodyParts(muscleName);
      setExercisesForSelectedMuscles(itemResponse.data);
    };
    fetchExerciseData();
  }, []);

  const handleClose = () => {
    setShowPremiumModal(false);
  };

  const handleUpdatePremiumClick  = async()=>{
    try{
      setIsStripeLoading(true);
      let data = { 
        userEmail: currentUser.email,
      }
      const sessionResponse = await createCheckoutSession(token,data);
      if(sessionResponse.status){
        window.location = sessionResponse.url;
      }
    }catch(err){
      setIsStripeLoading(false);
      toast.error("Something went wrong")
    }
    
  }

  


  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showPremiumModal}
        onHide={handleClose}
        className="modalDiv"
      >
        <Modal.Header>
          <Modal.Title>
            <h3 className="modal-title">
              🌟 Exclusive Offer Alert: Elevate Your Fitness Journey with
              Premium Membership! 🌟
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <p>
              Ready to supercharge your fitness journey? 🚀
            </p>
            <p>🏋️‍♀️ Premium Membership at just ₹ 99!</p>
            <p>🌟 What you'll get: </p>
            <ul>
              <li>
                <strong>🏋️‍♂️ Access to 1000+ Exercises:</strong> Say goodbye to
                mundane workouts and hello to variety! With Premium Membership,
                you gain access to an extensive library of over 1000+ exercises,
                tailored to your fitness goals. Whether you're into strength
                training, cardio, or flexibility, we've got it all covered!
              </li>
              <li>
                <strong>💪 Gif Tutorials:</strong> We understand that everyone
                learns differently. That's why we're offering GIF tutorials for
                every exercise in our library. These visual guides will help you
                master each movement with precision, ensuring you get the most
                out of your workouts.
              </li>
              <li>
                <strong>⏰ Lifetime Access:</strong> Yes, you read that right!
                Once you become a Premium Member, you'll enjoy lifetime access
                to all these fantastic features. No more monthly subscription
                fees or hidden costs. It's a one-time investment for a lifetime
                of fitness!
              </li>
              <li>
                <strong>💰 All of This for Just ₹ 99:</strong>We want to make
                premium fitness accessible to everyone. That's why we're
                offering this unbeatable deal for only ₹ 99. You won't find a
                better value anywhere else!
              </li>
            </ul>
            <h6>🔥 How to Get Started:</h6>
            <ol>
              <li>Click the link below to sign up for Premium Membership.</li>
              <li>Make a one-time payment of just ₹ 99.</li>
              <li>Instantly unlock a world of fitness possibilities!</li>
            </ol>
            {isStripeLoading?
            <>
            👉<button className="upgrade-button"> <img  src={loadingImg} alt="loading" height='20px'/></button>
            </>:
            <>
            👉<button className="upgrade-button" onClick={handleUpdatePremiumClick}> Upgrade to Premium Membership Now</button>
            </>}
            
            <p>
              Join our community of motivated individuals who are already
              benefiting from Premium Membership. Don't wait—seize this offer
              today, and let's achieve your fitness goals together! 💪🎉
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button 
          onClick={handleClose} 
          className="back-button"
          >Close</button>
        </Modal.Footer>
      </Modal>

      {exercisesForSelectedMuscle.length === 0 ? (
        <div style={{ height: "100vh" }}>Loading...</div>
      ) : (
        <div className="exercise-list-div">
          <h1>Exercises for {muscleName}:-</h1>
          <span className="exercise-card-span">
            {exercisesForSelectedMuscle.map((item, i) => {
              if (i < 5) {
                return <ExerciseCard item={item} key={i} />;
              } else if (i >= 5 && currentUser.isPremium) {
                return <ExerciseCard item={item} key={i} />;
              }
            })}
          </span>

          {!currentUser.isPremium ? (
            <div
              className="load-more-div"
              onClick={() => {
                setShowPremiumModal(true);
              }}
            >
              <button>Load More Exercise...</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default ExerciseList;
