// ======================================
// LOGIN VALIDATION
// ======================================

function validateLogin() {

    const email =
        document.getElementById("email");

    const password =
        document.getElementById("password");

    if (!email || !password) return false;

    if (email.value.trim() === "") {

        alert("Enter Email");

        return false;

    }

    if (password.value.trim() === "") {

        alert("Enter Password");

        return false;

    }

    window.location.href = "../index.html";

    return true;

}

// ======================================
// REGISTER VALIDATION
// ======================================

function validateRegister() {

    const name =
    document.getElementById("name").value.trim();

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    const message =
    document.getElementById("registerMessage");

    if(name === ""){

        message.style.color = "red";
        message.innerText =
        "❌ Name is required";

        return false;
    }

    if(password.length < 8){

        message.style.color = "red";
        message.innerText =
        "❌ Password must contain at least 8 characters";

        return false;
    }

    if(password !== confirmPassword){

        message.style.color = "red";
        message.innerText =
        "❌ Passwords do not match";

        return false;
    }

    message.innerText = "";

    return true;
}
