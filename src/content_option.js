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
    'A passionate Full Stack Web Developer having an experience of building web applications with JavaScript| Reactjs| Nodejs| Express| MongoDB',
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
    title: 'React URL Shortener',
    description:
      'It shortens the lengthy URL from an API which is integrated.It also copies to the clipboard and once it is copied the color of the button changes. It fetches data from shrtco API.',
    link: 'https://manoj-lakshmikanth.github.io/URL-Shortener/',
    github: 'https://github.com/manoj-lakshmikanth/URL-Shortener',
  },
  {
    img: 'https://picsum.photos/300/250/?grayscale',
    title: 'Resposive Weather App',
    description:
      'It tells the current weather condition of any city around the world. It is responsive and was built with HTML/CSS. It fetches data from openweathermap.org.',
    link: 'https://manoj-lakshmikanth.github.io/weather-app/',
    github: 'https://github.com/manoj-lakshmikanth/weather-app',
  },
  {
    img: 'https://picsum.photos/400/350/?grayscale',
    title: 'MERN Stack E-commerce Website',
    description:
      'This is a basic fully functional E-commerce website. It has signup, sign in, add to cart, shipping and cart features. It was developed using MERN Stack tech stack.',
    link: '#',
    github: 'https://github.com/manoj-lakshmikanth/',
  },
  {
    img: 'https://picsum.photos/250/400/?grayscale',
    title: 'MERN Stack CRUD Application',
    description:
      'It involves CRUD operations both in frontend and backend. Even this uses MERN Stack.It adds user and gets user details from backend and has login feature in it.',
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
