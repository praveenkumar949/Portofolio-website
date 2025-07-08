
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const modal = document.getElementById('projectModal');
    const modalContent = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project');
    const contactForm = document.getElementById('contactForm');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');

    // Mobile Navigation
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active section in nav - Improved Version
function highlightNav() {
    const scrollPosition = window.scrollY + 200; // Adjusted offset for better detection
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Run on scroll and page load
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// Smooth scrolling with proper offset
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
                behavior: 'smooth'
            });
            
            // Update active class immediately
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
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
    strings: ["I’m Patakokila Praveen Kumar, a passionate Machine Learning and AI enthusiast pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University, India. My skills span machine learning, deep learning, NLP, computer vision, DevOps, and full-stack web development, with hands-on experience in modern tools and technologies. As a Machine Learning Engineer intern at Acadomer, I worked on practical ML solutions and real-world projects. I’ve published research on POS tagging and spell-checking at the Hinweis RTET Conference (Scopus and Crossref indexed), reflecting my commitment to advancing NLP. I’m actively preparing for opportunities in ML, AI, DevOps, and full-stack development."],
    typeSpeed: 5,
    loop: false,
    showCursor: false,
});
    // Portfolio filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (item.getAttribute('data-type') === 'certificate') {
                // Always show certificates
                item.style.display = 'block';
            } else {
                // Filter projects
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});


const projectsData = [
  {
    id: 1,
    title: "Heart Disease Prediction Using Machine Learning Models",
    description: "A machine learning project that predicts heart disease risk using health metrics to aid early diagnosis and treatment decisions. It analyzes patient data and builds predictive models to deliver accurate, data-driven insights for healthcare professionals.",
    technologies: ["Python (Scikit-learn)", "Pandas", "Matplotlib"],
    features: [
      "Upload and analyze patient health data",
      "Predict heart disease risk using trained models",
      "Display results with accuracy metrics and graphs"
    ],
    demoLink: "#heart-disease-demo",
    codeLink: "#heart-disease-code",
    category: "web",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFjeeHtx2thbw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712137752403?e=2147483647&v=beta&t=PFONuf1OgY5kBlWIfm_O0AWNwhazt_HoSelj-NTnxCQ"
  },
  {
    id: 2,
    title: "Image Classification using Convolutional Neural Networks (CNN)",
    description: "A deep learning project that classifies images into multiple categories using CNNs, enabling automated recognition across diverse objects. It leverages data augmentation and performance metrics to optimize model accuracy and reliability.",
    technologies: ["TensorFlow/Keras", "OpenCV", "Matplotlib"],
    features: [
      "Multi-class image classification",
      "Data augmentation for improved robustness",
      "Visualization of predictions and performance metrics"
    ],
    demoLink: "#cnn-demo",
    codeLink: "#cnn-code",
    category: "app",
    img: "https://www.clearpeaks.com/wp-content/uploads/2019/05/Image-classification-1200-630.jpg"
  },
  {
    id: 3,
    title: "Enhanced Part-of-Speech Tagging and Spellchecking with Hybrid Model",
    description: "A hybrid NLP project combining probabilistic models and BiLSTM networks to enhance POS tagging and spellchecking, tailored for low-resource languages like Telugu. It improves linguistic accuracy by correcting spelling errors and assigning precise POS tags.",
    technologies: ["Python (TensorFlow/Keras)", "NLTK", "Pandas"],
    features: [
      "POS tagging using BiLSTM",
      "Context-aware spellchecking",
      "Evaluation with precision/recall metrics"
    ],
    demoLink: "#nlp-demo",
    codeLink: "#nlp-code",
    category: "design",
    img: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/10/shutterstock_1348992518.jpg"
  },
  {
    id: 4,
    title: "Yoga Pose Prediction",
    description: "A machine learning project that predicts yoga poses from images using algorithms like Decision Tree, Random Forest, KNN, and CNN. It compares multiple models to determine the most effective approach for pose classification.",
    technologies: ["Python (TensorFlow/Keras)", "Scikit-learn", "OpenCV"],
    features: [
      "Classifies images into yoga poses",
      "Compares performance across ML models",
      "Visualizes results with graphs"
    ],
    demoLink: "#yoga-demo",
    codeLink: "#yoga-code",
    category: "web",
    img: "https://nepalyogahome.com/wp-content/uploads/2023/10/practicing-yoga-asanas-1080x675.jpg"
  },
  {
    id: 5,
    title: "Recognizing and Digitizing Handwritten Text in Historical Documents",
    description: "A deep learning project focused on recognizing and digitizing handwritten text from historical documents using CRNN and TrOCR. It preserves archival data by transforming scanned manuscripts into editable, searchable digital text.",
    technologies: ["PyTorch", "TrOCR", "OpenCV"],
    features: [
      "Text extraction from handwritten documents",
      "Conversion to machine-readable text",
      "Supports multilingual/historical scripts"
    ],
    demoLink: "#handwriting-demo",
    codeLink: "#handwriting-code",
    category: "app",
    img: "https://andersonarchival.com/wp-content/uploads/2018/08/oldlettercaligraphysfw-e1637180155695-1030x687.jpg"
  },
  {
    id: 6,
    title: "Disease Prediction Web App",
    description: "A web application that predicts possible diseases based on user-entered symptoms using ML models. It provides an interactive interface for symptom input and displays predictive results for better health awareness.",
    technologies: ["Python (Flask/Django)", "Scikit-learn", "HTML/CSS/JS"],
    features: [
      "User-friendly symptom input form",
      "Disease prediction with probability scores",
      "Visualization of health insights"
    ],
    demoLink: "#disease-demo",
    codeLink: "#disease-code",
    category: "design",
    img: "https://www.medius.co.jp/assets/2024/08/shutterstock_2425703833.jpg"
  }
];




