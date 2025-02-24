document.addEventListener("DOMContentLoaded", function () {
    // Enforce sign-in
    document.querySelectorAll(".protected").forEach(element => {
        element.addEventListener("click", function (event) {
            if (!localStorage.getItem("loggedIn")) {
                event.preventDefault();
                alert("Please sign in first.");
                localStorage.setItem("returnUrl", window.location.href);
                window.location.href = "signin.html";
            }
        });
    });

    // Logout function
    window.logout = function () {
        localStorage.removeItem("loggedIn");
        alert("You have been logged out.");
        window.location.href = "signin.html";
    };

    // Video autoplay on scroll
    function playVideoOnScroll() {
        let video = document.getElementById("jobNewsVideo");
        if (video && video.getBoundingClientRect().top >= 0 && video.getBoundingClientRect().bottom <= window.innerHeight) {
            video.play().catch(err => console.log("Autoplay prevented:", err));
        } else {
            video.pause();
        }
    }

    document.addEventListener("scroll", playVideoOnScroll);
    playVideoOnScroll();
});
