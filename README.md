# Form Validation
   




This project is based on HTML CSS & JavaScript.It validate your information whether it is correct or not.
This page is responsive so you can access it through your mobile.



## Features

- Bootstrap for validation & success or error message.
- Regular expression for validation.
- Moment.js library for date validation.
- Responsive webpage.
- Used API call for fetching data.


## Tech Stack

**Client:** HTML , CSS , JavaSript , Bootstrap , JQuery.




## How It Works

- ### Success or Error Message at the top.

  At the start when form is empty, success or error message is hidden by using JQuery.
  The success or error message will appear after the form submission. 
   
#
     <!-- HTML Page -->
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"integrity
     ="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"crossorigin="anonymous"></script>
     <!-- js code -->
     $('#failure').hide();
     $('#success').hide();

 - ### Validate Name , Address , Email Id & Phone No. 
     By using regular expression it validates input fields.

   Name must be long upto 20 character & it not contain no.
#
    goodname.addEventListener('blur',()=>{
    let regex = /[A-Z][a-zA-Z\s]{1,20}$/;
    let str = goodname.value;
    if(regex.test(str)){
    console.log("Your Name Is Valid");
    goodname.classList.remove('is-invalid');
    validGoodname = true;
    }else{
    console.log("Your Name Is Not Valid");
    goodname.classList.add('is-invalid');
    validGoodname = false;

    }
    
    })

 Address includes all character,capital & small any no, symbol
 upto 100 character 

    address.addEventListener('blur',()=>{
    let regex = /[a-zA-Z0-9_\s\.\-]{1,100}$/;
    let str = address.value;
    if(regex.test(str)){
    console.log("Your Name Is Valid");
    address.classList.remove('is-invalid');
    validAddress = true;
    }else{
    console.log("Your Name Is Not Valid");
    address.classList.add('is-invalid');
    validAddress = false;

    }
    
    })


  Email Id contain format ig:- exaple123@gmail.com

    email.addEventListener('blur',()=>{
    let regex = /^[0-9a-zA-Z_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/
    let str1 = email.value;
    if(regex.test(str1)){
    console.log("Your Email Id Is Valid");
    email.classList.remove('is-invalid');
    validEmail = true;

    }else{
    console.log("Your Email Id Is Not Valid");
    email.classList.add('is-invalid');
    validEmail = false;
    }
    console.log("email id is :"+validEmail);
    })

 Pnone No includes 10 digits only.

    phone.addEventListener('blur',()=>{
    let regex= /^[0-9]{10}$/;
    let str2 = phone.value;
    if(regex.test(str2)){
    console.log("Your Phone Number Is Valid");
    phone.classList.remove('is-invalid');
    validphone = true;

    }else{
    console.log("Your Phone Number Is Not Valid");
    phone.classList.add('is-invalid');
    validphone = false;
    }
    console.log("email id is :"+validphone);
    })

  - ### Validate date by using moment.js library.
#
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" ></script> 
    
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

  - ### API call & Validate function
        
  # 


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

- ### Responsive page using mediaqueries.

#
    @media(max-width:584px ){

 
    .container{
    
    position: relative;    
    background-color: rgba(108, 160, 239, 0.5);
    width: 90%;
    border-radius: 6px;
    padding: 20px;
    margin: 0 15px;
    box-shadow: 0 5px 10px #0000001a;    
    }
  
    body{
    display: flex;
    flex: auto;
    justify-content: flex-start;
    }
    #heading{
    font-size: medium;
    }
    h2 {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 900;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    }
    label {
    font-weight: 500;
    }

    }

 - ### Correction message   
   By using bootstrap functionality input feilds detect
  red box & correction message until validation is not made.

For Example:- name validation.
# 
    <label for="name">Name</label> <br>
        <input type="text" name="name" class=" form-control is-invalid"
         id="name" placeholder="Enter your name here">
         <div class="invalid-feedback" style="color: red;"> Your name must be
             2-20 characters long & not contain number</div>

 
Error message is highlighted in red color. Once you provide necessary details the error message will get disappear.
this is done by using "in-invalid" class in input area & "invalid-feedback" class in div which specify error.

#
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
   
    })
## Feedback

If you have any feedback, please reach out to us at snehajoshi1895@gmail.com



