import React , {useState,useEffect} from 'react'
import { auth } from '../Firebase';
import './styles/Login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [signupmail, setsignupmail] = useState("");
  const [signuppass, setsignuppass] = useState("");
  const [loginmail, setloginmail] = useState("");
  const [loginpass, setloginpass] = useState("");
  const [msg, setmsg] = useState("")
  const [show, setshow] = useState("")


  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  // Error Alert-------------------------------------------
  
  const errorhandler = (a, b)=>{
    setmsg(a);
    console.log(a);
    setshow(b);
};
useEffect(() => {
  const al = document.querySelector(".alert");
  if(al){
  al.style.display = "block";
  setTimeout(() => {
      al.style.display = "none";
  }, 5000);
  }
}, [show]);

// -----------------------------------------------------------------
// signup handler-----------------------------------------------------------------
const signuphandler = (e)=>{
    e.preventDefault();
    errorhandler("", false);
    createUserWithEmailAndPassword(auth, signupmail, signuppass)
    .then(res=>{
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(res=>{ navigate('/') })
        .catch(err=> errorhandler(err.message, true));
      })
      .catch(err=> errorhandler(err.message, true));
}

// -----------------------------------------------------------------
// login handler-----------------------------------------------------------------
const logininhandler = (e)=>{
  e.preventDefault();
  errorhandler("", false);
  signInWithEmailAndPassword(auth, loginmail, loginpass)
  .then(res=>{ navigate('/') })
  .catch(err=>errorhandler(err.message, true));
}

// -----------------------------------------------------------------
// google handler-----------------------------------------------------------------
const googleauthentication = (e)=>{
  e.preventDefault();
    errorhandler("", false);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(res=>navigate('/'))
    .catch(err=>errorhandler(err.message, true));
  }


  // -----------------------------------------------------------------
  // facebook handler-----------------------------------------------------------------
  const facebookauthentication = (e)=>{
    e.preventDefault();
    errorhandler("", false);
    const facebookprovider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookprovider)
    .then(res=>navigate('/home'))
    .catch(err=>errorhandler(err.message, true));
  }
  // -----------------------------------------------------------------
  // Signup button event-----------------------------------------------------------------
  
  const signupclicked = (e)=>{
    e.preventDefault();
  const container = document.querySelector('.lscontainer');
  container.classList.add("lsmaintransition");
}

// -----------------------------------------------------------------
// Login button event-----------------------------------------------------------------

const loginclicked = (e)=>{
  e.preventDefault();
  const container = document.querySelector('.lscontainer');
  container.classList.remove("lsmaintransition");
  }


// -----------------------------------------------------------------
// Main Code-----------------------------------------------------------------


return (
  <div className='login'>
      <div className="lscontainer">
        {/* ------------------------------------------------------------- */}
        {/* ------------------------Overflow Area------------------------ */}
        <div className="lsoverflow">
          <div className="lsoverflowbox">
            <h1>Join Our New Gaming Community</h1>
            <p>Be inspired by the gaming world designed by our team...</p>
          </div>
        </div>
        <div className="lsmain">
        {/* ------------------------------------------------------------- */}
        {/* ------------------------Login Area------------------------ */}
          <div className="lsleft">
            <img className='lsimg' src="./img/logo.png" alt="" />
            <h3>Login</h3>
            <form className='lsform lsform1'>
              <input type="email" onChange={e=>{setloginmail(e.target.value)}} placeholder='example: abc@gmail.com'/><br/>
              <input type="password" onChange={e=>{setloginpass(e.target.value)}} placeholder='Enter Your Password'/><br/>
              <div className="lsbtns lsbtns1">
                <button onClick={logininhandler} className='lsbtn lsdark lsdark1'>Login</button>
                <button className='lsbtn lslight lslight1' onClick={e=>{signupclicked(e)}}>Signup</button>
                <div className='ls-icon'>
                    <i onClick={googleauthentication} className="ls-icons fa-brands fa-google"></i>
                    <i onClick={facebookauthentication} className="ls-icons fa-brands fa-facebook"></i>
                  </div>
              </div>
            </form>
          </div>
          {/* ------------------------------------------------------------- */}
          {/* ------------------------Signup Area------------------------ */}
          <div className="lsright">
            <img className='lsimg' src="./img/logo.png" alt="" />
              <h3>Signup</h3>
              <form className='lsform lsform2'>
                <input type="text" onChange={e=>{setname(e.target.value)}} placeholder='Enter Name'/>
                <input type="email" onChange={e=>{setsignupmail(e.target.value)}} placeholder='example: abc@gmail.com'/><br/>
                <input type="password" onChange={e=>{setsignuppass(e.target.value)}} placeholder='Enter Your Password'/><br/>
                <div className="lsbtns lsbtns2">
                  <button onClick={signuphandler} className='lsbtn lsdark lsdark2'>Signup</button>
                  <button className='lsbtn lslight lslight2' onClick={e=>{loginclicked(e)}}>Login</button>
                  <div className='ls-icon'>
                    <i onClick={googleauthentication} className="ls-icons fa-brands fa-google"></i>
                    <i onClick={facebookauthentication} className="ls-icons fa-brands fa-facebook"></i>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
      { show && <div className="alert">{msg}</div> }
    </div>
  )
}
