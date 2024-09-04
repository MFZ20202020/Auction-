const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


const name_check = document.getElementById('name_error');
const email_check = document.getElementById('email_error');
const pass_check = document.getElementById('pass_error');



form.addEventListener('submit', (e)=> {

    var rang = /^([A-Za-z0-9_\-\.])+\@([[A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    
    if (!isNaN(name.value) || name.value == null) {
        e.preventDefault();
        name_check.innerHTML = "إسم المستخدم غير صحيح";
        name.style.borderColor = "red";
    } 
    else if(name.value.length <=7){
        e.preventDefault();
        name_check.innerHTML = "إسم المستخدم قصير";
        name.style.borderColor = "red";
            }
    
     else if(name.value.length >=15)
        {
        e.preventDefault();
        name_check.innerHTML = "لقد تجاوزت الطول المحدد لإسم المستخدم";
        name.style.borderColor = "red";
            }
    
        else{
        name_check.innerHTML = " ";
        name.style.borderColor = "black";
    }
    

    if (!email.value.match(rang))
          {
               e.preventDefault();
              email_check.innerHTML = "أدخل بريدك بصورة صحيحة";
              email.style.borderColor = "red";
      } 
        else{
        email_check.innerHTML = " ";
        email.style.borderColor = "black";
    }
    
    
    if (password.value == null || password.value == "")
          {
               e.preventDefault();
              pass_check.innerHTML = "أدخل كلمة مرورك";
              password.style.borderColor = "red";
      }

    else if (password.value.length <=5)
          {
               e.preventDefault();
              pass_check.innerHTML = "كلمة مرورك قصيرة";
              password.style.borderColor = "red";
      }
    
    else if (password.value.length >=11)
          {
               e.preventDefault();
              pass_check.innerHTML = "كلمة مرورك طويلة";
              password.style.borderColor = "red";
      }
    else{
        pass_check.innerHTML = " ";
        password.style.borderColor = "black";
    }





})
