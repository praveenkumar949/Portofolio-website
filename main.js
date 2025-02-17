document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for section effects
    const sections = document.querySelectorAll('section, #header, #about, #skills, #project, #contact');
    const observerOptions = {
      root: null, // observing relative to the viewport
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the section is visible
    };
  
    const observerCallback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class to apply effects
          entry.target.classList.add('active');
        } else {
          // Remove the class if not in view
          entry.target.classList.remove('active');
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });


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
    strings: ["I am Patakokila Praveen Kumar, a Machine Learning and AI enthusiast pursuing B.Tech in Computer Science and Engineering at Lovely Professional University, India. With expertise in deep learning, NLP, and computer vision, I specialize in model evaluation, optimization, and data preprocessing using TensorFlow, Keras, and Scikit-learn. I have interned as a Machine Learning Engineer at Acadomer, gaining hands-on experience in ML algorithms and real-world applications. My research on POS tagging and spell-checking, published in the Hinweis RTET Conference (Scopus and Crossref indexed), showcases my contributions to NLP. I am also skilled in web development (HTML, CSS, JavaScript) and actively preparing for placements, seeking opportunities in ML, AI, and DevOps."],
    typeSpeed: 20,
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
// Open the "Education" tab by default when the page loads
window.onload = function () {
    document.getElementsByClassName("tab-links")[0].classList.add("active-link");
    document.getElementById("education").classList.add("active-tab");
};

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
