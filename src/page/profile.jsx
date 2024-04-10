import React, { useState } from 'react';
import Input from '../component/input';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { register, handleSubmit } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(null);
  const {id} = useParams()
  const navigate = useNavigate()
  console.log("slug", id)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append('location', data.location);
      formData.append('thumbnail', selectedImage)
      // console.log(data.location);
      // console.log(data.thumbnail[0]);
      console.log("formDatas", formData);
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }

      const res = await axios.post(`https://register-backend-12k4.onrender.com/api/v1/users/avatar/${id}`, formData);
      console.log(res);
      if (res) {
        navigate(`/purpose/${id}`)
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className='mx-96'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='mt-28 text-left text-4xl font-bold '>Welcome! Let's create your profile</div>
        <div className='text-left mt-5 font-semibold text-gray-600'>Let others get to know you better! You can do these later</div>
        <div className='text-left mt-12 font-bold text-2xl'><p>Add an avatar</p></div>
        <div className='mt-6 flex justify-between'>
          <div className='border w-40 h-40 ml-5 rounded-full '>
            {selectedImage && <img src={img} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="Selected Avatar" />}
          </div>
          <div className='w-80 mr-64 '>
            <input
              type="file"
              className="mt-14"
              {...register("thumbnail", {
                required: true,
              })}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className='text-left mt-12 font-bold text-2xl'><p>Add your Location</p></div>
        <div className='text-left'>
          <Input
            type="text"
            className2="mt-5 w-52 bg-gray-50 border-gary-50"
            placeholder="Delhi"
            {...register("location", {
              required: true,
            })}
          />
        </div>
        <hr className='' />
        <div className='text-left mt-10'><button className='border w-52 bg-pink-600 text-white font-semibold px-10 py-2 rounded-xl'>Next</button></div>
      </form>
    </div>
  );
}

export default Profile;
