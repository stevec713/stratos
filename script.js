"use strict";

// Switch between light and dark mode
function toggleDarkMode() {
    let nightSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>';
    let daySVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>';

    if(nightToggle.classList.contains("dark")) {
        nightToggle.innerHTML = daySVG;

        let mainDarkElements = document.querySelectorAll(".dark");
        let secondaryLightElements = document.querySelectorAll(".light");

        // change all dark classes to light classes
        for (let mainDarkElement of mainDarkElements) {
            mainDarkElement.classList.remove("dark");
            mainDarkElement.classList.add("light");
        }

        // change all light classes to dark classes
        for (let secondaryLightElement of secondaryLightElements) {
            secondaryLightElement.classList.remove("light");
            secondaryLightElement.classList.add("dark");
        }
    }
    else {
        nightToggle.innerHTML = nightSVG;

        let mainLightElements = document.querySelectorAll(".light");
        let secondaryDarkElements = document.querySelectorAll(".dark");

        // change all light classes to dark classes
        for (let mainLightElement of mainLightElements) {
            mainLightElement.classList.remove("light");
            mainLightElement.classList.add("dark");
        }

        // change all dark classes to light classes
        for (let secondaryDarkElement of secondaryDarkElements) {
            secondaryDarkElement.classList.remove("dark");
            secondaryDarkElement.classList.add("light");
        }
    }
}

function validateName(nameInput, isFirst) {
    if (nameInput.length < 2 || /[0-9]/.test(nameInput)) {
        if(isFirst) {
            document.getElementById("firstname").innerHTML = "First name must be at least 2 characters long and cannot contain numbers.";
            fNameIsValid = false;
            fname.classList.add("error");
            fname.classList.remove("valid");
        } else {
            document.getElementById("lastname").innerHTML = "Last name must be at least 2 characters long and cannot contain numbers.";
            lNameIsValid = false;
            lname.classList.add("error");
            lname.classList.remove("valid");
        }
    } else {
        if(isFirst) {
            document.getElementById("firstname").innerHTML = "";
            fNameIsValid = true;
            fname.classList.remove("error");
            fname.classList.add("valid");
        } else {
            document.getElementById("lastname").innerHTML = "";
            lNameIsValid = true;
            lname.classList.remove("error");
            lname.classList.add("valid");
        }
    }
}

function validatePhone() {
    if(/^\d\d\d[\s-]?\d\d\d[\s-]?\d\d\d\d$/.test(phone.value)) {
        document.getElementById("phonenumber").innerHTML = "";
        phoneIsValid = true;
        phone.classList.remove("error");
        phone.classList.add("valid");
    } else {
        document.getElementById("phonenumber").innerHTML = "Phone number is invalid. Follow this format: xxx xxx xxxx";
        phoneIsValid = false;
        phone.classList.add("error");
        phone.classList.remove("valid");
    }

    if (!phoneIsChecked && phone.value.length === 0) {
        phone.classList.remove("error");
        document.getElementById("phonenumber").innerHTML = "";
    }
}

function validateEmail() {
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email.value)) {
        document.getElementById("emailaddress").innerHTML = "";
        emailIsValid = true;
        email.classList.remove("error");
        email.classList.add("valid");
    } else {
        document.getElementById("emailaddress").innerHTML = "Email is invalid.";
        emailIsValid = false;
        email.classList.add("error");
        email.classList.remove("valid");
    }

    if (!emailIsChecked && email.value.length === 0) {
        email.classList.remove("error");
        document.getElementById("emailaddress").innerHTML = "";
    }
}

function validateChoice() {
    if (this.value === "phone") {
        phoneIsChecked = true;
        emailIsChecked = false;

        if (email.value.length === 0) {
            email.classList.remove("error");
            document.getElementById("emailaddress").innerHTML = "";
        }
    }
    if (this.value === "email") {
        emailIsChecked = true;
        phoneIsChecked = false;

        if (phone.value.length === 0) {
            phone.classList.remove("error");
            document.getElementById("phonenumber").innerHTML = "";
        }
    }
}

function validateComment() {
    if (comment.value.length < 5) {
        document.getElementById("commentinfo").innerHTML = "Comment must be at least 5 characters long.";
        comment.classList.add("error");
        comment.classList.remove("valid");
        commentIsValid = false;
    } else {
        document.getElementById("commentinfo").innerHTML = "";
        comment.classList.remove("error");
        comment.classList.add("valid");
        commentIsValid = true;
    }
}

function createObject() {
    let userInfo = {
        firstName: fname.value,
        lastName: lname.value,
        phoneNumber: phone.value,
        emailAddress: email.value,
        phonePreferred: phoneIsChecked,
        comment: comment.value
    };

    console.log(userInfo);
    return userInfo;
}

