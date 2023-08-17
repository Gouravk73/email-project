const Deletedata = async (dataToDelete) => {
    try {
      const res = await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`);
      const data = await res.json();
      
      for (const key in data) {
        const EmailData = data[key];
   
        for (const emailKey in EmailData) {
            const emailObject = EmailData[emailKey];
            for(const key1 in emailObject) {
              if(emailObject[key1].date===dataToDelete.date) {
                    console.log("delete",)
                try {
                   const res= await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email/${key}/${emailKey}.json`, {
                    method: "DELETE",
                  });
                  const dataRes=await res.json();
                  console.log(dataRes)
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
  
  export default Deletedata;
  