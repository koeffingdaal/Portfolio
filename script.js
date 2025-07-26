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

// Certification Modal
const certButtons = document.querySelectorAll('.cert-info .btn');
const modal = document.createElement('div');
modal.className = 'cert-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <img src="" alt="Full Certification" id="modal-cert">
    </div>
`;
document.body.appendChild(modal);

certButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const certImg = btn.closest('.certification').querySelector('img').src;
        document.getElementById('modal-cert').src = certImg;
        modal.style.display = 'block';
    });
});

modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show More functionality
document.querySelector('.show-more-btn').addEventListener('click', function() {
    // This would normally load more certifications via AJAX
    alert('Loading more certifications...');
    // In a real implementation, you would fetch and append more certification cards
});

// Pagination functionality
document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.page-btn.active').classList.remove('active');
        this.classList.add('active');
        // This would normally load the selected page of certifications
    });
});

document.querySelector('.next-btn').addEventListener('click', function() {
    const activePage = document.querySelector('.page-btn.active');
    const nextPage = activePage.nextElementSibling;
    
    if(nextPage && !nextPage.classList.contains('dots')) {
        activePage.classList.remove('active');
        nextPage.classList.add('active');
    }
});

