import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] =  useState(0);
  
  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval();
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <div className="app-content-height d-flex flex-column align-items-center justify-content-center">
        <div style={{marginTop: "-5", alignSelf: "flex-end", display: "flex", marginRight: "5%"}}>
          { minutes === 0 && seconds === 0
            ? null
            : <h1> {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
          }
        </div>
        <div className="fw-600 fs-5p0 cod-gray">My Profile</div>
      </div>
    </div>
  );
};

export default Profile;