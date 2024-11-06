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
    strings: ["Myself Patakokila Praveen Kumar I am 19 years old and I was born and brought up in Andhra Pradesh I have completed my metriculation from smt.Annapurna Vidya Nikentan, velivennu with an aggregate of 97%. and i have done my intermediate in Sasi junior college, velivennu with an aggregate of 94% and currently I am pursuing my bachelor degree(B.Tech) in computer science engineering from Lovely Professional University, Punjab. I have taken machine learning as speciliation. and I have worked in some machine learning projects.and I have done some certifications from coursera in Generative Artificial Intelligence(Gen Ai) and Data Analysis and Algorithms. My goal is to become a machine learning engineer where i can learn improve my skillsand increase my abilites."],
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
