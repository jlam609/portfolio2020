const personalData = {
  name: "Jason Lam",
  image: "https://ca.slack-edge.com/T024FPYBQ-U011MAJS68P-9ad2f57881d0-512",
  bio:
    "My name is Jason Lam, FullStack Developer, Back-End Developer, Front-End Developer",
  contactmessage: "Get in touch with me for any inquiries",
  about:
    "Pills, pills, pills, everywhere. This is the gist of my life as a pharmacist of 6 years. As a legal drug dealer I have worked in a variety of settings including retail, managed care and clinical pharmacy. I grew interested in coding after watching coding videos and speaking to my friends and family in the field. This made me ultimately decide to join the Fullstack Academy bootcamp. Throughout the course I have grown to truly love the dynamic world of coding. I look forward to my journey down this road and hope I can combine my prior experience as a pharmacist into this new world.",
  email: "codeJlam@gmail.com",
  phone: "914-885-4041",
  address: {
    city: "New York",
    state: "NY",
  },
  website: "http://lam-portfolio.herokuapp.com/",
  resumedownload: "https://drive.google.com/drive/u/0/my-drive",
  social: [
    {
      name: "facebook",
      url: "https://www.facebook.com/jlam609/",
      className: "fa fa-facebook",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/jason-lam-290a0026/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/jlam609",
      className: "fa fa-github",
    },
  ],
};

const resume = {
  education: [
    {
      school: "St. John's University",
      degree: "Doctorate of Pharmacy PharmD",
      graduated: "May 2015",
      description: "Graduated Dean's List",
    },
    {
      school: "FullStack Academy",
      degree: "Software Engineering Certification",
      graduated: "October 2020",
      description: "Completed PartTime Immersive Flex",
    },
  ],
  work: [
    {
      company: "PAGNY: PHYSICIAN AFFILIATE GROUP OF NEW YORK",
      title: "Pharmacist",
      years: "October 2017 - Present",
      location: "New York, NY",
      description: [
        "Ensure quality of care through collaboration with clinical team members to achieve quality of care and meet desired outcomes",
        "Reduce errors by analyzing medication orders for quality and efficacy before administering to patients",
      ],
    },
    {
      company: "CVS HEALTH",
      title: "Pharmacy Manager",
      years: "May 2016 - October 2017",
      location: "New York, NY",
      description: [
        "Improved pharmacy success by leading a “challenged” pharmacy to become a top ranking pharmacy of the district",
        "Managed all pharmacy-related matters including scheduling, budgeting, pharmacy operations as well as performance review of employees",
      ],
    },
    {
      company: "CVS HEALTH",
      title: "Staff Pharmacist",
      years: "May 2015 - May 2016",
      location: "New York, NY",
      description: [
        "Complied and managed all pharmacy related directives to comply with state guidelines",
        "Met and exceeded all necessary store metrics",
      ],
    },
  ],
  skills: {
    languages: [
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Java",
      },
      {
        name: "SQL",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "SASS",
      },
      {
        name: "Node.JS",
      },
      {
        name: "Typescript",
      },
    ],
    frameworks: [
      {
        name: "React",
      },
      {
        name: "Angular",
      },
      {
        name: "Express",
      },
      {
        name: "Spring",
      },
      {
        name: "Jest",
      },
      {
        name: "Jasmine",
      },
      {
        name: "Webpack",
      },
    ],
    Technologies: [
      {
        name: "Socket.io",
      },
      {
        name: "Git",
      },
      {
        name: "Passport",
      },
      {
        name: "AWS",
      },
      {
        name: "Heroku",
      },
      {
        name: "Docker",
      },
      {
        name: "Sequelize",
      },
      {
        name: "Stripe",
      },
      {
        name: "Redux",
      },
      {
        name: "Redis",
      },
      {
        name: "Postman",
      },
    ],
    Databases: [
      {
        name: "MongoDB",
      },
      {
        name: "MYSQL",
      },
      {
        name: "Postgres",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "SKRAP",
        role: "Co-Founder",
        category:
          "Freelance market application for litter jobs created using React, GoogleMaps, Sockets.io, Postgres, Typescript, AWS, Stripe, etc.",
        image: "whatsapp-mern.jpeg",
        github: "https://github.com/SkrapLitter/capstone",
        url: "https://skraplitter.herokuapp.com",
      },
      {
        title: "PharmBot",
        role: "Lead-Developer",
        category:
          "Created a product recommendation system for patients built using React, Wit.ai, Messenger API, Send API, and drug database Apis",
        image: "tiktok-mern.jpeg",
        github: "https://github.com/jlam609/pharmbot",
        url: "https://pharmbotrx.herokuapp.com",
      },
      {
        title: "Tack's-Store",
        role: "Lead-Developer",
        category:
          "Built a fantasy gaming store using React, Postgres, Sequelize, Redux, Stripe, etc",
        image: "facebook-clone.png",
        github: "https://github.com/ghostbusters-graceshoppers/graceshoppers",
        url: "https://graceshoppers-tacks-store.herokuapp.com",
      },
      {
        title: "Hogwarts Dummy Clone",
        category:
          "Hogwarts school clone created using React, Express, Sequelize, Postgres",
        image: "airbnb-clone.jpeg",
        github: "https://github.com/jlam609/hogwarts-junior-project",
        url: "https://hogwartsdummy.herokuapp.com",
      },
    ],
  },
};

export { personalData, resume };
