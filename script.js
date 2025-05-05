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
            output += "First name must be at least 2 characters long and cannot contain numbers.\n";
            fNameIsValid = false;
            fname.classList.add("error");
            fname.classList.remove("valid");
        } else {
            output += "Last name must be at least 2 characters long and cannot contain numbers.\n";
            lNameIsValid = false;
            lname.classList.add("error");
            lname.classList.remove("valid");
        }
    } else {
        if(isFirst) {
            fNameIsValid = true;
            fname.classList.remove("error");
            fname.classList.add("valid");
        } else {
            lNameIsValid = true;
            lname.classList.remove("error");
            lname.classList.add("valid");
        }
    }
}

function validatePhone() {
    if(/^\d\d\d[\s-]?\d\d\d[\s-]?\d\d\d\d$/.test(phone.value)) {
        phoneIsValid = true;
        phone.classList.remove("error");
        phone.classList.add("valid");
    } else {
        phoneIsValid = false;
        phone.classList.add("error");
        phone.classList.remove("valid");
        output += "Phone number is invalid.\n";
    }
}

function validateEmail() {
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email.value)) {
        emailIsValid = true;
        email.classList.remove("error");
        email.classList.add("valid");
    } else {
        emailIsValid = false;
        email.classList.add("error");
        email.classList.remove("valid");
        output += "Email is invalid.\n";
    }
}


let output="";
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

//validate phone number 
// if () {
let phoneIsValid = false;
let phone = document.getElementById("pnumber");
phone.addEventListener("input", validatePhone);
// } else {
    //validate email
let emailIsValid = false;
let email = document.getElementById("emaila");
email.addEventListener("input", validateEmail);
// }