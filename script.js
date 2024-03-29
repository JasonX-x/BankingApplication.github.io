document.addEventListener('DOMContentLoaded', function() {
    const apiUrlBase = 'https://y0xzhp28cj.execute-api.us-east-2.amazonaws.com/test';

    // Fetch all user data
    const userDataDiv = document.getElementById('userData');
    if (userDataDiv) {
        fetch(`${apiUrlBase}/all_data`, {
            headers: {
                // Uncomment and replace if you're using an API key
                // 'x-api-key': 'YOUR_API_KEY_HERE'
            }
        })
        .then(response => response.json())
        .then(data => {
            userDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    // Handle create account form submission
    const createAccountForm = document.getElementById('createAccountForm');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            fetch(`${apiUrlBase}/create_account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Uncomment and replace if you're using an API key
                    // 'x-api-key': 'YOUR_API_KEY_HERE'
                },
                body: JSON.stringify({ name, email })
            })
            .then(response => response.json())
            .then(data => {
                alert('Account created successfully!');
                console.log(data);
            })
            .catch(error => {
                console.error('Error creating account:', error);
            });
        });
    }

    // Add similar event listeners for 'depositForm' and 'withdrawForm' based on needs
});
