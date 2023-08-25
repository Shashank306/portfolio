const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransitions(){
    // Button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }

    // Section Active class
    allsections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

const scriptURL = 'https://script.google.com/macros/s/AKfycbzB0xBOkz18QrN9ip_iLly_8CvVOySLURP1q4fBg4DY3K7uiZSuwBr1Cx4RebTphMUv/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfuly👍"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

var typed = new typed(".text",{
    String:["Student", "Machine Learning Engineer", "Frontend Developer"],
    typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
});