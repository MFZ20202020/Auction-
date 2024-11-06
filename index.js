const name = document.getElementById('name');

const password = document.getElementById('password');

const form = document.getElementById('form');



form.addEventListener('submit', (e)=> {
    
    
if (name.value == "" || name.value == null){
         
    e.preventDefault();
    name_error.innerHTML = "إسم المستخدم غير صحيح";
    name.style.borderColor = " red";
    }  
    
    else{
         name_error.innerHTML = "";
        name.style.borderColor = " black";
    }
    
if (password.value == "" || password.value == null){
         
    e.preventDefault();
    pass_error.innerHTML = "كلمة المرور غير صحيحة";
    password.style.borderColor = " red";
    }  
    
     else{
         pass_error.innerHTML = "";
         password.style.borderColor = " black";
    }
    
    
    
    
    
});
