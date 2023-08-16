
const FetchInbox= async(userEmail) =>{
    try {
        const res=await fetch(`https://email-project-bf24b-default-rtdb.asia-southeast1.firebasedatabase.app/email.json`)
        const data=await res.json();
        console.log(data)

        const receivedEmails = [];                
        for(const key in data){
            const EmailData=data[key];
            console.log(EmailData)

             for(const key in EmailData){
                EmailData[key].forEach(element => {
                    if(userEmail===element.receiverEmail){
                        receivedEmails.push(element);
                        console.log('ele',element)

                    }
                });
             }
        }
        return receivedEmails;
      }
      catch (e) {}
}
export default FetchInbox;