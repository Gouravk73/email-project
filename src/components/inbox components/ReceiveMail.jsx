import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ReceiveMail = () => {
    const [receiveMail, setReceiveMail] = useState([]);    
    const userEmail=useSelector((state)=>state.login.email);
    useEffect(() => {
        const fetchEMail = async() =>{
            try {
                const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`)
                const data=await res.json();
                const receivedEmails = [];                for(const key in data){
                    const EmailData=data[key];
                     for(const key in EmailData){
                        EmailData[key].forEach(element => {
                            if(userEmail===element.receiverEmail){
                                receiveMail.push(element);
                                receivedEmails.push(element);
                                console.log(element);

                            }
                        });
                     }
                }
                setReceiveMail(receivedEmails); 
              }
              catch (e) {}
        }
        fetchEMail();
    },[userEmail])
    
  return (
    <>
    {receiveMail.map((item,index)=> 
        <div key={index} className='container py-2 px-4 vh-100' style={{border:'1px solid black '}}>
        <div className="row p-2">
            {item.subject}
        </div>
        <div className='row p-2'>
            <div className='col'>
                <div className="row">Email</div>
                <div className="row">to me</div>
            </div>
            <div className='col'>Time</div>
        </div>
        <div className="row px-2 py-3">
                <p>{item.emailData}</p>
        </div>
    </div>
    )  }
    </>
  )
}

export default ReceiveMail