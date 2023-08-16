import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useSelector } from 'react-redux';
import './home.css'
const ComposePage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const toSendInput=useRef();
  const emailSubject=useRef();
  const senderEmail=useSelector((state)=>state.login.email).split(/[@.]/).join('')

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSendEmail = async(e) => {
    e.preventDefault();
    const plainTextContent = editorState.getCurrentContent().getPlainText();
    const subject=emailSubject.current.value;
    const receiverEmail=toSendInput.current.value;
    
    if (!receiverEmail || !subject) {
      alert('Please fill out all required fields.');
      return;
    }

    const dataToSend={
      receiverEmail:receiverEmail,
      subject: subject,
      emailData:plainTextContent,
      senderEmail:senderEmail,
    }
    try {
        const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email/${senderEmail}.json`,{
          method:'POST',
          body:JSON.stringify([dataToSend]),
          headers:{
            "Content-Type":"application/json",
          }
        })
        if(!res.ok) throw new Error('cannot send')
        const data=await res.json();
      console.log(data)
      emailSubject.current.value='';
      toSendInput.current.value='';
    } catch (e) {
      
    }
    
  };

  return (
    <div className="container py-2">
      <form action="">
      <div className="input-group mb-3">
        <span className="input-group-text"  >To</span>
        <input type="email" className="form-control" placeholder='To'required ref={toSendInput} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"  >Subject</span>
        <input type="text" className="form-control" placeholder='Subject'required ref={emailSubject} />
      </div>
       
         
      <div className="mb-3 md-3">
        <Editor 
            editorStyle={{ 
              border: "1px solid black",
              minHeight: "300px", 
              maxHeight: "300px", 
              overflow: "auto",
              padding:'0 0.7rem'
             }} 
            editorState={editorState}
            toolbarStyle={{
              bottom: 0,
              position:'absolute',
              left: 0,
             right: 0,
            }}
            onEditorStateChange={handleEditorChange}
            />
      </div>
      <button className="btn btn-primary" onClick={handleSendEmail}>Send Email</button>
      </form>
    </div>
  );
}

export default ComposePage;

 