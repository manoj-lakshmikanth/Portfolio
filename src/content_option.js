import bgImage from './assets/images/bgImage.jpg';

const logotext = 'MANOJ';
const meta = {
  title: 'Manoj L',
  description:
    'I’m Manoj L, Full stack devloper,currently looking for opportunity',
};

const introdata = {
  title: 'I’m Manoj L',
  animated: {
    first: 'I love coding',
    second: 'I code cool websites',
    third: 'I develop web apps',
  },
  description:
    'A passionate Full Stack Web Developer with experience in building web applications with JavaScript| Reactjs| Nodejs| Express| MongoDB',
  your_img_url: bgImage,
};
// https://images.unsplash.com/photo-1647610229306-3906b8f72539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80
// https://images.unsplash.com/photo-1536840362362-9241939f8874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80

const dataabout = {
  title: 'A bit about myself',
  aboutme:
    'I am a curious personality with a lot of interest in tech!! My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.',
};
const worktimeline = [
  {
    jobtitle: 'Systems Engineer',
    where: 'Infosys Ltd.',
    date: 'Feb 2022 - Mar 2023',
  },
  {
    jobtitle: 'Design Engineer',
    where: 'Palis Eco Vehicles Pvt. Ltd.',
    date: 'Jun 2020 - Feb 2022',
  },
];

const skills = [
  {
    name: 'Javascript',
    value: 70,
  },
  {
    name: 'React',
    value: 70,
  },
  {
    name: 'Redux',
    value: 65,
  },
  {
    name: 'HTML',
    value: 65,
  },
  {
    name: 'CSS',
    value: 65,
  },
  {
    name: 'Node',
    value: 60,
  },
  {
    name: 'MongoDB',
    value: 60,
  },
  {
    name: 'MySQL',
    value: 50,
  },
];

const education = [
  {
    school: 'JSS Academy of Technical Education, Bangalore',
    marks: 'CGPA - 7.88',
    degree: 'Bachelor of Engineering (ME)',
  },
];

const dataportfolio = [
  {
    img: 'https://picsum.photos/400/200/?grayscale',
    title: 'React Dashboard Website',
    description:
      'Contains details of energy data and charts integrated from Highcharts. Designed graph icons using Canva. The website features a light and dark theme.',
    link: 'https://datavincidashboard.netlify.app/',
    github: 'https://github.com/manoj-lakshmikanth/DataVinci',
  },
  {
    img: 'https://picsum.photos/250/200/?grayscale',
    title: 'MERN Stack NCR Form',
    description:
      'Consists of User and Approver’s portal with necessary details to report the error in the workpiece to approver. Achieved the objective to complete the project in couple of days.',
    link: 'https://orcancrform.netlify.app/',
    github: 'https://github.com/manoj-lakshmikanth/Orca-frontend',
   
  },
  {
    img: 'https://picsum.photos/400/300/?grayscale',
    title: 'MERN Stack Trending Git Repositories',
    description:
      'Shows trending Git repositories with basic details like language, stars and forks. Fetches data from GitHub using cheerio and can be filtered according to date and language. Responsive and featured with light and dark theme.',
    link: 'https://trendinggitrepositories.netlify.app/',
    github: 'https://github.com/manoj-lakshmikanth/Trending-git-repo-frontend',
  },
  {
    img: 'https://picsum.photos/300/400/?grayscale',
    title: 'React Payment Page Clone',
    description:
      'Dynamic React page, which takes plan subscription as input and gives total price. Purpose was to clone the entire page with exact styling and components.To check the original image copy and paste this link in your browser (https://shrtco.de/5tLW1p)',
    link: 'https://paymentpageclone.netlify.app/',
    github: 'https://github.com/manoj-lakshmikanth/Edyoda',
  },
  {
    img: 'https://picsum.photos/400/200/?grayscale',
    title: 'React URL Shortener',
    description:
      'Shortens lengthy URLs and copies to the clipboard, integrated using shrtco.de',
    link: 'https://manoj-lakshmikanth.github.io/URL-Shortener/',
    github: 'https://github.com/manoj-lakshmikanth/URL-Shortener',
  },
  {
    img: 'https://picsum.photos/300/250/?grayscale',
    title: 'Resposive Weather App',
    description:
      'Provides the current weather information of cities. Responsive and built with HTML & CSS, the website draws data from openweathermap.org.',
    link: 'https://manoj-lakshmikanth.github.io/weather-app/',
    github: 'https://github.com/manoj-lakshmikanth/weather-app',
  },
  {
    img: 'https://picsum.photos/400/350/?grayscale',
    title: 'MERN Stack E-commerce Website',
    description:
      'Created a fully functional E-commerce website with signup, sign in, add to cart, shipping and cart features built using MERN Stack.',
    link: '#',
    github: 'https://github.com/manoj-lakshmikanth/',
  },
  {
    img: 'https://picsum.photos/250/400/?grayscale',
    title: 'MERN Stack CRUD Application',
    description:
      'Involves CRUD operations both in frontend and backend. Even this uses MERN Stack.It adds user and gets user details from backend and has login feature in it.',
    link: '#',
    github: 'https://github.com/manoj-lakshmikanth/',
  },
  // {
  //   img: 'https://picsum.photos/400/300/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/700/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },

  // {
  //   img: 'https://picsum.photos/400/600/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/300/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/550/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
  // {
  //   img: 'https://picsum.photos/400/700/?grayscale',
  //   description:
  //     'The wisdom of life consists in the elimination of non-essentials.',
  //   link: '#',
  // },
];

const contactConfig = {
  YOUR_EMAIL: 'manoj.lakshmikanth@gmail.com',
  YOUR_PHONE: '8722050767',
  description:
    "Open for opportunities! Let's connect and build something awesome together",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: 'service_azzm14j',
  YOUR_TEMPLATE_ID: 'template_hg46fih',
  YOUR_PUBLIC_KEY: 'QxG_3vt39LrneV9X9',
};

const socialprofils = {
  github: 'https://github.com/manoj-lakshmikanth',
  instagram: 'https://www.instagram.com/manoj_lakshmikanth/',
  linkedin: 'https://www.linkedin.com/in/manoj-lakshmikanth',
};

const certificate = [
  {
    name: 'Javascript',
    source: 'HackerRank',
    basic:
      'https://drive.google.com/file/d/1eQZ-wOX3BVKX_wzEU9vTzio16LYuNR2c/view',
    intermediate:
      'https://drive.google.com/file/d/1-MFrrcwjBnt1zZc0gb01uga3x3QkcLDf/view',
  },
];
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  education,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  certificate,
};
