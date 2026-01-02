import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from "react"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {

    const timeOutId = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount === 1) {
          clearInterval(timeOutId);
          navigate('/');
        }
        return prevCount - 1;
      });
    }, 1000)
    return () => clearInterval(timeOutId);
  }, [navigate]);
  return (
    <>
     <section className='notFound'>
      <div className="container">
        <img src='/sandwich.png' alt='success' />
        <h1>Redirecting to home in {countdown} seconds...</h1>
        <Link to={"/"}>Back to Home <HiOutlineArrowNarrowRight /></Link>
      </div>
     </section>
    </>
  )
}

export default Success