// Define project-specific data
const projectDetails = {
  "Heart Disease Prediction Using machine learning models": {
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: ["Model Comparison", "Data Visualization", "Web Deployment"],
    liveDemo: "#",
    sourceCode: "https://github.com/praveenkumar949/heart_disease_prediction_ml"
  },
  "Image Classification using Convolutional Neural Networks (CNN)": {
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    features: ["Data Augmentation", "High Accuracy", "Analytics"],
    liveDemo: "#",
    sourceCode: "https://github.com/praveenkumar949/Image_classification_using_cnn"
  },
  "Enhanced Part-of-Speech Tagging and Spellchecking with Hybrid Model": {
    technologies: ["Python", "BiLSTM", "CRF", "NLP Libraries"],
    features: ["POS Tagging", "Spell Checking", "Telugu Language Support"],
    liveDemo: "#",
    sourceCode: "https://github.com/praveenkumar949/POS-Tagging-and-Spellchecking-with-Hybrid-Model_nlp"
  },
  "Yoga Pose Prediction": {
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    features: ["Pose Detection", "CNN Models", "Image Classification"],
    liveDemo: "#",
    sourceCode: "https://github.com/praveenkumar949/yoga_pose_prediction_ml"
  },
  "Recognizing and Digitizing Handwritten Text in Historical Documents": {
    technologies: ["Python", "CRNN", "TrOCR", "Computer Vision"],
    features: ["OCR", "Handwriting Recognition", "Text Retrieval"],
    liveDemo: "#",
    sourceCode: "#"
  },
  "Disease predeiction web app": {
    technologies: ["Python", "Flask", "Machine Learning", "HTML/CSS"],
    features: ["Symptom Input", "Prediction", "Healthcare Insights"],
    liveDemo: "#",
    sourceCode: "#"
  }
};

// // Modal functionality
// viewProjectButtons.forEach(button => {
//   button.addEventListener('click', function (e) {
//     e.preventDefault();

//     const projectItem = this.closest('.portfolio-item');
//     const projectImg = projectItem.querySelector('img').src;
//     const projectTitle = projectItem.querySelector('h3').textContent;
//     const projectDesc = projectItem.querySelector('p').textContent;

//     const details = projectDetails[projectTitle] || {
//       technologies: ["N/A"],
//       features: ["N/A"],
//       liveDemo: "#",
//       sourceCode: "#"
//     };

//     const techList = details.technologies.map(t => `<li>${t}</li>`).join('');
//     const featureList = details.features.map(f => `<li>${f}</li>`).join('');

//     modalContent.innerHTML = `
//       <div class="modal-project">
//           <div class="modal-img">
//               <img src="${projectImg}" alt="${projectTitle}">
//           </div>
//           <div class="modal-text">
//               <h2>${projectTitle}</h2>
//               <p>${projectDesc}</p>
//               <div class="project-details">
//                   <div>
//                       <h4>Technologies</h4>
//                       <ul>${techList}</ul>
//                   </div>
//                   <div>
//                       <h4>Features</h4>
//                       <ul>${featureList}</ul>
//                   </div>
//               </div>
//               <div class="modal-buttons">
//                   <a href="${details.liveDemo}" target="_blank" class="btn btn-primary">Live Demo</a>
//                   <a href="${details.sourceCode}" target="_blank" class="btn btn-secondary">Source Code</a>
//               </div>
//           </div>
//       </div>
//     `;

