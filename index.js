const form = document.getElementById("form");
const goodname = document.getElementById('name');
const email = document.getElementById("email");
const phone = document.getElementById("phoneNo");
const dob = document.getElementById("dob");
const address = document.getElementById("address");
let validEmail = false;
let validGoodname = false;
let validphone = false;
let validDOB = false;
let validAddress = false;


 $('#failure').hide();
 $('#success').hide();
 
 

goodname.addEventListener('blur',()=>{
    let regex = /[A-Z][a-zA-Z\s]{1,20}$/;
    let str = goodname.value;
    if(regex.test(str)){
        // console.log("Your Name Is Valid");
        goodname.classList.remove('is-invalid');
        validGoodname = true;
        }else{
        // console.log("Your Name Is Not Valid");
        goodname.classList.add('is-invalid');
        validGoodname = false;

    }
   // console.log("the name is : "+validGoodname);
})
   address.addEventListener('blur',()=>{
    let regex = /[a-zA-Z0-9_\s\.\-]{1,100}$/;
    let str = address.value;
    if(regex.test(str)){
        // console.log("Your Name Is Valid");
        address.classList.remove('is-invalid');
        validAddress = true;
        }else{
        // console.log("Your Name Is Not Valid");
        address.classList.add('is-invalid');
        validAddress = false;

    }
   // console.log("address is : "+validAddress);
})
email.addEventListener('blur',()=>{
    let regex = /^[0-9a-zA-Z_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/
    let str1 = email.value;
    if(regex.test(str1)){
        // console.log("Your Email Id Is Valid");
        email.classList.remove('is-invalid');
        validEmail = true;

    }else{
        // console.log("Your Email Id Is Not Valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
    //console.log("email id is :"+validEmail);
})
phone.addEventListener('blur',()=>{
    let regex= /^[0-9]{10}$/;
    let str2 = phone.value;
    if(regex.test(str2)){
        // console.log("Your Phone Number Is Valid");
        phone.classList.remove('is-invalid');
        validphone = true;

    }else{
        // console.log("Your Phone Number Is Not Valid");
        phone.classList.add('is-invalid');
        validphone = false;
    }
    
})

dob.addEventListener('blur',()=>{
    let regex = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})$/
    let str3 = dob.value;
    let result=moment(`${str3}`,'MM-DD-YYYY',true).isValid();
    if(regex.test(str3) && result == true ){
        
        // console.log("Your DOB Is Valid");
        dob.classList.remove('is-invalid');
        validDOB = true;

    }else{
        // console.log("Your DOB Is Not Valid");
        dob.classList.add('is-invalid');
        validDOB = false;
    }
   // console.log("email id is :"+validDOB);
})



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
