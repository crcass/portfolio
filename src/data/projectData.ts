/* eslint-disable max-len */
export type ProjectId =
  'bamazon' |
  'cfb_trivia' |
  'devpool' |
  'edb_express' |
  'epl_memory_game' |
  'google_books_search' |
  'hail' |
  'hail_cli' |
  'link' |
  'liri' |
  'portfolio' |
  'rps' |
  'signal' |
  'starfighter' |
  'super_search' |
  'v_news';

export interface Project {
  description: string;
  featured?: boolean;
  githubUrl: string;
  id: ProjectId;
  imagePath: string;
  liveUrl: string;
  tech: string;
  title: string;
}
import bamazonJPG from '../assets/images/projects/bamazon.jpg';
import devpoolJPG from '../assets/images/projects/devpool.jpg';
import edbJPG from '../assets/images/projects/edb.jpg';
import eplMemoryGameJPG from '../assets/images/projects/eplMemory.jpg';
import googleBooksJPG from '../assets/images/projects/gbSearch.jpg';
import hailJPG from '../assets/images/projects/hail.jpg';
import hailCliJPG from '../assets/images/projects/hailCLI.jpg';
import linkJPG from '../assets/images/projects/link.jpg';
import liriJPG from '../assets/images/projects/liri.jpg';
import portfolioJPG from '../assets/images/projects/portfolio.jpg';
import rpsJPG from '../assets/images/projects/rps.jpg';
import signalJPG from '../assets/images/projects/signal.jpg';
import starfighterJPG from '../assets/images/projects/starfighter.jpg';
import supersearchJPG from '../assets/images/projects/supersearch.jpg';
import cfbTriviaJPG from '../assets/images/projects/trivia.jpg';
import vNewsJPG from '../assets/images/projects/vNews.jpg';