//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//   });
// });

//  closeModal.addEventListener('click', function() {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     });

//     window.addEventListener('click', function(e) {
//         if (e.target === modal) {
//             modal.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         }
//     });

// Define certificate-specific data
const certificateDetails = {
  "Cloud Computing": {
    technologies: ["Cloud Architecture", "IaaS", "PaaS", "SaaS", "Virtualization"],
    features: ["NPTEL Certified", "Top Scorer", "Project-based Learning"],
    liveDemo: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S167020187204431877"
  },
  "Complete Interview Preparation - Self-Paced (C++)": {
    technologies: ["C++", "Data Structures", "Algorithms", "OOP"],
    features: ["Self-paced Course", "Practice Problems", "Mock Interviews"],
    liveDemo: "https://drive.google.com/file/d/1YVJMDJNnAbXvZpl9bBXO8aa_cZ2fzYHm/view?usp=drive_link"
  },
  "Dynamic Programming, Greedy Algorithms": {
    technologies: ["Dynamic Programming", "Greedy Techniques", "Problem Solving"],
    features: ["Coursera Certified", "Real-world Problems", "Assignments"],
    liveDemo: "https://drive.google.com/file/d/1yBTQYy5GzAol8iT6f9-FThJM6Jd9ZYr2/view?usp=drive_link"
  },
  "Generative AI with Large Language Models": {
    technologies: ["AI", "LLMs", "Prompt Engineering", "Transformer Models"],
    features: ["Coursera Certified", "Hands-on Labs", "Industry Examples"],
    liveDemo: "https://drive.google.com/file/d/1mbV8tNWaKnUJ-ApoPe_Di6KgHcQBxa9B/view?usp=drive_link"
  },
  "Programming in C++: A Hands-on Introduction": {
    technologies: ["C++ Basics", "Control Structures", "Functions", "OOP"],
    features: ["Coursera Certified", "Hands-on Coding", "Quizzes"],
    liveDemo: "https://drive.google.com/file/d/1M3lq0Cd-WV9Ju7XObj2rPbR1MtyepP6v/view?usp=drive_link"
  },
  "Become a Data Scientist": {
    technologies: ["Python", "Machine Learning", "Data Visualization", "SQL"],
    features: ["LinkedIn Learning", "Practical Projects", "Career Guidance"],
    liveDemo: "https://drive.google.com/file/d/1kOIkBqZ6mvuhrRtaylbTXzNCxHMXG0Rj/view?usp=drive_link"
  }
};



const allViewButtons = document.querySelectorAll('.view-project');

allViewButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const item = this.closest('.portfolio-item');
    const imgSrc = item.querySelector('img').src;
    const title = item.querySelector('h3').textContent;
    const desc = item.querySelector('p').textContent;

    let details = projectDetails[title] || certificateDetails[title] || {
      technologies: ["N/A"],
      features: ["N/A"],
      liveDemo: "#",
      sourceCode: "#"
    };

    const techList = details.technologies.map(t => `<li>${t}</li>`).join('');
    const featureList = details.features.map(f => `<li>${f}</li>`).join('');
    const isCertificate = !!certificateDetails[title];

    modalContent.innerHTML = `
      <div class="modal-project">
          <span id="closeModal" class="close-modal">&times;</span>
          <div class="modal-img">
              <img src="${imgSrc}" alt="${title}">
          </div>
          <div class="modal-text">
              <h2>${title}</h2>
              <p>${desc}</p>
              <div class="project-details">
                  <div>
                      <h4>${isCertificate ? 'Topics Covered' : 'Technologies'}</h4>
                      <ul>${techList}</ul>
                  </div>
                  <div>
                      <h4>${isCertificate ? 'Highlights' : 'Features'}</h4>
                      <ul>${featureList}</ul>
                  </div>
              </div>
              <div class="modal-buttons">
                  <a href="${details.liveDemo}" target="_blank" class="btn btn-primary btn-small">
                      ${isCertificate ? 'View Certificate' : 'Live Demo'}
                  </a>
                  ${isCertificate ? '' : `
                    <a href="${details.sourceCode}" target="_blank" class="btn btn-secondary btn-small">
                      Source Code
                    </a>
                  `}
              </div>
          </div>
      </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // IMPORTANT: attach close logic AFTER modal content is injected
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
      closeModal.addEventListener('click', closeModalWindow);
    }
  });
});

function closeModalWindow() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModalWindow();
  }
});




// // Modal functionality for certificates
// const viewCertificateButtons = document.querySelectorAll('.view-project');

// viewCertificateButtons.forEach(button => {
//   button.addEventListener('click', function (e) {
//     e.preventDefault();

//     const certItem = this.closest('.portfolio-item');
//     const certImg = certItem.querySelector('img').src;
//     const certTitle = certItem.querySelector('h3').textContent;
//     const certDesc = certItem.querySelector('p').textContent;

//     const details = certificateDetails[certTitle] || {
//       technologies: ["N/A"],
//       features: ["N/A"],
//       liveDemo: "#"
//     };

//     const techList = details.technologies.map(t => `<li>${t}</li>`).join('');
//     const featureList = details.features.map(f => `<li>${f}</li>`).join('');

//     modalContent.innerHTML = `
//       <div class="modal-project">
//           <div class="modal-img">
//               <img src="${certImg}" alt="${certTitle}">
//           </div>
//           <div class="modal-text">
//               <h2>${certTitle}</h2>
//               <p>${certDesc}</p>
//               <div class="project-details">
//                   <div>
//                       <h4>Topics Covered</h4>
//                       <ul>${techList}</ul>
//                   </div>
//                   <div>
//                       <h4>Highlights</h4>
//                       <ul>${featureList}</ul>
//                   </div>
//               </div>
//               <div class="modal-buttons">
//                   <a href="${details.liveDemo}" target="_blank" class="btn btn-primary btn-small">View Certificate</a>
//               </div>
//           </div>
//       </div>
//     `;

