

const validateName = () => {
    const nameNode = document.getElementById('name');
    const exp = /\w{2,10}/i;
    if (!exp.test(nameNode.value)) {
        nameNode.classList.add('is-invalid');
    } else {
        nameNode.classList.remove('is-invalid');
    }
}
const validatePhone = () => {
    const phoneNode = document.getElementById('phone');
    const exp = /\d{3}-\d{3}-\d{3}/;
    if (!exp.test(phoneNode.value)) {
        phoneNode.classList.add('is-invalid');
    } else {
        phoneNode.classList.remove('is-invalid');
    }
}
const validateEmail = () => {
    const emailNode = document.getElementById('email');
    const exp = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-]+)\.(\w{2,5})$/;
    if (!exp.test(emailNode.value.toLowerCase())) {
        emailNode.classList.add('is-invalid');
    } else {
        emailNode.classList.remove('is-invalid');
    }
}
const validateZip = () => {
    const zipNode = document.getElementById('zip');
    const exp = /\d{2}-\d{3}/;
    if (!exp.test(zipNode.value)) {
        zipNode.classList.add('is-invalid');
    } else {
        zipNode.classList.remove('is-invalid');
    }
}

document.getElementById('name').addEventListener('blur',validateName)
document.getElementById('phone').addEventListener('blur',validatePhone)
document.getElementById('email').addEventListener('blur',validateEmail)
document.getElementById('zip').addEventListener('blur',validateZip)