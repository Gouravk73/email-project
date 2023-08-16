const FetchReadData = async (dataToUpdata) => {
    try {
      const res = await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`);
      const data = await res.json();
      
      for (const key in data) {
        const EmailData = data[key];
  
        for (const emailKey in EmailData) {
          EmailData[emailKey].forEach(element => {
            if (dataToUpdata.date === element.date) {
              const emailIdToUpdate = element.id; // Unique identifier of the email
              
              try {
                fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email/${key}/${emailKey}/${emailIdToUpdate}.json`, {
                  method: "PUT",
                  body: JSON.stringify(dataToUpdata),
                  headers: {
                    "content-type": "application/json"
                  }
                });
              } catch (e) {
                console.error(e);
              }
            }
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  export default FetchReadData;
  