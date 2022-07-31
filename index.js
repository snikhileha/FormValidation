 $('#failure').hide();
 $('#success').hide();
 
            //   Validation of name
 
 const goodname = document.getElementById('name');
 let validGoodname = false;
goodname.addEventListener('blur',()=>{
    let regex = /[A-Z][a-zA-Z\s]{1,20}$/;
    let str = goodname.value;
    let str2 = str.trim();
    if(regex.test(str2)){
        goodname.classList.remove('is-invalid');
        validGoodname = true;
        }else{
        goodname.classList.add('is-invalid');
        validGoodname = false;
     }
})

        //  Validation of address

const address = document.getElementById("address");
let validAddress = false;
   address.addEventListener('blur',()=>{
    let regex = /[a-zA-Z0-9_\s\.\-\,]{1,100}$/;
    let str = address.value;
    if(regex.test(str)){
         address.classList.remove('is-invalid');
        validAddress = true;
        }else{
         address.classList.add('is-invalid');
        validAddress = false;
         }
   })

        //   Validation of email

const email = document.getElementById("email");
let validEmail = false;
email.addEventListener('blur',()=>{
    let regex = /^[0-9a-zA-Z_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/
    let str1 = email.value;
    if(regex.test(str1)){
        email.classList.remove('is-invalid');
        validEmail = true;

    }else{
         email.classList.add('is-invalid');
        validEmail = false;
    }
    
})

            // validation of phone number
        
const phone = document.getElementById("phoneNo");
let validphone = false;

phone.addEventListener('blur',()=>{
    let regex= /^[0-9]{10}$/;
    let str2 = phone.value;
    if(regex.test(str2)){
         phone.classList.remove('is-invalid');
         validphone = true;
     }else{
         phone.classList.add('is-invalid');
         validphone = false;
    }
    
})

            //   Validation of DOB

const dob = document.getElementById("dob");
let validDOB = false;
dob.addEventListener('blur',()=>{
    let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/
    let str3 = dob.value;
    
    if(regex.test(str3) ){
         dob.classList.remove('is-invalid');
        validDOB = true;

    }else{
         dob.classList.add('is-invalid');
         validDOB = false;
    }
   
})
dob.addEventListener('focus',()=>{
    let date = new Date();
    let d  =date.getDate();
    let m = date.getMonth()+1;
    let y = date.getFullYear();
    if(m<10){
        m = "0" + m;
    }
    if(d<10){
        d = "0" + d;
    }
    let today=y + "-"+ m + "-" + d;
    document.getElementById("dob").setAttribute("max",today);
   
   
})

        //    Fetch API & Form validation function

const form = document.getElementById("form");
 form.addEventListener('submit',(event) => {
    event.preventDefault();
     const formData = new FormData(form);
    
    const data = new URLSearchParams(formData);
    
    fetch('https://reqres.in/api/users', {
        method: 'post',
        body: data
   
    }).then(res => res.json())
    .then(data =>{
        if(validDOB && validEmail && validGoodname && validphone && validAddress   ){
            let success=document.getElementById("success");
              success.classList.add('show');
               
               $('#failure').hide();
               $('#success').show();

        console.log(data)}
    else{
        let failure = document.getElementById("failure");
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }})
    .catch(error =>{
        
             alert("Please correct the errors & try again");
             console.log(error)});
    })
