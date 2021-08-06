   
function sendEmail(){


    var clientMail = document.getElementById("email").value;
    var clientPhone = document.getElementById("phone").value;
    var clientName = document.getElementById("fullName").value;
    
    console.log(clientMail)
    
    
    
    
    Email.send({
    // Host : "stmp.gmail.com",
    // Username : "alestaa14@gmail.com",
    // Password:"under364",
    SecureToken : "10db2687-7169-4af5-914a-9954d5d4d452",
    To : "emrebulbulvvv@gmail.com",
    From : "alestaa14@gmail.com",
    Subject :"New Client"  ,
    Body : "Name"+clientName+"<br>"+"Phone : "+clientPhone+"<br>"+"Mail :"+clientMail
    }).then(
    message => alert(message)
    );
    
    }
    