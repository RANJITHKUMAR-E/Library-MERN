import emailjs from '@emailjs/browser';
function SendMail(){
    var params = {
        from_name : document.getElementById('fullName').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    };
    emailjs.send('service_3mq7gs5','template_zika8db',params).then((res) =>{
        document.getElementById('fullName').value='';
        document.getElementById('email_id').value='';
        document.getElementById('message').value='';
        console.log(res);
        alert('Success' + res.status);
    })
    .catch((err) => console.log(err));
}
    
  