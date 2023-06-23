import React, {useState,useEffect} from 'react'
import './styles/Nav.css'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
export default function Nav() {
    const [user, setuser] = useState("");
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setuser(currentUser);
    });
    return () => {
        unsubscribe();
    }
    }, []);
    const logouthandler = (e)=>{
        e.preventDefault();
        signOut(auth);
        navigate('/');
    }
    
    const Showloginsignupbtn = () => {
        return(
            <button className="navbtn" onClick={()=>{navigate('login')}}>SIGNUP</button>
        )
    };
    
    const Showprofile = ()=>{
        return(
        <div className='navprofile'>
            <i className="fa-solid fa-user navprofileicon"></i>
                <p>{user.displayName} </p>
                <i className="navlogoutbtn fa-regular fa-arrow-right-from-bracket" onClick={logouthandler}></i>
        </div>
        )
    };
    
        let show_login_signup;
        if (user) {
        show_login_signup = <Showprofile />;
    } else {
        show_login_signup = <Showloginsignupbtn />;
    }
    const navigate=useNavigate()
    return (
    <div className='nav'>
        <div className="navcontainer">
            <div className="nav-logo"> <img src="./img/logo.png" alt="" onClick={()=>{navigate('/')}}/> </div>
            <div className="navitems"> 
            <NavLink className="navlinks navlinks1" to='/'>Home</NavLink>
            <NavLink className="navlinks navlinks2" to='/about'>About</NavLink>
            <NavLink className="navlinks navlinks3" to='/reviews'>Reviews</NavLink>
            <NavLink className="navlinks navlinks4" to='/gallery'>Gallery</NavLink>
        </div>

        <input type="checkbox"/>
        <div className="lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <div className='list'>
            <NavLink className="navlinks n-l-r navlinks-shift navlinks-shift1" to='/'>Home</NavLink>
            <NavLink className="navlinks n-l-r navlinks-shift navlinks-shift2" to='/about'>About</NavLink>
            <NavLink className="navlinks n-l-r navlinks-shift navlinks-shift3" to='/reviews'>Reviews</NavLink>
            <NavLink className="navlinks n-l-r navlinks-shift navlinks-shift4" to='/gallery'>Gallery</NavLink>
            <NavLink className="navlinks n-l-r" to="/Contact">Contact Us</NavLink>
            <NavLink className="navlinks n-l-r nav-links">Disabled1</NavLink>
            {show_login_signup}
        </div>
        </div>
    </div>
)
    }