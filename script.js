document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        targetSection.classList.add('active');
    });
});