// Form handling logic
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(name)) {
        alert('Invalid name. Please enter a valid name (letters and spaces only, 2-50 characters).');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email. Please enter a valid email address.');
        return false;
    }
    return true;
}

function validateMessage(message) {
    if (message.length < 10 || message.length > 500) {
        alert('Invalid message. Please enter a message between 10 and 500 characters.');
        return false;
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
        return;
    }

    const payload = { name, email, message };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to submit the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
    });
}