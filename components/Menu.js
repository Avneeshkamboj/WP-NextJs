import Link from "next/link";
import React from "react";
import Menu from "../pages/Menu";

 function MyMenu({topmenu}){
    const PrimaryMenu = topmenu;
console.log("topmenu",topmenu)
  return(
    <>
  
    <div>
      <h1>Menu</h1>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
     { 
         PrimaryMenu?.map((MenuItem) => {
            return( 
                
                     <li className="nav-item" key={MenuItem.id}>
                         <Link className="nav-link active" aria-current="page" href={MenuItem.path}>{MenuItem.label}</Link>
                     </li> 
        
        
                
                
              )
         })
        }
      </ul>
    </div>
    </>
  )

}





export default MyMenu;