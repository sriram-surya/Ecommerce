import React from 'react'
import React,{userState} from 'react';

export const prac = () => {

    const [menu,setMenu] = useState("shop");
    

  return (
    <div className='prac'>
        <div className="menu">
            <li onClick={()=>{setMenu("shop")}}>shop{menu==="shop"?<hr/>:<> 
            
            </>}</li>
            <li>Men</li>
            <li>Women</li>
            <li>kids</li>
        </div>
    </div>
  )
}

