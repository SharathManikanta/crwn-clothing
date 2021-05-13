import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';
const Header = ()=>(
    <div className='header' to='/'>
           <Link className='logo-container' to='/' >
               <Logo className='logo'></Logo>
           </Link>
           <div className='options'>
               <Link className='option' to='/shop'>Shop</Link>
               <Link className='option' to='/shop'>Contact</Link>
               {/* <Link className='option' to='/shop'>Shop</Link>
             <Link className='option' to='/shop'>Shop</Link> */}


           </div>

    </div>

)

export default Header;