const projects: Project[] = [
  {
    description: 'This project was created as a way to become more comfortable with Redux and to learn to use Redux-Sagas. Devpool is a site for recruiters to connect with junior developers. This app uses the GitHub API to fetch the dev\'s most recent repositories, lets recruiters leave messages & links for the devs, and lets recruiters post jobs. Devs can login, add their info if not already in our system, see their messages and view & save jobs from the jobs board.',
    featured: true,
    githubUrl: 'https://github.com/crcass/devpool',
    id: 'devpool',
    imagePath: devpoolJPG,
    liveUrl: 'https://devpool2.herokuapp.com/',
    tech: 'React, React Redux, Redux-Sagas, Redux Form, React Router, Firebase, Express, Node, Axios, MySQL, Sequelize, styled-components',
    title: 'Devpool',
  },
  {
    description: 'I wanted this portfolio to be clean and easy to navigate while being simple to maintain and update. The content on the Home, Projects, and individual project pages are dynamically populated from a single array of JSON objects.',
    githubUrl: 'https://github.com/crcass/portfolio',
    id: 'portfolio',
    imagePath: portfolioJPG,
    liveUrl: 'https://crcass.netlify.com',
    tech: 'React, React Router, styled-components',
    title: 'Portfolio',
  },
  {
    description: 'This project was an exercise to build a full-stack React website. I wanted to combine my knowledge of API calls through Axios, Express routing, and my MongoDB skills into a React app. I also wanted to continue improving my knowledge and understand of styled-components and push myself to take some chances on styling & design while keeping the app simple to use.',
    featured: true,
    githubUrl: 'https://github.com/crcass/books-search',
    id: 'google_books_search',
    imagePath: googleBooksJPG,
    liveUrl: 'https://protected-caverns-27036.herokuapp.com/',
    tech: 'mongoDB, Express, Node, React, Axios, React Router, styled-components',
    title: 'Google Books Search',
  },
  {
    description: 'A memory game where the user tries to select as many teams as they can without choosing any team more than once. After each attempt, the images are shuffled and the user tries again. The user\'s score & high score are updated accordingly, and a message is displayed to show success or failure. This game was used as a way to improve my React skills and begin using styled-components. I thought using the teams in the English Premier League would provide a good challenge for anyone that plays the game due the to the number of teams and the similarity in many of the colors & logos.',
    githubUrl: 'https://github.com/crcass/memory-game',
    id: 'epl_memory_game',
    imagePath: eplMemoryGameJPG,
    liveUrl: 'https://crcass.github.io/memory-game/',
    tech: 'React, styled-components',
    title: 'EPL Memory Game',
  },
  {
    description: 'V News is an app where users can view headlines, images, & authors for each article, leave a comment, and add an article to their favorites. All articles link directly to The Verge. This app was an exercise in scraping a news site for information, then displaying that info using server-side rendering with Handlebars and Express. I wanted users to be able to leave comments on news articles and save articles for future reading.',
    githubUrl: 'https://github.com/crcass/vnews',
    id: 'v_news',
    imagePath: vNewsJPG,
    liveUrl: 'https://young-scrubland-84437.herokuapp.com/',
    tech: 'mongoDB, Handlebars.js, Express.js, Node.js, SCSS',
    title: 'V News',
  },
  {
    description: 'This app is an exercies in taking in user data, comparing it against existing data, and finding the closest match. I wanted this app to be clean and functional while having some stronger design elements. I wanted to avoid using a CSS library like Bootstrap to push my own styling skills, and I used this project to start learning the Sass CSS pre-processor.',
    githubUrl: 'https://github.com/crcass/friendfinder',
    id: 'link',
    imagePath: linkJPG,
    liveUrl: 'https://enigmatic-river-60007.herokuapp.com/',
    tech: 'Express.js, Node.js, Axios, SCSS',
    title: 'Link',
  },
  {
    description: 'Edb Express is a simple to-do list that allows users to input a type of burger they would like to eat, save it to the database, and update the database once they have received their order.',
    githubUrl: 'https://github.com/crcass/burger',
    id: 'edb_express',
    imagePath: edbJPG,
    liveUrl: 'https://morning-shelf-39455.herokuapp.com/',
    tech: 'MySQL, Handlebars.js, Express.js, Node.js, SCSS',
    title: 'EDB Express',
  },
  {
    description: 'Bamazon is a command line software suite that includes a store front for customers, product management console, and supervisor tools. Customers can view current inventory and purchase products. The management console allows the user to view inventory levels, update inventory, and add new products. The supervisor tools allow the user to create new departments and view sales figures.',
    featured: true,
    githubUrl: 'https://github.com/crcass/bamazon',
    id: 'bamazon',
    imagePath: bamazonJPG,
    liveUrl: 'https://youtu.be/4wMZ08lUm20',
    tech: 'Node.js, MySQL, Inquirer, Chalk',
    title: 'Bamazon',
  },
  {
    description: 'This is the CLI version of the Hail to the Chief web app. The user chooses letters until they win or run out of attempts. The game keeps track of the player\'s score for as long as the session is open.',
    githubUrl: 'https://github.com/crcass/hail-cli',
    id: 'hail_cli',
    imagePath: hailCliJPG,
    liveUrl: 'https://youtu.be/sonGXhng7kU',
    tech: 'Node.js, Inquirier, Chalk',
    title: 'Hail to the Chief - CLI',
  },
  {
    description: 'LIRI is a command line tool that provides users with information about upcoming concerts, music on Spotify, or movie details.',
    githubUrl: 'https://github.com/crcass/liri',
    id: 'liri',
    imagePath: liriJPG,
    liveUrl: 'https://youtu.be/gRkBZ4yKaoE',
    tech: 'Node.js, Axios, Moment.js',
    title: 'LIRI',
  },
  {
    description: 'Designed for business travelers, this app allows users to find their favorite food, events, & activities without having to sort through pages of reviews. The user enters their destination, travel date, as well as preferences for cuisine, music, & exercise and the user is presented with the two best options in each category. The user selects the options they want to save and are sent a text message with the details of their results.',
    githubUrl: 'https://github.com/crcass/project-one',
    id: 'signal',
    imagePath: signalJPG,
    liveUrl: 'https://crcass.github.io/project-one/',
    tech: 'APIs, AJAX, jQuery, Bootstrap',
    title: 'Signal',
  },
  {
    description: 'This version of Rock, Paper, Scissors is played by two different players on different devices. Neither player can see the other\'s selection until the round is complete. Each player\'s stats persist between sessions and there is a custom built chat feature that players can use during the game.',
    featured: true,
    githubUrl: 'https://github.com/crcass/rps-multiplayer',
    id: 'rps',
    imagePath: rpsJPG,
    liveUrl: 'https://crcass.github.io/rps-multiplayer/',
    tech: 'Firebase, jQuery',
    title: 'RPS',
  },
  {
    description: 'I was asked to create a demo that queries three different API\'s from a single user input. The user can click a button to trigger the API calls or enter a custom value into the input field. The user can load additional gifs from the button at the bottom of the page, and the gifs will start or stop their animation when clicked.',
    githubUrl: 'https://github.com/crcass/supersearch',
    id: 'super_search',
    imagePath: supersearchJPG,
    liveUrl: 'https://crcass.github.io/supersearch/',
    tech: 'jQuery, AJAX, Bootstrap',
    title: 'Super Search',
  },
  {
    description: 'This trivia game uses timers to automatically manipulate the DOM without user input. Once the user starts the game, a question is displayed and they have 13 seconds to select an answer. If the user does not provide an answer, the post-question screen displays automatically. The game keeps track of the user\'s correct, incorrect, & unanswered questions and display the results at the end of the game.',
    githubUrl: 'https://github.com/crcass/cfbtrivia',
    id: 'cfb_trivia',
    imagePath: cfbTriviaJPG,
    liveUrl: 'https://crcass.github.io/cfbtrivia/',
    tech: 'jQuery, JavaScript, HTML, CSS',
    title: 'CFB Trivia',
  },
  {
    description: 'In this game the user selects one of four characters to start the game, and battles against the remaining characters. When the attack button is clicked, the player\'s health and their enemies health is reduced based on attack values. If the player defeats an enemy, they select a new enemy to face. The player wins if they can default all three enemies',
    githubUrl: 'https://github.com/crcass/starfighter',
    id: 'starfighter',
    imagePath: starfighterJPG,
    liveUrl: 'https://crcass.github.io/starfighter/',
    tech: 'jQuery, JavaScript, HTML, CSS',
    title: 'Starfighter Challenge',
  },
  {
    description: 'This is a hangman-style game that uses the last names of 20th century US presidents. The user chooses letters until they win or run out of attempts. The game keeps track of the player\'s score for as long as the session is open, and a short sound clip plays for each victory.',
    githubUrl: 'https://github.com/crcass/hail',
    id: 'hail',
    imagePath: hailJPG,
    liveUrl: 'https://crcass.github.io/hail/',
    tech: 'JavaScript, HTML, CSS',
    title: 'Hail to the Chief',
  },
];

export default projects;
