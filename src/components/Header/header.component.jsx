import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import './header.style.scss';
const Header = ({currentUser})=>(
    <div className='header' to='/'>
           <Link className='logo-container' to='/' >
               <Logo className='logo'></Logo>
           </Link>
           <div className='options'>
               <Link className='option' to='/shop'>Shop</Link>
               <Link className='option' to='/shop'>Contact</Link>
                {currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>Sign out</div>:
                <Link className='option' to='/SignIn'>Sign in</Link>
            }

               {/* <Link className='option' to='/shop'>Shop</Link>
             <Link className='option' to='/shop'>Shop</Link> */}


           </div>

    </div>

)

export default Header;