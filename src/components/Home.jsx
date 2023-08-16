 import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
 const Home = () => {
  const [dataToDisplay,setDataToDisplay] =useState('');
  const navigate=useNavigate();
  const composeNavigate =()=>{
    navigate('/compose')
  }
   return (
  <div class="row px-1 " style={{height:'100vh'}}>
    <div class="col-3 " style={{borderRadius:'0' ,border:'1px solid black'}} >
      <div className='col px-3'>
        <div className="row d-flex justify-content-center align-items-center">
          <button className='btn btn-primary my-2'onClick={ composeNavigate} style={{borderRadius:'0'}}>Compose</button>
          </div>
          <div className='row'>
          <button className='btn   my-2'onClick={ composeNavigate} style={{borderRadius:'0',border:'1px solid black'}}>Inbox</button>
          <button className='btn  my-2'onClick={ composeNavigate} style={{borderRadius:'0',border:'1px solid black'}}>Unread</button>
          <button className='btn  my-2'onClick={ composeNavigate} style={{borderRadius:'0',border:'1px solid black'}}>Starred</button>
          <button className='btn   my-2'onClick={ composeNavigate} style={{borderRadius:'0',border:'1px solid black'}}>Sent</button>
          <button className='btn   'onClick={ composeNavigate} style={{borderRadius:'0',border:'1px solid black'}}>Archive</button>

          </div>
      </div>
    </div>
    <div className="col-9" >
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
        <div className="row py-2 my-1" style={{border:'1px solid black'}}>
          <div className="col-3">Name</div>
          <div className="col-9">Desc</div>
        </div>
    </div>
  </div>
 

   )
 }
 
 export default Home