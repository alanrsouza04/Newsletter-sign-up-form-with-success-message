const mainContainer = document.getElementById('main-container');
const secondContainer = document.getElementById('second-container');
const form = document.getElementById('form');
const email = document.getElementById('email');
const sub = document.getElementById('sub');
const dismiss = document.getElementById("dismiss")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    check();


});

function check() {
    const emailValue = email.value;

    if (emailValue === "") {
        setError(email);
      } else if (!CheckEmail(emailValue)) {
        setError(email);
      } else {
        setSuccess();
      }
}

function setError(input) {
    const formControl = input.parentElement;
    
    formControl.className = "form-control error";

    setTimeout(() => {
        formControl.classList.remove("error")
    }, 3000);
    return;
    
  }
  

function CheckEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
function setSuccess() {;
    mainContainer.className = "main-container dsc"
    secondContainer.className = "second-container act";
}
dismiss.addEventListener('click', reset);

function reset() {
    secondContainer.className = 'second-container dsc';
    mainContainer.className = 'main-container act';
    email.form.reset();
}