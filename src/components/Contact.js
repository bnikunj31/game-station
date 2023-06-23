import React, { useState, useEffect } from 'react'
import './styles/Contact.css'
export default function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [query, setquery] = useState('');
    const [desc, setdesc] = useState('');   
    const contactusformsubmithandler = async (e)=>{
    e.preventDefault();
    const res = await fetch("https://gaming-station-137a4-default-rtdb.firebaseio.com/People.json",
        {
            method: "POST",
            headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            query,
            desc,
        }),
        }
        );

        if(res) alert("Data Stored");
        else alert("Error");


    setname(''); setemail(''); setquery(''); setdesc('');
    }

    return (
        <div className='contact'>
        <div className="maincontactuscontainer">
            <div className="contactuscontainer1">
                <div className="contact-hover">
                    <div className="contact-img"></div>
                </div>
                <div className="contact-form">
                    <h1 className='contact-heading'>Ask your Query</h1>
                    <form autoComplete='off'>
                        <label>Name:</label><br />
                        <input type="text" placeholder='Name' onChange={e=>{setname(e.target.value)}} value={name} /><br />
                        <label>Email:</label><br />
                        <input type="email" placeholder='abc@example.com' onChange={e=>{setemail(e.target.value)}} value={email} /><br />
                        <label>Query:</label><br />
                        <input type="text" onChange={e=>{setquery(e.target.value)}} value={query} /><br />
                        <label>Description:</label><br />
                        <textarea rows="3" onChange={e=>{setdesc(e.target.value)}} value={desc} ></textarea>
                        <button className="contact-btn" onClick={e=>{contactusformsubmithandler(e)}}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="contactuscontainer2">
                <div className="contact-details">
                    <h1 className="contact-info-head">Contact Here</h1>
                <div className="contact-info">
                    <p className="contact-number-head">Helpline Numbers :</p>
                    <div className="contactnumbers">
                        <a href="tel:+919588701079"><i className="contact-icon fa-solid fa-phone"></i>+91 9588701079</a><br />
                        <a href="tel:+919729891959"><i className="contact-icon fa-solid fa-phone"></i>+91 9729891959</a>
                    </div>
                    <p className="contact-detail-mail">Email :</p>
                        <a className='contact-mail' href="mailto:nikunj.banssal@gmail.com"><i className="contact-icon fa-solid fa-envelope"></i>nikunj.banssal@gmail.com</a>
                </div>
            </div>
            <div className="contact-map">
                <iframe className='map' src="https://maps.google.com/maps?q=Jagadhri&t=k&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
            </div>
        </div>
    </div>
    )
}