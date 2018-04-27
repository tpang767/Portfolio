export default {
  skills: [
    {
      title: 'HTML',
      items: [
        {
          name: 'HTML5',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png'
        },
        {
          name: 'Pug',
          image: 'https://avatars0.githubusercontent.com/u/9338635?s=200&v=4'
        }
      ]
    },
    {
      title: 'CSS',
      items: [
        {
          name: 'CSS3',
          image: 'https://www.shareicon.net/download/2016/08/01/639873_internet.svg'
        },
        {
          name: 'Sass',
          image: 'https://www.shareicon.net/download/2015/08/31/93776_sass_512x512.png'
        },
        {
          name: 'Bootstrap',
          image: 'https://getbootstrap.com/assets/img/bootstrap-stack.png'
        },
        {
          name: 'Bulma',
          image: 'https://jgthms.com/web-design-in-4-minutes/bulma.png'
        },
        {
          name: 'Semantic Ui',
          image: 'https://semantic-ui.com/images/logo.png'
        }
      ]
    },
    {
      title: 'Javascript',
      items: [
        {
          name: 'Vue.js',
          image: 'https://vuejs.org/images/logo.png'
        },
        {
          name: 'Javascript',
          image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
        },
        {
          name: 'Jquery',
          image: 'https://wikiprogramming.org/wp-content/uploads/2016/10/jquery-icon.png'
        },
        {
          name: 'NodeJs',
          image: 'https://nodejs.org/static/images/logo.svg'
        }
      ]
    },
    {
      title: 'Developer Tools',
      items: [
        {
          name: 'Github',
          image: 'https://png.icons8.com/metro/1600/github.png'
        },
        {
          name: 'BitBucket',
          image: 'https://png.icons8.com/color/1600/bitbucket.png'
        },
        {
          name: 'Webpack',
          image: 'https://cdn-images-1.medium.com/max/400/1*l0JiZHyCBXtgeMQyhBpT6g.png'
        },
        {
          name: 'MongoDB',
          image: 'https://zdnet2.cbsistatic.com/hub/i/r/2016/11/02/c8355e96-d906-457f-a3ac-77ac3c0538d6/thumbnail/770x578/52b97356c653cbafd654592ebf06dca7/mongodb-logo.png'
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
