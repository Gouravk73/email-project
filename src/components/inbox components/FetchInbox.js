
const FetchInbox= async(userEmail) =>{
    const receivedEmails = [];                

    try {
        const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`)
        const data=await res.json();
        for(const key in data){
            const EmailData=data[key];
             for(const key1 in EmailData){
                const EmailDataKey=EmailData[key1];
                     for(const key2 in EmailDataKey){
                         if(userEmail===EmailDataKey[key2].receiverEmail){
                            receivedEmails.push(EmailDataKey[key2])
                        }
                     }
                }
            }
        
      return receivedEmails;

      }
      catch (e) {}

}
export default FetchInbox;