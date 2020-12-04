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
  facebook: {
      url: "https://www.facebook.com/jlam609/",
    },
  linkedIn: {
      url: "https://www.linkedin.com/in/jason-lam-290a0026/",
    },
  github: {
      url: "http://github.com/jlam609",
    },
  instagram: {
    url: "https://www.instagram.com/jayandsylv/"
  }
};

const resume = {
  education: [
    {
      school: "St. John's University",
      degree: "Doctorate of Pharmacy PharmD",
      graduated: "May 2015",
      description: "Graduated Dean's List",
      image:
        "https://www.stjohns.edu/sites/default/files/styles/640w/public/alumni-feature-sju-brand_0.jpg?itok=MuFpd-EF",
    },
    {
      school: "FullStack Academy",
      degree: "Software Engineering Certification",
      graduated: "October 2020",
      description: "Completed PartTime Immersive Flex",
      image:
        "data:image/png;base64,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",
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
        image: "https://tl.vhv.rs/dpng/s/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
      },
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
      },
      {
        name: "Java",
        image: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
      },
      {
        name: "SQL",
        image: "https://banner2.cleanpng.com/20190610/gou/kisspng-microsoft-azure-sql-database-microsoft-azure-sql-d-postani-spletni-razvijalec-izberite-svojo-uno-5cfe7bd5b6e377.6992930615601817177491.jpg"
      },
      {
        name: "HTML",
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
      },
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
      },
      {
        name: "SASS",
        image: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
      },
      {
        name: "Node.JS",
        image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
      },
      {
        name: "Typescript",
        image: "https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"
      },
    ],
    frameworks: [
      {
        name: "React",
        image: "https://cdn.worldvectorlogo.com/logos/react.svg"
      },
      {
        name: "Angular",
        image: "https://angular.io/assets/images/logos/angular/angular.png"
      },
      {
        name: "Express",
        image: "data:image/png;base64,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"
      },
      {
        name: "Spring",
        image: "https://pbs.twimg.com/profile_images/1235870003292856320/iRG4_ojf_400x400.png"
      },
      {
        name: "Jest",
        image: "https://jestjs.io/img/opengraph.png"
      },
      {
        name: "Jasmine",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png"
      },
      {
        name: "Webpack",
        image: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
      },
    ],
    Technologies: [
      {
        name: "Socket.io",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
      },
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/logomark-orange@2x.png"
      },
      {
        name: "Passport",
        image: "https://res.cloudinary.com/crunchbase-production/image/upload/jz3fuatfamorqvhewbu1"
      },
      {
        name: "AWS",
        image: "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/r4wsu8rl4jvpjydbhooy"
      },
      {
        name: "Heroku",
        image: "https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg"
      },
      {
        name: "Docker",
        image: "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ"
      },
      {
        name: "Sequelize",
        image: "https://i.ytimg.com/vi/8W_dd3uA1Iw/maxresdefault.jpg"
      },
      {
        name: "Stripe",
        image: "https://i.pinimg.com/originals/8f/c6/a2/8fc6a20dd42803d99e5f782d03916991.gif"
      },
      {
        name: "Redux",
        image: "https://img2.pngio.com/redux-react-npm-state-management-png-573x572px-redux-area-redux-png-290_290.jpg"
      },
      {
        name: "Redis",
        image: "https://cdn.auth0.com/blog/logos/redis-icon-logo.png"
      },
      {
        name: "Postman",
        image: "https://i.imgur.com/6xIZEjq.jpg"
      },
    ],
    Databases: [
      {
        name: "MongoDB",
        image: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
      },
      {
        name: "MYSQL",
        image: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg"
      },
      {
        name: "Postgres",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
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
        image: "https://i.ibb.co/B4grMjC/Screen-Shot-2020-12-04-at-1-13-36-PM.png",
        github: "https://github.com/SkrapLitter/capstone",
        url: "https://skraplitter.herokuapp.com",
      },
      {
        title: "PharmBot",
        role: "Lead-Developer",
        category:
          "Created a product recommendation system for patients built using React, Wit.ai, Messenger API, Send API, and drug database Apis",
        image: "https://i.ibb.co/7JCjdvs/Screen-Shot-2020-12-04-at-1-15-28-PM.png",
        github: "https://github.com/jlam609/pharmbot",
        url: "https://pharmbotrx.herokuapp.com",
      },
      {
        title: "Tack's-Store",
        role: "Lead-Developer",
        category:
          "Built a fantasy gaming store using React, Postgres, Sequelize, Redux, Stripe, etc",
        image: "https://i.ibb.co/svKfhZp/Tack-s-Store.png",
        github: "https://github.com/ghostbusters-graceshoppers/graceshoppers",
        url: "https://graceshoppers-tacks-store.herokuapp.com",
      },
      {
        title: "Hogwarts-Clone",
        role: "Lead-Developer",
        category:
          "Hogwarts school clone created using React, Express, Sequelize, Postgres",
        image: "https://i.ibb.co/wWmXw7t/Screen-Shot-2020-12-04-at-1-14-53-PM.png",
        github: "https://github.com/jlam609/hogwarts-junior-project",
        url: "https://hogwartsdummy.herokuapp.com",
      },
    ],
  },
};

export { personalData, resume };
