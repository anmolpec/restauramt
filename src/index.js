import {homepageContainer} from "./homepage.js"
import {sidebarContainer} from "./sidebar.js"
import { aboutContainer } from "./about.js";
import {menuContainer} from "./menu.js";
import {contactContainer} from "./contact.js";

let container=document.querySelector("#content");
container.classList.add("content");

container.appendChild(homepageContainer);
container.appendChild(sidebarContainer);

homepageContainer.style.gridArea="main";
sidebarContainer.style.gridArea="sidebar";

let containerArr=[homepageContainer, menuContainer,aboutContainer,contactContainer];
containerArr.forEach((element,i) => {
    sidebarContainer.children[i].addEventListener("click", load.bind(element, container));   
});


function load(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    container.appendChild(this);
    container.appendChild(sidebarContainer)
    this.style.gridArea="main";
}

