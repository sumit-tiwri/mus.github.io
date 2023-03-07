


const menu = documen.querySelector('.menu');
const menubtn = document.querySelector('.menu-btn');


menubtn.addEventListener('click', () =>{
    menu.classlist.toggle('menu-open');
});





const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter")
let bol = false;


const sectionoffset = stats.offsetTop + stats.offsetHeight;

window.addEventListener("scroll", ()=> {
     const pageOffset = window.innerHeight + pageYOffset
    if(pageOffset > sectionOffset && bol === false){
        counters.forEach((counter) => {
            function updatecount(){
                const target= +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                if(count < target){
                    counter.innertext= count + 1;

                    setTimeout(updatecount, speed)
                } else {
                    counter.innerText = target;
                }
              }

                updatecount();

                bol = true;
            });
        }
    });

