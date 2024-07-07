// JavaScript for interactive features

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (replace with actual submission logic)
    alert('Form submitted successfully!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

// Fetch data from mock API and display dynamically
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            var dataList = document.getElementById('dataList');
            data.forEach(item => {
                var li = document.createElement('li');
                li.textContent = item.title;
                dataList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
