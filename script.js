// Tab functionality
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for(tablink of tabLinks) {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabContents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Mobile menu functionality
const sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}

// Contact form submission
const scriptURL = 'YOUR_GOOGLE_SHEET_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message sent successfully';
            setTimeout(function() {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});