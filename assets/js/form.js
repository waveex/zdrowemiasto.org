const formName = document.querySelector("#name").value;
const topic = document.querySelector("#topic").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;
const submit = document.querySelector("#submit").value;
const form = document.querySelector("#form").value;





function submitForm(e) {
    e.preventDefault();
    saveContactInfo(formName, topic, email, message);
    form.reset();
    sendEmail(formName, topic, email, message);

}


function sendEmail(formName, topic, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'chomickid@gmail.com', // email adres
        Password: "", // app paswword
        To: 'chomickid@gmail.com',
        From: 'chomickid@gmail.com',
        Subject: `${topic}`,
        Body: `Imię: ${formName} <br/> Email: ${email} <br/> Wiadomość:${message}`,

    }).then((message) => alert("Wiadomość wysłana poprawnie"))
}