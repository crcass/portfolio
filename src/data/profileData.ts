/* eslint-disable max-len */

export interface ProfileData {
  aboutText: string;
  firstName: string;
  lastName: string;
  position: string;
  profileHeadingText: string;
  skillsText: string;
}

export const profileData: ProfileData = {
  aboutText: 'Having previously worked as a high school band director, I understand the importance of teamwork, communication, and strong problem-solving skills. Teaching others to focus on incremental improvement has giving me a strong foundation for improving my own skills as a developer. In my free time I enjoy travling, music festivals, and trying to track down the best food around.',
  firstName: 'Chris',
  lastName: 'Cass',
  position: 'Software Developer',
  profileHeadingText: 'I\'m a software developer from Dallas, TX with a passion for simple, elegant, user-oriented designs. I\'m comfortable using many modern libraries and frameworks including React, Node, SCSS & more.',
  skillsText: 'With the pace of modern web development, the learning never stops. I continue to refine and expand my skillset to stay up-to-date with the latest trends in web development. My skills include: HTML, CSS, jQuery, AJAX, REST, Git, Github, SCSS, Sass, Firebase, SQL, mongoDB, Axios, Express.js, Node.js, React, & styled-components.',
};
