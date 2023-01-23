/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rafael Ribeiro",
  title: "Hello there, I'm Rafael",
  subTitle: 
    "A passionate Software Engineer 🚀 having an experience in solving problems and building applications with Node.js / Python / Go / Java. I turn ☕ Coffee into Code."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1UgtXKJTh41twLwrWjsC0vspHb74mEHcB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rafaelmgr12",
  linkedin: "https://www.linkedin.com/in/rafael-mgr/",
  gmail: "ribeirorafaelmatheus@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@rgribeiro",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer who loves to solve problems through technology.",
  skills: [
    
      "👷‍♂️ Software Engineering - I love to design, build and deploy applications with the best technologies available."
    ,
    
      "🤖 Experience with Machine Learning projects, data analysis and visualization, and Deep Learning."
    ,
    
      "🔄 Full Cycle Software Development - I have a strong background in software development, and deploy/integration of third party services such as Firebase/ AWS /Heroku."
    ,
    "🏃🏼 I am always eager for new challenges to solve."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // langs
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of São Paulo",
      logo: require("./assets/images/usp.png"),
      subHeader: "Master of Science in Cosmology",
      duration: "September 2019 - July 2022(incomplete)",
      desc: "Participated in the research of Photometric Redshift using Machine Learning.",
      descBullets: [
        "Participated in the BINGO project",
        "Teacher Assistant in Mathematical physics II",
        "Data Analysis for the Dark Energy Survey and VIPERS"
      ]
    },
    {
      schoolName: "Federal Fluminense University",
      logo: require("./assets/images/uff-logo-5.png"),
      subHeader: "Bachelor in Computational Physics",
      duration: "March 2013 - December 2018",
      desc: "Participated in the research Higgs Boson.",
      descBullets: ["Teacher Assistant in Calculus I and Physics II"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst and Software Developer", //Insert the role you have played in this company
      company: "Tendências - Consultoria Integrada",
      companylogo: require("./assets/images/1615072367219.jpeg"),
      date: "September 2021 – Present",
      desc: "Data analysis, Machine Learning and Software Development.",
      descBullets: [
        "Bulding Machine Learning models for regression, time-series, and classification",
        "Develop Combinatorial optimization algorithms",
        "Resolution of data science problems using Python",
        "Software Development to create solutions based on data"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Tensorflow 2 for Deep Learning",
      subtitle:
        "In this Specialization, learners have acquired and honed practical skills in the popular deep learning framework TensorFlow to develop deep learning models for a range of applications such as image classification, language translation and text and image generation.",
      image: require("./assets/images/imperial_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/JUVVH9QG26VE"
        }
      ]
    },
    {
      title: "Mathematics for Machine Learning",
      subtitle:
        "A sequence of 3 courses on the prerequisite mathematics for applications in data science and machine learning.",
      image: require("./assets/images/imperial_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SYTLRYME4GZQ"
        }
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle:
        "Learned: how to build and train neural networks using TensorFlow, how to improve network performance using convolutions as you train it to identify real-world images, how to teach machines to understand, analyze, and respond to human speech with natural language processing systems.",
      image: require("./assets/images/deeplearning_ai_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z8PU6AT9Z657"
        }
      ]
    },

    {
      title: "Machine Learning on Google Cloud Platform",
      subtitle:
        "In this five-course online specialization, Participants learn to build machine learning models distributed with scaling in TensorFlow, do the horizontally scaling the training of these models and offering high performance forecasts",
      image: require("./assets/images/google_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2CXZRBURD3EC"
        }
      ]
    },
    // {
    //   title: "Big Data on Google Cloud Platform",
    //   subtitle:
    //     "Nesta especialização on-line intensiva de cinco semanas, os participantes terão uma introdução prática sobre como projetar e criar sistemas de processamento de dados no Google Cloud Platform. Por meio de uma combinação de apresentações, demonstrações e laboratórios práticos, os participantes aprenderão a projetar sistemas de processamento de dados, criar canais completos e análises de dados e desenvolver soluções de aprendizado de máquina. Neste curso, abordamos dados estruturados, não estruturados e de streaming",
    //   image: require("./assets/images/google_logo.png"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/MLWMETXKJ8X8"
    //     }
    //   ]
    //},
    {
      title: "Bayesian Methods for Machine Learning",
      subtitle:
        "People apply Bayesian methods in many areas: from game development to drug discovery. They give superpowers to many machine learning algorithms: handling missing data, extracting much more information from small datasets. Bayesian methods also allow us to estimate uncertainty in predictions, which is a desirable feature for fields like medicine. ",
      image: require("./assets/images/hse_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/PD7P4XHQRMNW"
        }
      ]
    },
    {
      title: "Java Programming and Software Engineering Fundamentals",
      subtitle:
        "Take your first step towards a career in software development with this introduction to Java—one of the most in-demand programming languages and the foundation of the Android operating system. Designed for beginners, this Specialization will teach you core programming concepts and equip you to write programs to solve complex problems",
      image: require("./assets/images/Duke_University_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/F3SMVJN9HLWR"
        }
      ]
    },
    {
      title: "Software Engineering",
      subtitle:
        "This specialization is intented for programmers who want to deepen their understanding of the methodologies and techniques involved in software development. Basic object-oriented programming (OOP) concepts are required to attempt the series of courses. It is recommended to take the courses in the order they are listed, as they progressively develop teachniques and concepts about software engineering, it is not a hard requirement.",
      image: require("./assets/images/hongkong_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/972X3MRBFQJ4"
        }
      ]
    },
    {
      title: "Applied Data Science with Python",
      subtitle:
        "The 5 courses in this University of Michigan specialization introduce learners to data science through the python programming language. This skills-based specialization is intended for learners who have a basic python or programming background, and want to apply statistical, machine learning, information visualization, text analysis, and social network analysis techniques through popular python toolkits such as pandas, matplotlib, scikit-learn, nltk, and networkx to gain insight into their data.",
      image: require("./assets/images/michigan_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2MVRE4ZBZF78"
        }
      ]
    },
    // {
    //   title: "PostgreSQL for Everybody",
    //   subtitle:
    //     "Across these four courses, you’ll learn how to use the PostgreSQL database and explore topics ranging from database design to database architecture and deployment. You’ll also compare and contrast SQL and NoSQL approaches to database design. The skills in this course will be useful to learners doing data mining or application development.",
    //   image: require("./assets/images/michigan_logo.png"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/YL3P4PWPLBT9"
    //     }
    //   ]
    // },
    {
      title: "Programming with Google Go",
      subtitle:
        "This specialization introduces the Go programming language from Google and provides learners with an overview of Go's special features. Upon completing the three-course sequence, learners will have gained the knowledge and skills needed to create concise, efficient, and clean applications using Go.",
      image: require("./assets/images/university-of-california-irvine-uci-vector-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/TZ8M2ZQ6HS66"
        }
      ]
    },
    {
      title: "Node.js Ignite",
      subtitle:
        "Build scalable and simple architectures for the web using a flexible and popular language.",
      image: require("./assets/images/28929274.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://app.rocketseat.com.br/api/certificates/pdf/ef1bad6b-937a-49f9-a6f3-421a4fda7d99"
        }
      ]
    },
    {
      title: "AWS Machine Learning Foundations",
      subtitle:
        "Learn the fundamentals of advanced machine learning areas such as computer vision, reinforcement learning, and generative AI. Get hands-on with machine learning using AWS AI Devices (i.e. AWS DeepRacer and AWS DeepComposer).Learn how to prepare, build, train, and deploy high-quality machine learning (ML) models quickly with Amazon SageMaker and learn object-oriented programming best practices.",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://app.rocketseat.com.br/api/certificates/pdf/ef1bad6b-937a-49f9-a6f3-421a4fda7d99"
        }
      ]
    },
    {
      title: "Backend with Javascript",
      subtitle:
        "JavaScript is now one of the most popular programming languages ​​on the web and a few years ago it was no longer used only in browsers, in order to be able to assign behaviors to pages. Now it also has space in the development of back-end applications, mobile and web apps, in addition to games. This training is suitable for those who are just starting in programming and chose JavaScript as the first language to delve into and the backend as a branch of web development to work on. Let's start by covering the fundamental parts of any programming language (data types, functions, arrays and objects) and how to work with them with JavaScript.",
      image: require("./assets/images/alura.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/degree/certificate/928d70b4-dc47-49da-97b5-eb6af0df95ed"
        }
      ]
    },
    {
      title: "Go: Google's programming language",
      subtitle:
        "The Go language, also known as GoLang, is an open source language that was created by Google in 2007, and has since been used to build large-scale products and services. Currently, the language is used by several companies, such as Uber, Twitch, Medium and Mercado Livre. Go is a simple and productive language to use, focused on the development of applications that require high performance.",
      image: require("./assets/images/alura.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://cursos.alura.com.br/degree/certificate/d977171b-b19d-4f37-83c5-6b66148e3f68"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: 
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ,

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 21 96510-3237",
  email_address: "ribeirorafaelmatheus@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
