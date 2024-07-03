document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
    setTimeout(() => {
        document.getElementById('responseMessage').textContent = 'Thank You For Contacting Me, ' + name + '! I will Get Back To You Soon.';
        document.getElementById('contactForm').reset();
    }, 500);
});