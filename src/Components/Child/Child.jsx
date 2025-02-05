import React from 'react'

export default function Child({product , Delete,Update,index}) {
    let {name,type,price,onsale,Count,id} =product;
    
  return (
    <>
     <div className="w-full md:w-1/2 lg:w-1/3 p-10 ">
     <div className="bg-slate-300 p-10 shadow-lg rounded-lg relative ">
       <p>Name: {name}</p>
       <p> Type: {type}</p>
       <p>Price: {price}</p>
       <p>Count: {Count}</p>
      {onsale? <div className="absolute top-0 right-0 bg-red-100 p-2 absolute">OnSale
      </div> :""}
     <div className="flex mt-5">
     <div className="m-2 bg-red-500 p-2 rounded-lg "><button onClick={()=>Delete(index)}>Delete</button></div>
     <div className="m-2 ms-10 bg-green-200 p-2 rounded-lg "><button onClick={()=>Update(index)}>Update</button></div>
     </div>
     </div>
     
     </div>
     
    </>
   
  )
}
