import { useState, useEffect } from 'react';
import FetchInbox from './inbox components/FetchInbox';

const useFetchInbox = (userEmail) => {
  const [inboxContent, setInboxContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchInbox(userEmail);
      setInboxContent(res);
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [userEmail]);

  return inboxContent;
};

export default useFetchInbox;
