export default {
    skills: [
      {
        title: 'HTML',
        items: [
          {
          name: 'HTML5',
          img: 'http://andrewborstein.github.io/portfolio/static/img/html5.png'
          },
          {
            name: 'Pug',
            img: 'https://avatars0.githubusercontent.com/u/9338635?s=200&v=4'
          }
        ]
      },
      {
        title: 'CSS',
        items: [
          {
            name: 'CSS3',
            img: 'https://www.shareicon.net/download/2016/08/01/639873_internet.svg'
          },
          {
            name: 'Sass',
            img: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
          },
          {
            name: 'Bootstrap',
            img: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg'
          },
          {
            name: 'Bulma',
            img: 'https://jgthms.com/web-design-in-4-minutes/bulma.png'
          },
          {
            name: 'Semantic Ui',
            img: 'https://semantic-ui.com/images/logo.png'
          }
        ]
      },
      {
        title: 'Javascript',
        items: [
          {
            name: 'Vue.js',
            img: 'https://vuejs.org/images/logo.png'
          },
          {
            name: 'Javascript',
            img: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
          },
          {
            name: 'Jquery',
            img: 'http://andrewborstein.github.io/portfolio/static/img/jquery.png'
          },
          {
            name: 'NodeJs',
            img: 'https://nodejs.org/static/images/logo.svg'
          }
        ]
      }

    ],
    contacts: [
        { name: 'email', icon: 'far fa-envelope', text: 't.pang767@gmail.com'},
        { name: 'github', icon: 'fab fa-github', text: 'github.com/tpang767', path: 'https://github.com/tpang767' },
        { name: 'linkedIn', icon: 'fab fa-linkedin-in', text: 'linkedin.com/in/thomas-pang/', path: 'https://linkedin.com/in/thomas-pang/'},
        { name: 'codepen', icon: 'fab fa-codepen', text: 'codepen.io/teapea767', path: 'https://codepen.io/teapea767'}
      ],
      projects: [
        {
          title: 'DigiTracker',
          subtitle: 'Cryptocurrency Portfolio Manager',
          description: 'Track cryptocurrency investments using DigiTracker client. Add, delete, or edit asset holdings in portfolio. Monitor overall performance using real-time market data.',
          image: './static/images/DigiTracker/DashboardPage.png',
          path: '#'
        },
        {
          title: 'Budget Tracker',
          subtitle: 'Financial Budget Tracking for Friends',
          description: 'Track cryptocurrency investments using DigiTracker client. Add, delete, or edit asset holdings in portfolio. Monitor overall performance using real-time market data.',
          image: './static/images/DigiTracker/DashboardPage.png',
          path: '#'
        }
      ],
      sections: [
        { name: 'Home', path: 'app' },
        { name: 'Projects', path: 'projects' },
        { name: 'About', path: 'about' },
        { name: 'Contact', path: 'contact' }
      ]
}