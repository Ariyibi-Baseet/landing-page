
const form = document.querySelector('.form')
const fullName = document.querySelector('.fullName');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const categories = document.querySelector('.categories');
const submitBtn = document.querySelector('.submit-btn');
var message = document.querySelector('.message');
var messageEmail = document.querySelector('.messageEmail');
var messagePhone = document.querySelector('.messagePhone');
var messageCat = document.querySelector('.messageCat');

submitBtn.addEventListener('click', (e) => {
    let usPhoneCode = /[+1]/g;
    let mexicoPhoneCode = /[+52]/g;
    let singaporePhoneCode = /[+65]/g;
    let validMail = /[@gmail.com]/g;
    let validSeneca = /[@seneca.com]/g;

    if(fullName.value == "" || fullName.value == null)
    {
        message.style.display = "block"
        message.innerHTML = "input field cannot be empty";
    }
    else if(fullName.value[0].toLowerCase() === fullName.value[0])
    {
        message.style.display = "block"
        message.innerHTML = "name character should begin with uppercase";        
    }
    else if(fullName.value.length <= 20)
    {
        message.style.display = "block"
        message.innerHTML = "name character should not be less than 20";
    }
    else if(fullName.value.length > 20 && fullName.value.length > 40)
    {
        message.style.display = "block"
        message.innerHTML = "name character should not be greater than 40";
    }
    else if(email.value == "" || email.value == null)
    {
        messageEmail.style.display = "block";
        messageEmail.innerHTML = "email address should not be empty";
    }
    else if(email.value.length <= 10)
    {
        messageEmail.style.display = "block";
        messageEmail.innerHTML = "email address should not be less than 10";
    }
    else if(email.value.length > 10 && email.value.length > 30)
    {
        messageEmail.style.display = "block";
        messageEmail.innerHTML = "email address should not be greater than 30";
    }
    else if(phone.value == "" || phone.value == null)
    {
        messagePhone.style.display = "block";
        messagePhone.innerHTML = "phone field cannot be empty";
    }
    else if(isNaN(phone.value))
    {
        messagePhone.style.display = "block";
        messagePhone.innerHTML = "number only!";              
    }
    else if(usPhoneCode.test(phone.value) == false || singaporePhoneCode.test(phone.value) == false || mexicoPhoneCode.test(phone.value) == false)
    {
        messagePhone.style.display = "block";
        messagePhone.innerHTML = "cannot accept this number! Please provide Mexico or Singapore or United States number";       
    }
    else if(validMail.test(email.value) == false || validSeneca.test(email.value) == false)
    {
        messageEmail.style.display = "block";
        messageEmail.innerHTML = "must contain either @gmail.com or @seneca.com";
    }
    else if(categories.value == "")
    {
        messageCat.style.display = "block"
        messageCat.innerHTML = "please select an option!";
    }
    else{
        swal({
            text:`
            ${fullName.value} \n 
             ${email.value} \n 
             ${categories.value} \n 
             ${phone.value}`,
            icon: "success",
            button: "okay",
          });


          fullName.value = "";
          email.value = "";
          phone.value = "";
          categories.value = "";
          fullName.style.border = "none";
          email.style.border = "none";
          phone.style.border = "none";
          categories.style.border = "none";
    }

    e.preventDefault()
});

fullName.addEventListener('keyup',()=>{
    if(fullName.value.length > 0)
    {
        fullName.style.border = "2px solid lightgreen";
        message.innerHTML = "";
    }else if(fullName.value == "")
    {
        fullName.style.border = "none";
    }
})

email.addEventListener('keyup',()=>{
    if(email.value.length > 0)
    {
        email.style.border = "2px solid lightgreen";
        messageEmail.innerHTML = "";
    }else if(email.value == "")
    {
        email.style.border = "none";
    }
})

phone.addEventListener('keyup',()=>{
    if(phone.value.length > 0)
    {
        phone.style.border = "2px solid lightgreen";
        messagePhone.innerHTML = "";
    }else if(phone.value == "")
    {
        phone.style.border = "none";
    }
})

categories.addEventListener('change',()=>{
    if(categories.value.length > 0)
    {
        categories.style.border = "2px solid lightgreen";
        messageCat.innerHTML = "";
    }else if(categories.value == "")
    {
        categories.style.border = "none";
    }
})

// Responsive navbar
const navlists = document.querySelector('.navlists');
const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    navlists.classList.toggle('show');
})