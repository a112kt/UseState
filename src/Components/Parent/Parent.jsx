import React, { useState } from 'react'
import Child from '../Child/Child'


export default function Parent() {

    const [Products, setProducts] = useState([
        {
            id:1,
            name:"Toshiba",
            type:"television",
            price:1200,
            onsale:true,
            Count:10,

        },
        {
            id:2,
            name:"Toshiba",
            type:"Laptop",
            price:1560,
            onsale:false,
            Count:40,

        },
        {
            id:3,
            name:"samsoung",
            type:"television",
            price:10000,
            onsale:true,
            Count:60,

        },
        {
            id:4,
            name:"Iphone",
            type:"phone",
            price:1300,
            onsale:false,
            Count:19,

        },
        {
            id:5,
            name:"Hawaii",
            type:"phone",
            price:5000,
            onsale:true,
            Count:5,

        },
        {
            id:6,
            name:"Toshiba",
            type:"television",
            price:7800,
            onsale:false,
            Count:11,

        },
    ])

    function Delete(Id){
        console.log("del")
        console.log(Id)
        let newProduct = structuredClone(Products);
        newProduct.splice(Id,1)
        setProducts(newProduct);
    }
    function Update(Id){
        let newProduct = structuredClone(Products);
       newProduct[Id].Count++;
        setProducts(newProduct);

    }
  return (
    <>
    <div className="container  flex flex-wrap mx-auto bg-slate-100">
    {Products.map((product,index)=><Child index={index} product={product} Delete={Delete} Update={Update}/> )}

    </div>
   
    </>
  )
}