//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//   });
// });







    // // Modal functionality
    // viewProjectButtons.forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const projectItem = this.closest('.portfolio-item');
    //         const projectImg = projectItem.querySelector('img').src;
    //         const projectTitle = projectItem.querySelector('h3').textContent;
    //         const projectDesc = projectItem.querySelector('p').textContent;
            
    //         modalContent.innerHTML = `
    //             <div class="modal-project">
    //                 <div class="modal-img">
    //                     <img src="${projectImg}" alt="${projectTitle}">
    //                 </div>
    //                 <div class="modal-text">
    //                     <h2>${projectTitle}</h2>
    //                     <p>${projectDesc}</p>
    //                     <p>This project showcases my skills in modern web development.</p>
    //                     <div class="project-details">
    //                         <div>
    //                             <h4>Technologies</h4>
    //                             <ul>
    //                                 <li>React</li>
    //                                 <li>Node.js</li>
    //                                 <li>MongoDB</li>
    //                             </ul>
    //                         </div>
    //                         <div>
    //                             <h4>Features</h4>
    //                             <ul>
    //                                 <li>User Authentication</li>
    //                                 <li>Real-time Updates</li>
    //                                 <li>Responsive Design</li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     <div class="modal-buttons">
    //                         <a href="#" class="btn btn-primary">Live Demo</a>
    //                         <a href="#" class="btn btn-secondary">Source Code</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
            
    //         modal.style.display = 'block';
    //         document.body.style.overflow = 'hidden';
    //     });
    // });

    // closeModal.addEventListener('click', function() {
    //     modal.style.display = 'none';
    //     document.body.style.overflow = 'auto';
    // });

    // window.addEventListener('click', function(e) {
    //     if (e.target === modal) {
    //         modal.style.display = 'none';
    //         document.body.style.overflow = 'auto';
    //     }
    // });

    // // Form submission
    // contactForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const subject = document.getElementById('subject').value;
    //     const message = document.getElementById('message').value;
        
    //     // In a real application, you would send this data to a server
    //     console.log('Form submitted:', { name, email, subject, message });
        
    //     alert('Thank you for your message! I will get back to you soon.');
    //     contactForm.reset();
    // });

    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Animate progress bars when skills section comes into view
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillSection);
});




