const form= document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const comment= document.getElementById('comment');
const commentBtn=document.getElementById('comment-btn');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    let errors=[];
    if()
}
const form = document.getElementById('registration-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = [];

    if (fullName.value.trim() === "") {
        errors.push("Name is required");
    }

    if (email.value.trim() === "") {
        errors.push("Email is required");
    } else if (!validateEmail(email.value)) {
        errors.push("Invalid email format");
    }

    if (username.value.trim().length < 4) {
        errors.push("Username must be at least 4 characters");
    }

    if (password.value.trim().length < 6) {
        errors.push("Password must be at least 6 characters");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Registration Successful!");
        form.reset();
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

)