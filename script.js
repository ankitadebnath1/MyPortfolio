document.addEventListener("DOMContentLoaded", function () {
    try {
        var typed = new Typed(".text", {
            strings: ["Front-end Developer", "Web Developer", "UI/UX Designer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const dropdownHeader = document.querySelector('.dropdown-header');

    dropdownHeader.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});



document.addEventListener("DOMContentLoaded", function(event) {
    animateSkill("communication", 95);
    animateSkill("creativity", 85);
    animateSkill("teamwork", 80);
    animateSkill("time-management", 90);
});

function animateSkill(skillClass, percentage) {
    let path = document.querySelector('.path-' + skillClass);
    let skillLevel = document.querySelector('.' + skillClass + ' .skill-level');
    let offset = 251 - (percentage / 100) * 251;
    path.style.strokeDashoffset = offset;
    skillLevel.textContent = percentage + "%";
    skillLevel.style.opacity = 1;
}
