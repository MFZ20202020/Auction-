const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit' , (e)=>{
    
    var rang = /^([A-Za-z0-9_\-\.])+\@([[A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    
    if(email.value == '' || email.value == null)
        {
            e.preventDefault();
            email_error.innerHTML = "أدخل كلمة مرورك";
            email.style.borderColor = "red";
        }
    
    else if(!email.value.match(rang))
        {
            e.preventDefault();
            email_error.innerHeight = "أدخل بريدك بصورة صحيحة";
             email.style.borderColor = "red";             
    }
    
    
    
    
})