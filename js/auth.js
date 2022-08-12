const auth = () => {
    const buttonAuth = document.querySelector(".button-auth");
    const buttonOut = document.querySelector(".button-out");
    const userName = document.querySelector(".user-name")
    const modalAuth = document.querySelector(".modal-auth");
    const closeAuth = document.querySelector(".close-auth");
    const logInForm = document.getElementById("logInForm");
    const inputLogin = document.getElementById("login");
    const inputPassword = document.getElementById("password");
    const modalFooter = logInForm.querySelector('.modal-footer')
    const modalInvalid = document.querySelector('.modal-invalid')
    const buttonCart = document.querySelector('.button-cart')

    const login = (user) => {
        buttonAuth.style.display = "none"

        buttonOut.style.display = "flex"
        userName.style.display = "flex"
        buttonCart.style.display = "flex"

        userName.textContent = user.login
        modalAuth.style.display = "none"

    }

    const logout = () => {
        userName.textContent = '';
        buttonAuth.style.display = "flex"
        userName.style.display = "none"
        buttonOut.style.display = "none"
        buttonCart.style.display = "none"

        localStorage.removeItem('user')
    }



    buttonAuth.addEventListener("click", () => {
        modalAuth.style.display = "flex"
    });
    closeAuth.addEventListener("click", () => {
        modalAuth.style.display = "none"
    });
    buttonOut.addEventListener("click", () => {
        logout()
    })
    logInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (inputLogin.value == '' || inputPassword.value == '') {
            modalFooter.style.justifyContent = 'space-between'
            modalInvalid.style.display = 'flex'
        } else {
            const user = {
                login: inputLogin.value,
                password: inputPassword.value,

            }
            localStorage.setItem('user', JSON.stringify(user))
            login(user)
            modalFooter.style.justifyContent = 'flex-end'
            modalInvalid.style.display = 'none'
        }
    });

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }


}

auth()