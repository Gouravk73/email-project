import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const toSendInput=useRef();
  const emailSubject=useRef();
  const senderEmail=useSelector((state)=>state.login.email).split(/[@.]/).join('')
  console.log(senderEmail);

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
        const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/${senderEmail}.json`,{
          method:'POST',
          body:JSON.stringify(dataToSend),
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
    console.log(plainTextContent);
  };

  return (
    <div className="container py-2">
      <form action="">
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="toField" className="form-label">To</label>
            <input type="text" id="toField" className="form-control" style={{ width: '100%' }} required ref={toSendInput} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="subjectField" className="form-label">Subject</label>
            <input type="text" id="subjectField" className="form-control" style={{ width: '100%' }} ref={emailSubject} required/>
          </div>
        </div>
      <div className="mb-3">
        <Editor editorStyle={{ border: "1px solid black" }} editorState={editorState} onEditorStateChange={handleEditorChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSendEmail}>Send Email</button>
      </form>
    </div>
  );
}

export default Home;
