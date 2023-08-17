
const FetchSent= async(userEmail) =>{
    const receivedEmails = [];                

    try {
        const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email/${userEmail.split(/[@.]/).join('')}.json`)
        const data=await res.json();
        for(const key in data){
            const EmailData=data[key];
            for(const key1 in EmailData){
                const EmailDataKey=EmailData[key1];
                console.log(EmailDataKey);
                            receivedEmails.push(EmailDataKey )
                         
                }
            }
        
        return receivedEmails

      }
      catch (e) {}

}
export default FetchSent;