window.addEventListener("DOMContentLoaded", () => {

    // Variables

    const homeNav = document.getElementById("home-nav")
    const home = document.getElementById("home-sec")

    const aboutNav = document.getElementById("about-nav")
    const about = document.getElementById("about-me-sec")

    const workNav = document.getElementById("work-nav")
    const work = document.getElementById("work-sec")

    const projectsNav = document.getElementById("projects-nav")
    const projects = document.getElementById("projects-sec")

    home.classList.add('display');

    homeNav.addEventListener("click", () => {
        event.preventDefault();

        if(!(home.classList.contains('display'))){

            if(about.classList.contains('display')) {
                about.classList.remove('display')
                aboutNav.classList.remove('active')
            }

            if(work.classList.contains('display')) {
                work.classList.remove('display')
                workNav.classList.remove('active')
            }

            if(projects.classList.contains('display')) {
                projects.classList.remove('display')
                projectsNav.classList.remove('active')
            }

            home.classList.add('display')
            homeNav.classList.add('active');
        }
    })

    aboutNav.addEventListener("click", ()=> {
        event.preventDefault();

        if(!(about.classList.contains('display'))){

            if(home.classList.contains('display')) {
                home.classList.remove('display')
                homeNav.classList.remove('active')
            }

            if(work.classList.contains('display')) {
                work.classList.remove('display')
                workNav.classList.remove('active')
            }

            if(projects.classList.contains('display')) {
                projects.classList.remove('display')
                projectsNav.classList.remove('active')
            }

            about.classList.add('display')
            aboutNav.classList.add('active');
        }
        
    });

    workNav.addEventListener(("click"), ()=> {
        event.preventDefault();

        if(!(work.classList.contains('display'))){

            if(home.classList.contains('display')) {
                home.classList.remove('display')
                homeNav.classList.remove('active')
            }

            if(about.classList.contains('display')) {
                about.classList.remove('display')
                aboutNav.classList.remove('active')
            }

            if(projects.classList.contains('display')) {
                projects.classList.remove('display')
                projectsNav.classList.remove('active')
            }

            work.classList.add('display')
            workNav.classList.add('active');
        }
    })

    projectsNav.addEventListener("click", ()=> {
        event.preventDefault();

        if(!(projects.classList.contains('display'))){

            if(home.classList.contains('display')) {
                home.classList.remove('display')
                homeNav.classList.remove('active')
            }

            if(work.classList.contains('display')) {
                work.classList.remove('display')
                workNav.classList.remove('active')
            }

            if(about.classList.contains('display')) {
                about.classList.remove('display')
                aboutNav.classList.remove('active')
            }

            projects.classList.add('display')
            projectsNav.classList.add('active');
        }
    })
});