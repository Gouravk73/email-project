import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetchInbox from './useFetchInbox';
import useFetchSent from './useFetchSent';
import { BsDot } from 'react-icons/bs';
import FetchReadData from './inbox components/FetchReadData';
import Deletedata from './inbox components/Deletedata';

const Home = () => {
  const userEmail = useSelector((state) => state.login.email);
  const [content, setContent] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const inboxContent = useFetchInbox(userEmail);
  const sentContent = useFetchSent(userEmail);

  const navigate = useNavigate();

  const composeNavigate = () => {
    navigate('/compose');
  };

  const buttonContentHandler = (data) => {
    setContent(data);
    setSelectedEmail(null);
  };

  const emailDetails = (data) => {
    data.read = true;
    FetchReadData(data);
    setSelectedEmail(data);
  };

  const deleteHandler = async (item) => {
    Deletedata(item);
    setSelectedEmail(null);
  };

  return (
    <div className="row px-1" style={{ height: '100vh' }}>
      <div className="col-3" style={{ borderRadius: '0', border: '1px solid black' }}>
        <div className="col px-3">
          <div className="row d-flex justify-content-center align-items-center">
            <button className="btn btn-primary my-2" onClick={composeNavigate} style={{ borderRadius: '0' }}>
              Compose
            </button>
          </div>
          <div className="row">
            <button className="btn   my-2" onClick={() => buttonContentHandler('inbox')} style={{ borderRadius: '0', border: '1px solid black' }}>
              Inbox
            </button>
            <button className="btn  my-2" onClick={() => buttonContentHandler('Unread')} style={{ borderRadius: '0', border: '1px solid black' }}>
              Unread
            </button>
            <button className="btn  my-2" onClick={() => buttonContentHandler('Starred')} style={{ borderRadius: '0', border: '1px solid black' }}>
              Starred
            </button>
            <button className="btn   my-2" onClick={() => buttonContentHandler('Sent')} style={{ borderRadius: '0', border: '1px solid black' }}>
              Sent
            </button>
            <button className="btn   " onClick={() => buttonContentHandler('Archive')} style={{ borderRadius: '0', border: '1px solid black' }}>
              Archive
            </button>
          </div>
        </div>
      </div>
      <div className="col-9 py-4 px-4">
        {content === 'Unread' && selectedEmail === null ? (
          inboxContent.map((item, index) =>
            !item.read && (
              <div key={index} className="row py-2 my-2" onClick={() => emailDetails(item)} style={{ border: '1px solid black' }}>
                <div className="col-6 d-flex">
                  {!item.read && <BsDot size={'2rem'} />} {item.senderEmail}
                </div>
                <div className="col-6">{item.emailData.substring(0, 20)}</div>
              </div>
            )
          )
        ) : (
          <></>
        )}

        {content === 'Sent' && selectedEmail === null ? (
          sentContent.map((item, index) => (
            <div key={index} className="row py-2 my-2" onClick={() => emailDetails(item)} style={{ border: '1px solid black' }}>
              <div className="col-6 d-flex">{item.senderEmail}</div>
              <div className="col-6">{item.emailData.substring(0, 20)}</div>
            </div>
          ))
        ) : (
          <> </>
        )}

        {content === 'inbox' && selectedEmail === null ? (
          inboxContent.map((item, index) => (
            <div key={index} className="row py-2 my-2" style={{ border: '1px solid black' }}>
              <div className="col-6 d-flex" onClick={() => emailDetails(item)}>
                {!item.read && <BsDot size={'2rem'} />} {item.senderEmail}
              </div>
              <div className="col-6" onClick={() => emailDetails(item)}>
                {item.emailData.substring(0, 20)}
              </div>
              <div>
                <button onClick={() => deleteHandler(item)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}

        {selectedEmail !== null && (
          <div className="container mx-3 py-2 px-4 vh-100" style={{ border: '1px solid black' }}>
            <div className="row p-2">
              <h3> {selectedEmail.subject}</h3>
            </div>
            <div className="row p-2">
              <div className="col">
                <div className="row"> to </div>
                <div className="row">
                  <h6> {selectedEmail.receiverEmail}</h6>
                </div>
              </div>
              <div className="col" style={{ textAlign: 'end' }}>
                <h6> {selectedEmail.date}</h6>
              </div>
            </div>
            <div className="row m-5 px-3 py-5" style={{ border: '1px solid black', minHeight: '400px' }}>
              <p>{selectedEmail.emailData}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home
