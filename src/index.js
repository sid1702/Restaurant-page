import menu from './menu';
import home from './home';
import contact from './contact';

const render=(()=>{
    function renderHeader() {
        const header=document.querySelector('#header');

        /*LOGO */
        const logoDiv=document.createElement('div');
        const logoImg=document.createElement('img');
        logoImg.setAttribute('id','logoImg');
        logoImg.setAttribute('src','images/logo1.jpg');
        logoImg.setAttribute('alt','logo');
        logoDiv.appendChild(logoImg);
        header.appendChild(logoDiv);

        /*navbar */
        const navBar=document.createElement('nav');
        navBar.setAttribute('id','navBar');
        const ul =document.createElement('ul');
        const navName=['HOME','MENU','CONTACT'];

        for(let i=0;i<=2;i+=1){
            const li=document.createElement('li');
            li.classList.add('navLink');
            li.textContent=navName[i];
            ul.appendChild(li);
        }

        ul.setAttribute('id', 'navBarUl');
        navBar.appendChild(ul);
        header.appendChild(navBar);

    }

    function navBarClicks(){
        const content=document.querySelector('#content');
        const liLinks=document.querySelectorAll('li');

        liLinks.forEach((button)=>{
            button.addEventListener('click',()=>{
                content.textContent="";
                if(button.textContent==='HOME'){
                    home.render();
                }
                else if(button.textContent==='MENU'){
                    menu.render();
                }
                else if(button.textContent==='CONTACT'){
                    contact.render();
                }
            });
        });
    }
    renderHeader();
    home.render();
    navBarClicks();
})();
