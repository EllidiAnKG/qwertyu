const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnStart = document.querySelector('.registration');
const close = document.querySelector('.icon-close');
const enter = document.querySelector('.btn-enter');

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active')
});

registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

btnStart.addEventListener('click', () => {
    wrapper.classList.add('btn-start')
});

close.addEventListener('click', () => {
    wrapper.classList.remove('btn-start')
});

function serializeForm(formNode) {
    const {
        elements
    } = formNode

    const data = new FormData()

    Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
            const {
                name,
                type
            } = element
            const value = type === 'checkbox' ? element.checked : element.value

            data.append(name, value)
        })

    return data
}

function serializeForm(formNode) {
    return new FormData(formNode)
}

function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Otpravka')
}
const applicanForm = document.querySelector('#register')
applicanForm.addEventListener('submit', handleFormSubmit)
console.log(Array.from(data.entries()))

