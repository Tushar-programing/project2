import React, { useState } from 'react';
import axios from 'axios';
import img1 from "../image/img1.png";
import  { Link, useNavigate } from 'react-router-dom'
import "./page.css";
import Input from '../component/input';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null)
  const [isChecked, setIsChecked] = useState(false); // State variable to track checkbox state
  const navigate = useNavigate()
  // console.log(error);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('https://register-backend-12k4.onrender.com/api/v1/users/register', data);
      console.log(response)
      console.log("data", response.data.data._id);
      if (response) {
        navigate(`/profile/${response.data.data._id}`)
        setError(null)
      }

      // Handle success, show a message to the user, redirect, etc.
    } catch (error) {
      setError("This username or Email id user is already exist. /"  + error.message);
      // setError(setError + error.message)
      // Handle error, show an error message to the user, etc.
    }
  };

  return (
    <>
      <div className='flex justify-between border'>
        <img src={img1} alt="Logo" />
        <div className='box2 border '>
          <p className='text-2xl font-bold mt-20 mr-24'>Sign up to Drrible</p>
          {error? <p className='mt-10 mr-24 text-red-400'>{error}</p> : null}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify mt-7'>
              <div className='w-72 ml-60 mt-10'>
                <Input 
                  label="Name"
                  type="text"
                  placeholder="John"
                  className1="mr-72 font-bold"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div className='w-72 ml-4 mt-10'>
                <Input 
                  label="Username"
                  type="text"
                  placeholder="John123"
                  className1="mr-72 font-bold"
                  {...register("username", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className='w-96 ml-60 mt-14'>
              <Input 
                label="Email"
                type="email"
                placeholder="abc@gmail.com"
                className1="mr-96 font-bold"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
            </div>
            <div className='w-96 ml-60 mt-12'>
              <Input 
                label="Password"
                type="password"
                placeholder="6+ characters"
                className1="mr-96 font-bold"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className='flex justify-between mt-5'>
              <div className=' w-72 mt-6'>
                <Input onChange={handleCheckboxChange} type="checkbox" className="ml-60 " />
              </div>
              <div className=' w-full flex mt-5 text-left ml-5'>
                <label >
                  Creating an account means you're okay with our <span className='text-blue-600'> Terms of<br />
                  Service, Privacy Policy,</span> and our default<span className='text-blue-600'> Notification <br />
                  Settings.</span>
                </label>
              </div>
            </div>
            <div className='text-left w-96 ml-60 mt-10'>
              <button type="submit" disabled={isChecked === false} className={`border px-12 py-3 ${isChecked? 'bg-pink-500' : 'bg-pink-300'} rounded-lg text-white font-semibold`}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
