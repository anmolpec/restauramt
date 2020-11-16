let sidebar=function(){
    let sidebarContainer=document.createElement("div");
    
    let homeButton=document.createElement("div");
    let menuButton=document.createElement("div");
    let aboutButton=document.createElement("div");
    let contactButton=document.createElement("div");

    sidebarContainer.appendChild(homeButton);
    sidebarContainer.appendChild(menuButton);
    sidebarContainer.appendChild(aboutButton);
    sidebarContainer.appendChild(contactButton);

    homeButton.textContent="HOME";
    menuButton.textContent="MENU";
    aboutButton.textContent="ABOUT";
    contactButton.textContent="CONTACT";
 
    sidebarContainer.classList.add("sidebar");
    return sidebarContainer;
}

let sidebarContainer=sidebar();
export {sidebarContainer};

