// filtre des projets
function tabsFilters (){
    const tabs = document.querySelectorAll(".menu-filters a"); /* cible le portfolio */
    const projets = document.querySelectorAll(".menu .card"); /* cible la carte */

    /* remet la classe active à zéro */
    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove("active");
        })
    }

    // ligne 40 à 58 une solution de chatGPT qui fonctionne enfin après 1h de bugs
    /* liste toutes les cards */
    const showProjets = (elem) => {
        console.log("Filter:", elem);
    
        projets.forEach(projet => {
            let filter = projet.getAttribute("data-category");
            let projetParentNode = projet.parentNode;
    
            console.log("Project Filter:", filter);
    
            if (elem === "all" || filter === elem) {
                console.log("Show Project:", filter);
                projetParentNode.style.display = "block";
            } else {
                console.log("Hide Project:", filter);
                projetParentNode.style.display = "none";
            }

            // code plus propre
            //filter != elem ? projetParentNode.style.display = "none": projetParentNode.style.display = "block";  // ne marche pas pour l'onglet tous les projets. 
        });
    };

    tabs.forEach(elem =>{
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action  il empêche sont fonctionnement natif de remonter en haut dans la page*/
            let filter = elem.getAttribute("data-filter");
            //console.log(filter);
            showProjets(filter)
            resetActiveLinks(); /* mise en fonction de la remise à zéro de la classe active */
            elem.classList.add("active");
        });
    })
}
tabsFilters ()

// ********************** le + 

function showProjectDetails(){
    const links = document.querySelectorAll(".card__link"); 
    const modals = document.querySelectorAll(".modal"); 
    const btns = document.querySelectorAll(".modal__close"); 
    

    // retirer les modales lors du click d'une autre card
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove("show");
        });
    }

    links.forEach(elem =>{
        elem.addEventListener("click", (event) => {
            event.preventDefault(); /* ne suit pas l'action  il empêche sont fonctionnement natif de remonter en haut dans la page*/
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
        });
    })

    // fermer la modale  avec le bouton
    btns.forEach(btn =>{
        btn.addEventListener("click", (event) => {
            hideModals();
        });
    })
}

showProjectDetails();
