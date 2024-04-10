import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function pupose() {
  const {id} = useParams()
  const navigate = useNavigate();
  // console.log(id);
  const  [purpose, setPurpose] =  useState(null)
  // console.log(purpose);

  const submit = async () => {
    try {
      const formData = new FormData();
      formData.append('purpose', "purpose");
  
      console.log("formData", formData);
      console.log(purpose);
      
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
  
      const res = await axios.post(`http://localhost:8000/api/v1/users/purpose/${id}/${purpose}`);
  
      if (res) {
        // console.log("successfully");
        navigate("/email")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  

  return (
    <div className='mx-52'>
      <div className='text-4xl mt-24 font-bold'>What brings you to Dribble?</div>
      <div className='font-semibold text-gray-600 mt-5 text-lg'>Select the options that describe you. Don't worry, you can explore other options later.</div>
      <div className=' mt-28 h-64 flex justify-evenly'>

      <button onClick={() => purpose === "designer"? setPurpose(null): setPurpose('designer')} className=''><div className={`border ${purpose === "designer"? 'border-yellow-300' : 'border'} w-72 rounded-2xl h-64 `}>
          <img className=' ml-14' src='https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg' width="162px" />
          <div className=' mx-7 mt-5 text-xl font-bold'>I'm designer looking to share my work</div>
        </div></button>

        <button onClick={() => purpose === "looking"? setPurpose(null) : setPurpose('looking')} className=''><div className={`border ${purpose === "looking"? 'border-yellow-300' : 'border'} w-72 rounded-2xl h-64`}>
          <img className=' ml-11 mt-3' src='https://static.vecteezy.com/system/resources/thumbnails/005/611/079/small/businessman-designing-a-website-by-coding-on-a-desktop-computer-images-for-web-banners-free-vector.jpg' width="200px" />
          <div className=' mx-7 mt-7 text-xl font-bold'>I'm looking to hire a designer</div>
        </div></button>

        <button onClick={() => purpose === "inspire"? setPurpose(null) :  setPurpose('inspire')} className=''><div className={`border ${purpose === "inspire"? 'border-yellow-300' : 'border'} w-72 rounded-2xl h-64`}>
          <img className=' ml-5 mt-1' src='https://static.vecteezy.com/system/resources/thumbnails/019/038/909/small/designer-build-user-experience-roadmap-with-the-interface-vector.jpg' width="230px" />
          <div className=' mx-7 mt-6 text-xl font-bold'>I'm looking for design inspiration</div>
        </div></button>

      </div>
      <div className='text-xl font-bold mt-16'>Anything else? You can select multiple</div>
      <button onClick={() => submit()} className={`w-52 py-2 rounded-lg text-white mt-5 ${purpose === null? 'bg-pink-300' : 'bg-pink-500'}`} disabled={purpose === null}>Finish</button>
    </div>
  )
}

export default pupose
