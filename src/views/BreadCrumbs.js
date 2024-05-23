import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BreadCrumbs() {
    const {pathname} = useLocation()
   const pathnames =  pathname.split('/').filter(x=>x)
   console.log(pathnames)
   let breadcrumbPaths = ''
   let routes = [
    {name:'dashboard',href:'/admin/Mutilated-notes'}
   ]
  return (
    <div className='breadcrumbs'>
        {/* <Link to='/admin'>Home</Link> */}
        {
            pathnames.map((name , index)=>{
                breadcrumbPaths+=`> ${name}`
                const isLast = index === pathnames.length - 1
                return isLast ? 
                <span className='breadcrumb-item'> / {name}</span> :
                 <span className='breadcrumb-item'><Link to={breadcrumbPaths}>/ {name}</Link></span>
            })
        }
    </div>
  )
}

export default BreadCrumbs