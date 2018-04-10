export default {
    contacts: [
        { name: 'email', icon: 'far fa-envelope', value: 't.pang767@gmail.com'},
        { name: 'github', icon: 'fab fa-github', value: 'https://github.com/tpang767'},
        { name: 'linkedIn', icon: 'fab fa-linkedin-in', value: 'https://linkedin.com/in/thomas-pang/'},
        { name: 'codepen', icon: 'fab fa-codepen', value: 'https://codepen.io/teapea767'},
        { name: 'location', icon: 'far fa-compass', value: 'New York, NY'},
      ],
      projects: [
        {
          title: 'DigiTracker',
          subtitle: 'Cryptocurrency Portfolio Manager',
          details: [
            'Track cryptocurrency investments using DigiTracker client.',
            'Add, delete, or edit asset holdings in portfolio.',
            'Monitor overall performance using real-time market data.'
          ],
          image: './static/images/DigiTracker/DashboardPage.png',
          path: '#'
        },
        {
          title: 'Budget Tracker',
          subtitle: 'Financial Budget Tracking for Friends',
          details: [
            'Track cryptocurrency investments using DigiTracker client.',
            'Add, delete, or edit asset holdings in portfolio.',
            'Monitor overall performance using real-time market data.'
          ],
          image: 'https://www.w3schools.com/howto/img_avatar.png',
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