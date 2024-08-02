import { gsap } from "gsap";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD01Cji9i6imlengitXezr6kKfujeBF-X8",
  authDomain: "dx-ventures.firebaseapp.com",
  projectId: "dx-ventures",
  storageBucket: "dx-ventures.appspot.com",
  messagingSenderId: "549824296937",
  appId: "1:549824296937:web:ad66c2b56e0a21264e7d78",
  measurementId: "G-B57VGQ6X6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const down_arrow = document.querySelector('.down_arrow')
const timeline = gsap.timeline({ repeat: -1, duration: 1 })

timeline.to(down_arrow, {
  alpha: 0,
  delay: 1,
  y: 10,

}).to(down_arrow, {
  alpha: 1,

  y: 0
})

var program_body = document.querySelector('.program_body')

console.log(program_body.getBoundingClientRect())

//Countdown codes begin here...
const days_container = document.querySelector('.days .figures')
const hours_container = document.querySelector('.hours .figures')
const mins_container = document.querySelector('.mins .figures')
const secs_container = document.querySelector('.secs .figures')
const program_info = document.querySelectorAll('.program_info')
const mobile_view = window.matchMedia('(max-width:500px)')
const interval = 1000;

if (mobile_view.matches) {
  program_info.forEach(items => {
    const program_info_new_text = items.textContent.replace('<br>', '')
    items.textContent = program_info_new_text
  })

}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "11/3/",
    birthday = dayMonth + yyyy;

    console.log(birthday)

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    // Turn on to allow reset
    // birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
       distance = countDown - now;

      days_container.innerText = Math.floor(distance / (day)),
      hours_container.innerText = Math.floor((distance % (day)) / (hour)),
      mins_container.innerText = Math.floor((distance % (hour)) / (minute)),
      secs_container.innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {

        clearInterval(x);

        days_container.innerText = '00',
        hours_container.innerText ='00',
        mins_container.innerText = '00',
        secs_container.innerText = '00';
      }
      //seconds
    }, 0)
}());