function validateForm(e) {
   if ((phoneIsChecked && phoneIsValid || emailIsChecked && emailIsValid) && fNameIsValid && lNameIsValid && commentIsValid) {
        let userInfo = createObject();
        alert("Form is valid. Thank you for your submission!\nHere is your information:\nFirst Name: " + userInfo["firstName"] + "\nLast Name: " + userInfo["lastName"] + "\nPhone Number: " + userInfo["phoneNumber"] + "\nEmail Address: " + userInfo["emailAddress"] + "\nPhone is your Preferred Method: " + userInfo["phonePreferred"] + "\nComment: " + userInfo["comment"]);
        phone.classList.remove("error");
        email.classList.remove("error");
        fname.classList.remove("error");
        lname.classList.remove("error");
        comment.classList.remove("error");

        fNameIsValid = false;
        lNameIsValid = false;
        phoneIsValid = false;
        emailIsValid = false;
        commentIsValid = false;
        phoneIsChecked = document.getElementById("phone").checked;
        emailIsChecked = document.getElementById("email").checked;

        fname.value = "";
        lname.value = "";
        phone.value = "";
        email.value = "";
        comment.value = "";
    }
    else {
        e.preventDefault();
        if (phoneIsChecked && !phoneIsValid) {
            phone.classList.add("error");
            document.getElementById("phonenumber").innerHTML = "Please enter a valid phone number or change your preferred method of contact";
        }
        if (emailIsChecked && !emailIsValid) {
            email.classList.add("error");
            document.getElementById("emailaddress").innerHTML = "Please enter a valid email or change your preferred method of contact";
        }
        if (!fNameIsValid) {
            fname.classList.add("error");
            document.getElementById("firstname").innerHTML = "Please enter a valid first name";
        }
        if (!lNameIsValid) {
            lname.classList.add("error");
            document.getElementById("lastname").innerHTML = "Please enter a valid last name";
        }
        if (!commentIsValid) {
            comment.classList.add("error");
            document.getElementById("commentinfo").innerHTML = "Please enter a valid comment";
        }
    }
}

// toggle night mode
let nightToggle = document.getElementById("night");
nightToggle.addEventListener("click", toggleDarkMode);

//validate first and last name
let fNameIsValid = false;
let lNameIsValid = false;

let fname = document.getElementById("fname");
fname.addEventListener("input", function() { validateName(fname.value, true)});

let lname = document.getElementById("lname");
lname.addEventListener("input", function() { validateName(lname.value, false)});

//validate radio
let phoneIsChecked = document.getElementById("phone").checked;
let emailIsChecked = document.getElementById("email").checked;
let radioChoice = document.querySelectorAll('input[name="contact"]');
for (let choice of radioChoice) {
    choice.addEventListener("change", validateChoice);
}


let phoneIsValid = false;
let emailIsValid = false;
//validate phone number 
let phone = document.getElementById("pnumber");
phone.addEventListener("input", validatePhone);

//validate email
let email = document.getElementById("emaila");
email.addEventListener("input", validateEmail);

//validate comment
let commentIsValid = false;
let comment = document.getElementById("comment");
comment.addEventListener("input", validateComment);

//Validate form on submit
let contactForm = document.getElementById("contactform");
contactForm.addEventListener("submit", validateForm);





// Shopping Cart
function toggleShoppingCart() {
    if (!carSelected) {
        carSelected = true;
        itemList["Stratos One"] = parseFloat(car.value);
    } else {
        itemList = {};
        carSelected = false;
        output = "Your cart is empty";
    }
    calculatePrices();
}

function changeAddOn() {
    if(carSelected) {
        let article = this.closest("article");
        let itemName = article.querySelector("h4").textContent;
        if (this.checked) {
            itemList[itemName] = parseFloat(this.value);
        } else {
            delete itemList[itemName];
        }
        calculatePrices();
    }
    else {
        alert("Please select a car first.");

    }
}

function calculatePrices() {
    let subtotalElement = document.querySelector("dd:first-of-type");
    let taxElement = document.querySelector("dd:nth-of-type(2)");
    let shippingElement = document.querySelector("dd:nth-of-type(3)");
    let totalElement = document.querySelector("dd:last-of-type");

    subtotal = 0;
    for (let item in itemList) {
        subtotal += itemList[item];
    }
    subtotalElement.innerHTML = "$" + subtotal;
    taxElement.innerHTML = (tax * 100) + "%";
    shippingElement.innerHTML = "$" + shipping;
    totalElement.innerHTML = "$" + (subtotal + (subtotal * tax) + shipping);
}

//Cost Calculator
let subtotal = 0;
let tax = .07;
let shipping = 10;
let total = 0;

let itemList = {};
let carSelected = false;
let output = "";

//add car and allow add-ons
let car = document.querySelector('button[name="car"]');
car.addEventListener("click", toggleShoppingCart);

let addOns = document.querySelectorAll('#purchase input[type="checkbox"]'); 
for (let addOn of addOns) {
    addOn.addEventListener("change", changeAddOn);
}

