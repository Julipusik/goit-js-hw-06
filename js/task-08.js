const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert("Fill the empty field");
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
    }
    formEl.reset();
}
