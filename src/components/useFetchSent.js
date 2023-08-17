import { useState, useEffect } from 'react';
import FetchSent from './inbox components/FetchSent';

const useFetchSent = (userEmail) => {
  const [sentContent, setSentContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchSent(userEmail);
      setSentContent(res);
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [userEmail]);

  return sentContent;
};

export default useFetchSent;
