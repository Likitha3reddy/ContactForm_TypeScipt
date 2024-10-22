document.getElementById('myForm')?.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('mail') as HTMLInputElement).value;
    const phone = (document.getElementById('phno') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('msg') as HTMLTextAreaElement).value;

    // Create an object with the form data
    const formData = { name, email, phone, subject, message };

    console.log('Form Data:', formData);

    // Perform validation or API submission here
    // Example:
    if (validateForm(formData)) {
        try {
            const response = await fetch('https://6717983db910c6a6e02908c8.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data submitted successfully!');
            } else {
                alert('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting data.');
        }
    } else {
        alert('Please fill out the form correctly.');
    }
});

// Function to validate form data
function validateForm(data: { name: string; email: string; phone: string; subject: string; message: string }): boolean {
    let isValid = true;
    let errorMessage = '';

    // Validate Name: Only letters and spaces allowed
    if (!/^[a-zA-Z\s]+$/.test(data.name)) {
        errorMessage += 'Name should contain only letters and spaces.\n';
        isValid = false;
    }

    // Validate Email: Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
        errorMessage += 'Please enter a valid email address.\n';
        isValid = false;
    }

    // Validate Contact Number: Must be exactly 10 digits
    if (!/^\d{10}$/.test(data.phone)) {
        errorMessage += 'Contact Number should be exactly 10 digits.\n';
        isValid = false;
    }

    // Ensure subject and message are not empty
    if (!data.subject.trim()) {
        errorMessage += 'Subject is required.\n';
        isValid = false;
    }
    if (!data.message.trim()) {
        errorMessage += 'Message is required.\n';
        isValid = false;
    }

    // If invalid, show alert with error message
    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}



const button = document.getElementById('leavemsg') as HTMLButtonElement;
const myDiv = document.getElementById('Form-container') as HTMLDivElement;
const connect = document.getElementById('Connect') as HTMLButtonElement;
button.addEventListener('click', () => {
    // Toggle the display of the div
    myDiv.style.display="block";
    button.style.display="none";
    connect.style.display="none";
});