import React from "react";
import Link from "next/link";

 function Menu({topmenu}){
    const PrimaryMenu = topmenu;
console.log("Primary",PrimaryMenu)
  return(
    <>
  
      <li className="nav-item" >
                         <Link className="nav-link" aria-current="page" href="/">Home</Link>
                     </li> 
                     <li className="nav-item" >
                         <Link className="nav-link " aria-current="page" href="/about">About</Link>
                     </li> 
                     <li className="nav-item" >
                         <Link className="nav-link " aria-current="page" href="/">Blog</Link>
                    </li> 
                    <li className="nav-item" >
                         <Link className="nav-link" aria-current="page" href="/product">Products</Link>
                     </li> 
     { 
         PrimaryMenu?.map((MenuItem) => {
            return( 
                
                     <li className="nav-item" key={MenuItem.id}>
                         <Link className="nav-link active" aria-current="page" href={MenuItem.path}>{MenuItem.label}</Link>
                     </li> 
        
        
                
                
              )
         })
        }
   
    </>
  )

}

export async function getStaticProps(){

  const menu = await fetch('http://wp.local/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `
        query GET_MENUS {
          headerMenus: menuItems(where: {location: PRIMARY}) {
            nodes {
              id
              label
              url
              path
            }
          }
          
        }
        `,
    })
  })

  const tmenu = await menu.json()
//console.log("posts", json)
  return {
    props: {
        topmenu : tmenu.data.headerMenus.nodes
    },
    revalidate:1,
  }
  }



export default Menu;