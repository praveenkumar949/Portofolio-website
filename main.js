/* for the job role typing in home page*/
var typed = new Typed(".text", {
    strings: ["Web Developer", "Software Engineer", "Machine Learning Engineer."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: false,
});

/* for the paragragh typing in about me*/
var typed = new Typed(".para", {
    strings: ["Hello! I’m Patakokila Praveen Kumar, an aspiring Machine Learning Engineer from Andhra Pradesh. I completed my schooling at Smt. Annapurna Vidya Niketan, Velivennu, with a stellar 97% aggregate, and my intermediate education at Sasi Junior College, Velivennu, achieving a 94% score. Currently, I’m pursuing my Bachelor’s in Computer Science and Engineering at Lovely Professional University, Punjab, with a specialization in Machine Learning. My journey so far has been fueled by hands-on experience with multiple machine learning projects, where I’ve developed a deep interest in data-driven solutions and artificial intelligence. My ultimate goal is to become a Machine Learning Engineer, where I can continue to learn, sharpen my skills, and contribute to impactful projects."],
    typeSpeed: 10,
    loop: false,
    showCursor: false,
});



/*for tab-link */
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
             tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
             tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        
    }

/* for small screen menu bar */
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

/*contact details*/


const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ7-_J2ULnQZPHL19Na0a3aNUqo8-IIjSPGzeu_JIdArrWqpSCcxduewLebOUAOP9K/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
