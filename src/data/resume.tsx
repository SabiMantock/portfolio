import {Icons} from '@/components/icons';
import {HomeIcon, NotebookIcon} from 'lucide-react';

export const DATA = {
  name: 'Sabi Mantock',
  initials: 'SM',
  url: 'https://sabimantock.vercel.app/',
  location: 'Wolverhampton, UK',
  locationLink: 'https://www.google.com/maps/place/Wolverhampton',
  description:
    'A frontend and mobile developer with over 3 years of experience in baseline technologies such as HTML, CSS, JavaScript and comprehensive frameworks like React, React-Native, and Node.js. ',
  summary:
    'I have over two years of experience as a frontend and mobile developer, specializing in React, React Native, and Node.js. Throughout my career, I’ve worked on projects ranging from small web apps to large enterprise systems, focusing on user-centered design and secure development. I’m passionate about learning new technologies, solving complex problems, and building scalable applications.',
  avatarUrl: '/profile_pic.jpg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'React Native',
    'TailwindCSS',
    'GIT',
    'Firebase',
    'Redux',
    'MongoDB',
    'Leaflet/OSM',
    'Postgres',
    'Docker',
    'Azure',
  ],
  navbar: [
    {href: '/', icon: HomeIcon, label: 'Home'},
    // {href: '/blog', icon: NotebookIcon, label: 'Blog'},
  ],
  contact: {
    email: 'sabimantock@gmail.com',
    tel: '+447565688908',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://www.github.com/SabiMantock',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sabi-mantock/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://twitter.com/IamSabiMantock',
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: 'Youtube',
      //   url: 'https://dub.sh/dillion-youtube',
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: 'Send Email',
        url: 'mailto:sabimantock@gmail.com',
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Adaptive Computer Solutions',
      href: 'https://www.acsghana.com/',
      badges: [],
      location: 'Remote',
      title: 'Operational Support Engineer',
      logoUrl: '/acs.png',
      start: 'Sep 2023',
      end: 'Nov 2024',
      description:
        'At Adaptive Computer Solutions, I provided technical support for internal systems, ensuring operational continuity while contributing to front-end maintenance. My role involved collaborating with cross-functional teams to troubleshoot issues, enhance workflows, and improve user experiences. Additionally, I led initiatives to identify and implement automation opportunities to improve efficiency.',
    },
    {
      company: 'Black Labs',
      badges: [],
      href: 'https://blacklabsinc.com/',
      location: 'Remote',
      title: 'Frontend Developer',
      logoUrl: '/bl.png',
      start: 'Sep 2021',
      end: 'May 2023',
      description:
        'Black Labs was one of my first experiences building production web, mobile, and server applications. I worked on designing and developing three cross-platform mobile clients that interfaced via a Node.js server. The project, led by Cargo Deliveries, aimed to create a hub that efficiently matched delivery demand with available couriers. My role spanned frontend and server-side development, along with contributing to the system’s functional and business requirements.',
    },
    {
      company: 'Ent Transport',
      href: '#',
      badges: [],
      location: 'Tema, Ghana',
      title: 'Operations Officer',
      logoUrl: 'Ent',
      start: 'Dec 2017',
      end: 'June 2020',
      description:
        'led fuel-saving tech deployments, digitized dispatch processes, and implemented a cost-efficient fleet maintenance strategy.',
    },
    // {
    //   company: 'Splunk',
    //   href: 'https://splunk.com',
    //   badges: [],
    //   location: 'San Jose, CA',
    //   title: 'Software Engineer',
    //   logoUrl: '/splunk.svg',
    //   start: 'January 2019',
    //   end: 'April 2019',
    //   description:
    //     'Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.',
    // },
    // {
    //   company: 'Lime',
    //   href: 'https://li.me/',
    //   badges: [],
    //   location: 'San Francisco, CA',
    //   title: 'Software Engineer',
    //   logoUrl: '/lime.svg',
    //   start: 'January 2018',
    //   end: 'April 2018',
    //   description:
    //     'Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.',
    // },
    // {
    //   company: 'Mitre Media',
    //   href: 'https://mitremedia.com/',
    //   badges: [],
    //   location: 'Toronto, ON',
    //   title: 'Software Engineer',
    //   logoUrl: '/mitremedia.png',
    //   start: 'May 2017',
    //   end: 'August 2017',
    //   description:
    //     'Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener',
    // },
  ],
  education: [
    {
      school: 'Microverse',
      href: 'https://www.microverse.org/',
      degree: 'Full-Stack Web Development',
      logoUrl: '/ml.png',
      start: '2022',
      end: '2023',
    },
    {
      school: 'Ghana Technology University College',
      href: 'https://site.gctu.edu.gh/',
      degree: 'Diploma in Information Technology',
      logoUrl: '/gtuc.png',
      start: '2015',
      end: '2017',
    },
    // {
    //   school: 'Wilfrid Laurier University',
    //   href: 'https://wlu.ca',
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: '/laurier.png',
    //   start: '2016',
    //   end: '2021',
    // },
    // {
    //   school: 'International Baccalaureate',
    //   href: 'https://ibo.org',
    //   degree: 'IB Diploma',
    //   logoUrl: '/ib.png',
    //   start: '2012',
    //   end: '2016',
    // },
  ],
  projects: [
    {
      title: 'Cargo - Fast, Easy Deliveries',
      href: 'https://youtu.be/X-K0BuuEqf4?si=SVWC7MyC48wBkp_A',
      // dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'I worked on Cargo Deliveries, a platform that matched delivery demand with available couriers. I designed and developed three cross-platform mobile clients and contributed to both frontend and server-side development, as well as the system’s functional and business requirements.',
      technologies: [
        'React Native',
        'Typescript',
        'React',
        'Firebase',
        'Styled Components',
        'Node.js',
      ],
      // links: [
      //   {
      //     type: 'Website',
      //     href: 'http://onelink.to/cargoapp',
      //     icon: <Icons.globe className='size-3' />,
      //   },
      // ],
      image: '/cargo_thumbnail.png',
      video: '',
    },
    {
      title: 'PayClick',
      href: 'https://youtu.be/J54HrYJXQ9I?si=cvYH3mOgLM7uIDqc',
      // dates: 'June 2023 - Present',
      active: true,
      description:
        'developed an e-commerce mobile application that allows users to purchase products with a single click. I developed the app using React Native, Typescript, Node.js, and Firebase.',
      technologies: ['React Native', 'Typescript', 'Node.js', 'Firebase'],
      // links: [
      //   {
      //     type: 'Website',
      //     href: 'https://magicui.design',
      //     icon: <Icons.globe className='size-3' />,
      //   },
      //   {
      //     type: 'Source',
      //     href: 'https://github.com/magicuidesign/magicui',
      //     icon: <Icons.github className='size-3' />,
      //   },
      // ],
      image: '/PayClick.png',
      video: '',
    },
    {
      title: 'TaskMaster',
      href: 'https://youtu.be/c5X6Mz-Akuk?si=Lk6budEyCNMjkqRR',
      // dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed a task management mobile application that allows users to create, assign, and track tasks. I developed the app using React Native, Typescript, and TailwindCSS.',
      technologies: ['React Native', 'Typescript', 'TailwindCSS'],
      // links: [
      //   {
      //     type: 'Website',
      //     href: 'https://llm.report',
      //     icon: <Icons.globe className='size-3' />,
      //   },
      //   {
      //     type: 'Source',
      //     href: 'https://github.com/dillionverma/llm.report',
      //     icon: <Icons.github className='size-3' />,
      //   },
      // ],
      image: '/TaskMaster.png',
      video: '',
    },
    {
      title: 'HEY-CONNECT',
      href: 'https://hey-connect-client.onrender.com/',
      // dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed a social media platform that connects users based on their interests. I developed the app using React, Redux, Node.js, Express JS, and MongoDB.',
      technologies: ['React', 'Redux', 'Node JS', 'Express JS', 'MongoDB'],
      // links: [
      //   {
      //     type: 'Website',
      //     href: 'https://automatic.chat',
      //     icon: <Icons.globe className='size-3' />,
      //   },
      // ],
      image: '/HEY-CONNECT.png',
      video: '',
    },
  ],
  // hackathons: [
  //   {
  //     title: 'Hack Western 5',
  //     dates: 'November 23rd - 25th, 2018',
  //     location: 'London, Ontario',
  //     description:
  //       'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 14th - 16th, 2018',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a mobile application which delivers university campus wide events in real time to all students.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'FirstNet Public Safety Hackathon',
  //     dates: 'March 23rd - 24th, 2018',
  //     location: 'San Francisco, California',
  //     description:
  //       'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
  //     icon: 'public',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
  //     links: [],
  //   },
  //   {
  //     title: 'DeveloperWeek Hackathon',
  //     dates: 'February 3rd - 4th, 2018',
  //     location: 'San Francisco, California',
  //     description:
  //       'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
  //     links: [
  //       {
  //         title: 'Github',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/cryptotrends/cryptotrends',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'HackDavis',
  //     dates: 'January 20th - 21st, 2018',
  //     location: 'Davis, California',
  //     description:
  //       'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
  //     win: 'Best Data Hack',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://devpost.com/software/my6footprint',
  //       },
  //       {
  //         title: 'ML',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/Wallet6/my6footprint-machine-learning',
  //       },
  //       {
  //         title: 'iOS',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/Wallet6/CarbonWallet',
  //       },
  //       {
  //         title: 'Server',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/Wallet6/wallet6-server',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'ETH Waterloo',
  //     dates: 'October 13th - 15th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
  //     links: [
  //       {
  //         title: 'Organization',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/ethdocnet',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 15th - 17th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a virtual reality application allowing users to see themselves in third person.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Streamer Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/justinmichaud/htn2017',
  //       },
  //       {
  //         title: 'Client Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/RTSPClient',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Hack The 6ix',
  //     dates: 'August 26th - 27th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/ShareShip/ShareShip',
  //       },
  //       {
  //         title: 'Site',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://share-ship.herokuapp.com/',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Stupid Hack Toronto',
  //     dates: 'July 23rd, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/nsagirlfriend/nsagirlfriend',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Global AI Hackathon - Toronto',
  //     dates: 'June 23rd - 25th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Article',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/TinySamosas/',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'McGill AI for Social Innovation Hackathon',
  //     dates: 'June 17th - 18th, 2017',
  //     location: 'Montreal, Quebec',
  //     description:
  //       'Developed realtime facial microexpression analyzer using AI',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
  //     links: [],
  //   },
  //   {
  //     title: 'Open Source Circular Economy Days Hackathon',
  //     dates: 'June 10th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/genecis',
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: 'May 19th - 21st, 2017',
  //     location: 'International',
  //     description: 'Improved PocketDoc and submitted to online competition',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
  //     win: 'Top 10 Finalist | Honourable Mention',
  //     links: [
  //       {
  //         title: 'Medium Article',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
  //       },
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native',
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className='h-4 w-4' />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'HackMining',
  //     dates: 'May 12th - 14th, 2017',
  //     location: 'Toronto, Ontario',
  //     description: 'Developed neural network to optimize a mining process',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
  //     links: [],
  //   },
  //   {
  //     title: 'Waterloo Equithon',
  //     dates: 'May 5th - 7th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className='h-4 w-4' />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native',
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className='h-4 w-4' />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'SpaceApps Waterloo',
  //     dates: 'April 28th - 30th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/earthwatch',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'MHacks 9',
  //     dates: 'March 24th - 26th, 2017',
  //     location: 'Ann Arbor, Michigan',
  //     description:
  //       'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/threejs-planes',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'StartHacks I',
  //     dates: 'March 4th - 5th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
  //     win: '1st Place Winner',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/mattBlackDesign/recipic-ionic',
  //       },
  //       {
  //         title: 'Source (Server)',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/mattBlackDesign/recipic-rails',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'QHacks II',
  //     dates: 'February 3rd - 5th, 2017',
  //     location: 'Kingston, Ontario',
  //     description:
  //       'Developed a mobile game which enables city-wide manhunt with random lobbies',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/dillionverma/human-huntr-react-native',
  //       },
  //       {
  //         title: 'Source (API)',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/mattBlackDesign/human-huntr-rails',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Terrible Hacks V',
  //     dates: 'November 26th, 2016',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a mock of Windows 11 with interesting notifications and functionality',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Portal Hackathon',
  //     dates: 'October 29, 2016',
  //     location: 'Kingston, Ontario',
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className='h-4 w-4' />,
  //         href: 'https://github.com/UWPortalSDK/crowmark',
  //       },
  //     ],
  //   },
  // ],
} as const;
