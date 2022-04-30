import React from 'react'
import Link from 'next/link'
import Menu from '../pages/Menu';
import {useGetAllPostQuery} from '../store/menuSlice'


export default function Header(props) {

  const AllPosts = useGetAllPostQuery()
     console.log("posts:", AllPosts)

  return (
    <>
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h2><Link className="navbar-brand" href="/">My Site</Link></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
    
                
    <Menu />
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

