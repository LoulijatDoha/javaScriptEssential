document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitBtn');

    function submitFeedback() {
        // Retrieve input values inside the function
        const username = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const email = document.getElementById('email').value.trim();
        const job = document.getElementById('job').value.trim();
        const designation = document.getElementById('designation').value.trim();
        const productType = document.getElementById('productType').value;
        const feedback = document.getElementById('feedbackText').value.trim();

        // Simple validation to prevent empty submissions
        if (!username || !age || !email || !job || !designation || !feedback) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        alert('Thank you for your valuable feedback!');

        // Populate user info in the display section
        document.getElementById('userName').textContent = username;
        document.getElementById('userAge').textContent = age;
        document.getElementById('userEmail').textContent = email;
        document.getElementById('userJob').textContent = job;
        document.getElementById('userDesignation').textContent = designation;
        document.getElementById('userProductChoice').textContent = productType;
        document.getElementById('userFeedback').textContent = feedback;

        // Show the user info section
        document.getElementById('userInfo').style.display = 'block';
    }

    // Attach event listener to the button
    if (submitButton) {
        submitButton.addEventListener('click', submitFeedback);
    }

    // Handle Enter key submission
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitFeedback();
        }
    });
});
