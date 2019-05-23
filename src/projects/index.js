import portfolio from './images/portfolio.jpg';
import gbSearch from './images/gbSearch.jpg';
import eplMemory from './images/eplMemory.jpg';
import vNews from './images/vNews.jpg';
import link from './images/link.jpg';
// import edb from './images/edb.png';
import bamazon from './images/bamazon.jpg';
import hailCLI from './images/hailCLI.jpg';
import liri from './images/liri.jpg';
import signal from './images/signal.jpg';
import rps from './images/rps.jpg';
import supersearch from './images/supersearch.jpg';
import trivia from './images/trivia.jpg';
import starfighter from './images/starfighter.jpg';
import hail from './images/hail.jpg';

const projects = [
  {
    title: 'Portfolio',
    tech: 'React, React Router, styled-components',
    description: `I wanted this portfolio to be clean and easy to navigate while being simple to maintain and update. The content on the Home, Projects, and individual project pages are dynamically populated from one JSON object and change as I update that object.`,
    image: portfolio,
    liveUrl: 'https://crcass.github.io/portfolio',
    githubUrl: 'https://github.com/crcass/portfolio',
    route: 'portfolio'
  },
  {
    title: 'Google Books Search',
    tech:
      'mongoDB, Express, Node, React, Axios, React Router, styled-components',
    description: `This full-stack app allows users to search the Google Books API for content, save an item's information to a database, view a list of saved items and remove them from the database.`,
    image: gbSearch,
    liveUrl: 'https://protected-caverns-27036.herokuapp.com/',
    githubUrl: 'https://github.com/crcass/books-search',
    route: 'google-books-search',
    featured: true
  },
  {
    title: 'EPL Memory Game',
    tech: 'React, styled-components',
    description: `The user tries to select as many teams as they can without choosing any team more than once. After each attempt, the images are shuffled and the user tries again. The user's score & high score are updated accordingly, and a message is displayed to show success or failure.`,
    image: eplMemory,
    liveUrl: 'https://crcass.github.io/memory-game/',
    githubUrl: 'https://github.com/crcass/memory-game',
    route: 'epl-memory-game'
  },
  {
    title: 'V News',
    tech: 'mongoDB, Handlebars.js, Express.js, Node.js, SCSS',
    description: `V News scrapes websites for news articles, stores them in a database, & displays them to the user. Users can leave a note, and add or remove their favorites.`,
    image: vNews,
    liveUrl: 'https://young-scrubland-84437.herokuapp.com/',
    githubUrl: 'https://github.com/crcass/vnews',
    route: 'v-news'
  },
  {
    title: 'Link',
    tech: 'Express.js, Node.js, Axios, SCSS',
    description: `Link is a simple take on a dating app. Users input their name, add a photo, and answer a series of questions. Link matches the user against everyone else in the system and displays their new best friend.`,
    image: link,
    liveUrl: 'https://enigmatic-river-60007.herokuapp.com/',
    githubUrl: 'https://github.com/crcass/friendfinder',
    route: 'link',
    featured: true
  },
  // {
  //   title: 'EDB Express',
  //   tech: 'MySQL, Handlebars.js, Express.js, Node.js, SCSS',
  //   description: `Edb Express is a simple to-do list that allows users to input a type of burger they would like to eat, save it to the database, and update the database once they have received their order.`,
  //   image: edb,
  //   liveUrl: 'https://morning-shelf-39455.herokuapp.com/',
  //   githubUrl: 'https://github.com/crcass/burger',
  //   route: 'edb-express'
  // },
  {
    title: 'Bamazon',
    tech: 'Node.js, MySQL, Inquirer, Chalk',
    description: `Bamazon is a command line software suite that includes a store front for customers, product management console, and supervisor tools. Customers can view current inventory and purchase products. The management console allows the user to view inventory levels, update inventory, and add new products. The supervisor tools allow the user to create new departments and view sales figures.`,
    image: bamazon,
    liveUrl: 'https://youtu.be/4wMZ08lUm20',
    githubUrl: 'https://github.com/crcass/bamazon',
    route: 'bamazon',
    featured: true
  },
  {
    title: 'Hail to the Chief - CLI',
    tech: 'Node.js, Inquirier, Chalk',
    description: `This is the CLI version of the Hail to the Chief web app. The user chooses letters until they win or run out of attempts. The game keeps track of the player's score for as long as the session is open.`,
    image: hailCLI,
    liveUrl: 'https://youtu.be/sonGXhng7kU',
    githubUrl: 'https://github.com/crcass/hail-cli',
    route: 'hail-cli'
  },
  {
    title: 'LIRI',
    tech: 'Node.js, Axios, Moment.js',
    description: `LIRI is a command line tool that provides users with information about upcoming concerts, music on Spotify, or movie details.`,
    image: liri,
    liveUrl: 'https://youtu.be/gRkBZ4yKaoE',
    githubUrl: 'https://github.com/crcass/liri',
    route: 'liri'
  },
  {
    title: 'Signal',
    tech: 'APIs, AJAX, jQuery, Bootstrap',
    description: `Designed for business travelers, this app allows users to find their favorite food, events, & activities without having to sort through pages of reviews. The user enters their destination, travel date, as well as preferences for cuisine, music, & exercise and the user is presented with the two best options in each category. The user selects the options they want to save and are sent a text message with the details of their results.`,
    image: signal,
    liveUrl: 'https://crcass.github.io/project-one/',
    githubUrl: 'https://github.com/crcass/project-one',
    route: 'signal'
  },
  {
    title: 'RPS',
    tech: 'Firebase, jQuery',
    description: `This version of Rock, Paper, Scissors is played by two different players on different devices. Neither player can see the other's selection until the round is complete. Each player's stats persist between sessions and there is a custom built chat feature that players can use during the game.`,
    image: rps,
    liveUrl: 'https://crcass.github.io/rps-multiplayer/',
    githubUrl: 'https://github.com/crcass/rps-multiplayer',
    route: 'rps',
    featured: true
  },
  {
    title: 'Super Search',
    tech: 'jQuery, AJAX, Bootstrap',
    description: `I was asked to create a demo that queries three different API's from a single user input. The user can click a button to trigger the API calls or enter a custom value into the input field. The user can load additional gifs from the button at the bottom of the page, and the gifs will start or stop their animation when clicked.`,
    image: supersearch,
    liveUrl: 'https://crcass.github.io/supersearch/',
    githubUrl: 'https://github.com/crcass/supersearch',
    route: 'super-search'
  },
  {
    title: 'CFB Trivia',
    tech: 'jQuery, JavaScript, HTML, CSS',
    description: `This trivia game uses timers to automatically manipulate the DOM without user input. Once the user starts the game, a question is displayed and they have 13 seconds to select an answer. If the user does not provide an answer, the post-question screen displays automatically. The game keeps track of the user's correct, incorrect, & unanswered questions and display the results at the end of the game.`,
    image: trivia,
    liveUrl: 'https://crcass.github.io/cfbtrivia/',
    githubUrl: 'https://github.com/crcass/cfbtrivia',
    route: 'cfb-trivia'
  },
  {
    title: 'Starfighter Challenge',
    tech: 'jQuery, JavaScript, HTML, CSS',
    description: `In this game the user selects one of four characters to start the game, and battles against the remaining characters. When the attack button is clicked, the player's health and their enemies health is reduced based on attack values. If the player defeats an enemy, they select a new enemy to face. The player wins if they can default all three enemies`,
    image: starfighter,
    liveUrl: 'https://crcass.github.io/starfighter/',
    githubUrl: 'https://github.com/crcass/starfighter',
    route: 'starfighter'
  },
  {
    title: 'Hail to the Chief',
    tech: 'JavaScript, HTML, CSS',
    description: `This is a hangman-style game that uses the last names of 20th century US presidents. The user chooses letters until they win or run out of attempts. The game keeps track of the player's score for as long as the session is open, and a short sound clip plays for each victory.`,
    image: hail,
    liveUrl: 'https://crcass.github.io/hail/',
    githubUrl: 'https://github.com/crcass/hail',
    route: 'hail'
  }
];

export default projects;
