


document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for section effects
  const sections = document.querySelectorAll('section, #about, #skills, #project, #contact');
  
  // Hide sections initially (excluding the header)
  sections.forEach(section => {
      section.style.opacity = '0';
      section.style.visibility = 'hidden';
  });
  
  const observerOptions = {
      root: null, // observing relative to the viewport
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the section is visible
  };

  const observerCallback = function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('active')) {
              // Add a class to apply effects only once
              entry.target.classList.add('active');
              entry.target.style.opacity = '1';
              entry.target.style.visibility = 'visible';
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });

  // Ensure the header is always visible
  const header = document.querySelector('#header');
  if (header) {
      header.style.opacity = '1';
      header.style.visibility = 'visible';
  }

  // Function to handle navigation clicks
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
              // Temporarily disable the Intersection Observer
              observer.disconnect();

              // Scroll to the target section
              targetSection.scrollIntoView({ behavior: 'smooth' });

              // Ensure only the target section is animated
              sections.forEach(section => {
                  if (section !== targetSection) {
                      section.style.opacity = '0';
                      section.style.visibility = 'hidden';
                      section.classList.remove('active');
                  }
              });

              // Animate the target section if it hasn't been animated yet
              if (!targetSection.classList.contains('active')) {
                  targetSection.classList.add('active');
                  targetSection.style.opacity = '1';
                  targetSection.style.visibility = 'visible';
              }

              // Re-enable the Intersection Observer after a short delay
              setTimeout(() => {
                  sections.forEach(section => {
                      observer.observe(section);
                  });
              }, 500); // Adjust the delay as needed
          }
      });
  });

  // // Ensure the home section is animated on page load
  const homeSection = document.querySelector('section, #header');
  if (homeSection) {
      homeSection.style.opacity = '1';
      homeSection.style.visibility = 'visible';
      homeSection.classList.add('active');
      observer.unobserve(homeSection); // Stop observing once animated
  }
});



/* for the paragragh typing in about me*/
var typed = new Typed(".para1", {
  strings: ["🌟Work hard in silence, let success make the noise.🌟"],
  typeSpeed: 20,
  loop: false,
  showCursor: false,
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ7-_J2ULnQZPHL19Na0a3aNUqo8-IIjSPGzeu_JIdArrWqpSCcxduewLebOUAOP9K/exec '
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()


    // Show the alert message immediately
    msg.innerHTML = "Message sent successfully!";
    

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML=""
            form.reset();
        },10)
  

      })
      .catch(error => console.error('Error!', error.message))
  })
