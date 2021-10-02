const formName = document.querySelector("#name").value;
const topic = document.querySelector("#topic").value;
const email = document.querySelector("#email").value;
const text = document.querySelector("#text").value;
const submit = document.querySelector("#submit").value;
const form = document.querySelector("#form").value;
/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };



function submitForm(e) {
    e.preventDefault();
    saveContactInfo(formName, topic, email, text);
    form.reset();
    sendEmail(formName, topic, email, text);

}

function sendEmail(formName, topic, email, text) {
    Email.send({
        SecureToken : "d4f04cb0-c617-4b08-838e-8f75fe85ba57",
        To: 'chomickid@gmail.com',
        From: 'chomickid@gmail.com',
        Subject: `${topic}`,
        Body: `Imię: ${formName} <br/> Email: ${email} <br/> Wiadomość:${text}`,

    }).then(
        message=> alert("Wiadomość wysłana poprawnie")
        )
}