document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    // Apply saved theme on load
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }
    
    // Set initial icon
    updateThemeIcon();
    
    toggleButton.addEventListener("click", function() {
        document.documentElement.classList.toggle("light-theme");
        
        // Save theme preference
        const currentTheme = document.documentElement.classList.contains("light-theme") ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        
        // Update icon
        updateThemeIcon();
    });
    
    function updateThemeIcon() {
        if (document.documentElement.classList.contains("light-theme")) {
            themeIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'; // Moon icon for light theme
        } else {
            themeIcon.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>'; // Sun icon for dark theme
        }
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");
    const hiddenItems = document.querySelectorAll(".portfolio-item.hidden");

    viewMoreBtn.addEventListener("click", () => {
        hiddenItems.forEach(item => item.classList.remove("hidden"));
        viewMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline-block";
    });

    showLessBtn.addEventListener("click", () => {
        hiddenItems.forEach(item => item.classList.add("hidden"));
        viewMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "none";
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const viewMoreProjectsBtn = document.getElementById("viewMoreProjectsBtn");
    const showLessProjectsBtn = document.getElementById("showLessProjectsBtn");
    const hiddenProjects = document.querySelectorAll(".portfolio-item.hidden-on-load");

    viewMoreProjectsBtn.addEventListener("click", () => {
        hiddenProjects.forEach(item => item.classList.remove("hidden"));
        viewMoreProjectsBtn.classList.add("hidden");
        showLessProjectsBtn.classList.remove("hidden");
    });

    showLessProjectsBtn.addEventListener("click", () => {
        hiddenProjects.forEach(item => item.classList.add("hidden"));
        showLessProjectsBtn.classList.add("hidden");
        viewMoreProjectsBtn.classList.remove("hidden");

        // Optional: Scroll back to top of visible projects
        const portfolioSection = document.getElementById("portfolio");
        const firstVisibleItem = portfolioSection.querySelector(".portfolio-item:not(.hidden)");
        if (firstVisibleItem) {
            firstVisibleItem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});












document.addEventListener("DOMContentLoaded", () => {
  const viewMoreAchievementsBtn = document.getElementById("viewMoreAchievementsBtn");
  const showLessAchievementsBtn = document.getElementById("showLessAchievementsBtn");
  const hiddenAchievements = document.querySelectorAll(".achievement-item.hidden");

  viewMoreAchievementsBtn.addEventListener("click", () => {
    hiddenAchievements.forEach(item => {
      item.classList.remove("hidden");
    });
    viewMoreAchievementsBtn.style.display = "none";
    showLessAchievementsBtn.style.display = "inline-block";
  });

  showLessAchievementsBtn.addEventListener("click", () => {
    hiddenAchievements.forEach(item => {
      item.classList.add("hidden");
    });
    viewMoreAchievementsBtn.style.display = "inline-block";
    showLessAchievementsBtn.style.display = "none";

    // Optional smooth scroll back to Achievements
    document.querySelector("#achievements").scrollIntoView({
      behavior: "smooth"
    });
  });
});



// Dropdown toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      // Check if the click was outside both the toggle button and the dropdown
      if (
        !dropdown.contains(e.target) &&
        !dropdownToggle.contains(e.target)
      ) {
        dropdown.classList.remove("show");
      }
    });
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxeROPtbkQSXA6zzIMYt4qoj9VtUiWt3FesbfbAAu8KE9l_8DsG7za-NZBpS9NZT1Nz/exec'; // <-- replace with yours!

  // Create message element if not present
  let msg = document.getElementById('msg');
  if (!msg) {
    msg = document.createElement('span');
    msg.id = 'msg';
    msg.style.display = 'block';
    msg.style.marginTop = '15px';
    msg.style.fontWeight = 'bold';
    contactForm.appendChild(msg);
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show immediate feedback
    msg.innerHTML = 'Sending message...';
    msg.style.color = '#007BFF';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(contactForm)
    })
    .then(response => {
      msg.innerHTML = 'Message sent successfully!';
      msg.style.color = 'green';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 3000);
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = 'Something went wrong. Please try again.';
      msg.style.color = 'red';
    });
  });
});





// Modal functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Get all modal elements and buttons
        const modals = document.querySelectorAll('.modal');
        const buttons = document.querySelectorAll('.view-details-btn');
        const closeButtons = document.querySelectorAll('.close-modal');
        
        // Open modal when button is clicked
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                document.getElementById(modalId).style.display = 'block';
            });
        });
        
        // Close modal when X is clicked
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });




    


      const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.2 }
  );

  // List all your section IDs + navbar
  const elementsToAnimate = [
    '#navbar',
    '#home',
    '#about',
    '#skills',
    '#portfolio',
    '#experience',
    '#education',
    '#certificates',
    '#achievements',
    '#hobbies',
    '#languages',
    '#contact'
  ];

  elementsToAnimate.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) observer.observe(el);
  });

// const sections = ['achievements', 'hobbies', 'languages','contact','certificates','education','experience','portfolio','skills','navbar','home','about'];
const sections = [
  'navbar',
  'home',
  'about',
  'skills',
  'portfolio',
  'experience',
  'education',
  'certificates',
  'achievements',
  'hobbies',
  'languages',
  'contact'
];
sections.forEach((id) => {
  const section = document.getElementById(id);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('active');
      }
    });
  });
  observer.observe(section);
});

