import React from 'react'

function box({
    img,
    className,
    className1,
    className2,
    title1= "Title", 
    title2 = "Subtitle",
}) {
  return (
    <div>
        <div className='flex justify-center mt-4'>
            <div className={`border h-16 w-1/2 flex justify-between rounded-md ${className}`}>
                <div className=' w-1/5'><img className={` ${className1}`}  src={img} width='63px' height='63px'></img></div>
                <div className={` w-full ${className2}`}><p className={`flex text-lg mt-4 ml-2 text-gray-500 font-semibold`}><p className='text-gray-700'>{title1}&nbsp;</p>{title2}</p></div>
            </div>
        </div>
    </div>
  )
}

export default box
