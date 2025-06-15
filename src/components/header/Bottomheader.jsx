import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";


const NavLinks = [
  {title : 'Home', link : '/' },
  {title: 'About', link: '/about' },
  {title: 'Accessoires', link: '/accessoires' },
  {title: 'Contact', link: '/contact' },
]


function Bottomheader() {
  const [categoryOpen,setCategoryOpen] = useState(false)
  const location = useLocation()
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((categoryData) => {
        console.log("Fetched category data:", categoryData);
        setData(categoryData);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className='bottom-header'>
      <div className="btm-container">
        <nav>
          <div className="category">
            <div className="category-btn" onClick={() => setCategoryOpen(!categoryOpen)}>
              <IoMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div className={`category-nav-list ${categoryOpen ? 'active' : ''}`} >
              {data && data.map((category) => (
                <Link to='' key={category.slug}> {category.name} </Link>
              ))}
            </div>
          </div>

          <div className='nav-links'>
            {NavLinks.map((link) => ( 
              <li key={link.link} className={location.pathname === link.link ? 'active' : ''}><Link key={link.title} to={link.link} >{link.title}</Link></li>
            ))}
            
          </div>
        </nav>
        <div className="sign-regs-icon">
          <Link to='/' ><PiSignIn /></Link>
          <Link to='/' ><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  );
}

export default Bottomheader;