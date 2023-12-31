const FetchReadData = async (dataToUpdate) => {
    try {
      const res = await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`);
      const data = await res.json();
      
      for (const key in data) {
        const EmailData = data[key];
   
        for (const emailKey in EmailData) {
            const emailObject = EmailData[emailKey];
            for(const key1 in emailObject) {
              if(emailObject[key1].date===dataToUpdate.date) { 
                try {
                   fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email/${key}/${emailKey}.json`, {
                    method: "PUT",
                    body: JSON.stringify([dataToUpdate]),
                    headers: {
                      "content-type": "application/json"
                    }
                   
                  });
                } catch (e) {
                  console.error('error');
                }
              }
            }



        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  export default FetchReadData;
  