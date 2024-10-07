import React, { useEffect, useState } from 'react'
import Comp from './Comp'
import l1  from "../../public/l1.webp"
import l2  from "../../public/l2.webp"
import l3  from "../../public/l3.webp"
import l4  from "../../public/l4.webp"
import l5  from "../../public/l5.webp"
import l6  from "../../public/l6.webp"
import l7  from "../../public/l7.webp"
import l8  from "../../public/l8.webp"
import l9  from "../../public/l9.webp"
import l10 from "../../public/l10.webp"
import m1  from "../../public/m1.webp"
import m2  from "../../public/m2.webp"
import m3  from "../../public/m3.webp"
import m4  from "../../public/m4.webp"
import m5  from "../../public/m5.webp"
import m6  from "../../public/m6.webp"
import m7  from "../../public/m7.webp"
import m8  from "../../public/m8.webp"
import m9  from "../../public/m9.webp"
import m10  from "../../public/m10.webp"
import p1   from "../../public/p1.webp"
import p2   from "../../public/p2.jpg"
import p3   from "../../public/p3.webp"
import p4   from "../../public/p4.jpg"
import p5   from "../../public/p5.webp"
import p6   from "../../public/p6.webp"
import p7   from "../../public/p7.webp"
import p8   from "../../public/p8.webp"
import p9   from "../../public/p9.webp"
import p10  from "../../public/p10.webp"
import o1   from  "../../public/o1.webp"
import o2   from  "../../public/o2.webp"
import o3   from  "../../public/o3.webp"
import o4   from  "../../public/o4.webp"
import o5   from  "../../public/o5.webp"
import o6   from  "../../public/o6.webp"
import o7   from  "../../public/o7.webp"
import o8   from  "../../public/o8.webp"
import o9   from  "../../public/o9.webp"
import o10  from  "../../public/o10.webp"
import q1 from "../../public/q1.webp"
import q2 from "../../public/q2.webp"
import q3 from "../../public/q3.webp"
import r1 from "../../public/r1.webp"
import r2 from "../../public/r2.webp"
import r3 from "../../public/r3.webp"
import s1 from "../../public/s1.webp"
import s2 from "../../public/s2.webp"
import s3 from "../../public/s3.webp"
import s4 from "../../public/s4.webp"
import t1 from "../../public/t1.webp"
import t2 from "../../public/t2.webp"
import t3 from "../../public/t3.webp"
import t4 from "../../public/t4.webp"
import one1 from "../../public/one1.webp"
import one2 from "../../public/one2.webp"


const Commoncomponent = () => {
    const [imgs,setimgs]=useState(window.innerWidth)
    const handleresize=()=>{
        setimgs(window.innerWidth)
    }
    useEffect(()=>{
     window.addEventListener("resize",handleresize)
     return ()=>{
        window.removeEventListener("resize",handleresize)
     }
    },[])
    const img2 =imgs>700?[
        q1,
        q2,
        q3,
    ]:[
        r1,
        r2,
        r3,
    ]
    const img3=imgs<700?[
        t1,
t2,
t3,
t4,
    ]:[
        s1,
s2,
s3,
s4
    ]
    const img =imgs<700?[
        m1 ,
        m2 ,
        m3 ,
        m4 ,
        m5 ,
        m6 ,
        m7 ,
        m8 ,
        m9 ,
        m10,]:[
            l1, 
            l2 ,
            l3 ,
            l4 ,
            l5 ,
            l6 ,
            l7 ,
            l8 ,
            l9 ,
            l10
        ]
        const img5=imgs>700?[one1]:[one2]
const img1=imgs<700?[
    p1, 
    p2, 
    p3, 
    p4, 
    p5, 
    p6, 
    p7, 
    p8, 
    p9, 
    p10]:[
        o1, 
        o2, 
        o3, 
        o4, 
        o5, 
        o6, 
        o7, 
        o8, 
        o9, 
        o10]
  return (
    <div >
         <Comp imgs={img}/>
         <Comp imgs={img1}/>
         <Comp imgs={img2}/>
         <Comp imgs={img3}/>
         <Comp imgs={img5}/>
    </div>
  )
}

export default Commoncomponent