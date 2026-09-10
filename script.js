/* =====================================================
   INCYCOS
   PROFESSIONAL WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", function () {

    const preloader =
        document.getElementById("preloader");

    setTimeout(function () {

        preloader.classList.add("hide");

    }, 600);

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("menu-open");

});



/* Close mobile menu when normal nav link clicked */

document.querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("menu-open");

        });

    });



/* =====================================================
   SERVICES DROPDOWN MOBILE
===================================================== */

const dropButton =
    document.querySelector(".drop-button");

const navDropdown =
    document.querySelector(".nav-dropdown");


dropButton.addEventListener("click", function () {

    navDropdown.classList.toggle("open");

});



/* =====================================================
   THEME SWITCHER
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("inc ycos-theme"
        .replace(" ", ""));


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☀";

} else {

    themeToggle.textContent = "☾";

}



themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");


    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        localStorage.setItem(
            "inc ycos-theme".replace(" ", ""),
            "light"
        );

        themeToggle.textContent = "☀";

    } else {

        localStorage.setItem(
            "inc ycos-theme".replace(" ", ""),
            "dark"
        );

        themeToggle.textContent = "☾";

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document.querySelectorAll(".reveal")
    .forEach(function (element) {

        revealObserver.observe(element);

    });



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(
                        function (link) {

                            link.classList.remove(
                                "active"
                            );

                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});



/* =====================================================
   SERVICE → CONTACT FORM
===================================================== */

const serviceLinks =
    document.querySelectorAll(
        "[data-service]"
    );


const serviceSelect =
    document.getElementById(
        "serviceSelect"
    );


serviceLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            const selectedService =
                link.getAttribute(
                    "data-service"
                );


            setTimeout(function () {

                serviceSelect.value =
                    selectedService;

            }, 300);

        }
    );

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const company =
            document.getElementById(
                "company"
            ).value.trim();


        const service =
            document.getElementById(
                "serviceSelect"
            ).value;


        const budget =
            document.getElementById(
                "budget"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value.trim();



        /* Basic validation */

        if (!name || !email || !service || !message) {

            showFormMessage(
                "Please fill in all required fields.",
                "error"
            );

            return;

        }



        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }



        /*
        =================================================
        IMPORTANT

        Replace this section with your Google Apps
        Script / backend URL after creating it.

        Example:

        const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/XXXXXXXX/exec";

        =================================================
        */


        const GOOGLE_SCRIPT_URL =
            "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";



        /* If backend isn't connected */

        if (
            GOOGLE_SCRIPT_URL ===
            "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
        ) {

            showFormMessage(
                "Form is working, but the Google Sheets backend has not been connected yet.",
                "error"
            );

            console.log({
                name,
                email,
                phone,
                company,
                service,
                budget,
                message
            });

            return;

        }



        /* Show loading */

        showFormMessage(
            "Sending your enquiry...",
            ""
        );



        /* Prepare form data */

        const formData =
            new FormData();


        formData.append(
            "name",
            name
        );

        formData.append(
            "email",
            email
        );

        formData.append(
            "phone",
            phone
        );

        formData.append(
            "company",
            company
        );

        formData.append(
            "service",
            service
        );

        formData.append(
            "budget",
            budget
        );

        formData.append(
            "message",
            message
        );

        formData.append(
            "source",
            "INCYCOS Website"
        );



        /* Send to backend */

        fetch(
            GOOGLE_SCRIPT_URL,
            {
                method: "POST",
                body: formData
            }
        )

        .then(function (response) {

            return response.text();

        })

        .then(function () {

            showFormMessage(
                "✓ Enquiry submitted successfully. INCYCOS will contact you soon.",
                "success"
            );


            contactForm.reset();

        })

        .catch(function (error) {

            console.error(error);

            showFormMessage(
                "Something went wrong. Please try again.",
                "error"
            );

        });

    }
);



/* =====================================================
   FORM MESSAGE FUNCTION
===================================================== */

function showFormMessage(
    message,
    type
) {

    formStatus.textContent =
        message;


    formStatus.className =
        "form-status";


    if (type) {

        formStatus.classList.add(
            type
        );

    }

}



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



/* =====================================================
   CLOSE DROPDOWN WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            !navDropdown.contains(event.target)
        ) {

            navDropdown.classList.remove(
                "open"
            );

        }

    }
);



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            navbar.classList.remove(
                "menu-open"
            );

            navDropdown.classList.remove(
                "open"
            );

        }

    }
);