
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_GH3h1BqLPmXl2nQ6muiCp");
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_qx1a5rc";
  const templateID = "template_aoivcoo";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Twoja wiadomość zostala wysłana prawidłowo!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
  form.reset();
});