import React, { Fragment } from 'react';
import TextContainer from '../../shared/TextContainer';
import DetailsWrap from '../../shared/DetailsWrap';
import Details from '../../shared/Details';

const Profile = () => (
  <Fragment>
    <TextContainer>
      <DetailsWrap>
        <Details>
          <h2>Full Stack Web Developer</h2>
        </Details>
        <Details>
          <p>
            I'm a web developer from Dallas, TX with a passion for simple,
            elegant, user-oriented designs. I'm comfortable using many modern
            libraries and frameworks including React, Node, SCSS & more.
          </p>
        </Details>
      </DetailsWrap>
    </TextContainer>
    <TextContainer className="border">
      <DetailsWrap>
        <Details>
          <h2>About Chris</h2>
          <p className="text">
            Having previously worked as a high school band director, I
            understand the importance of teamwork, communication, and
            strong-problem solving skills. Teaching others to focus on
            incremental improvement has giving me a strong foundation for
            improving my own skills as a developer. In my free time I enjoy
            travling, music festivals, and trying to track down the best food
            around.
          </p>
        </Details>
        <Details>
          <h2>Chris' Skills</h2>
          <p className="text">
            With the pace of modern web development, the learning never stops. I
            continue to refine and expand by skillset to stay up-to-date with
            the latest trends in web development.
          </p>
          <p className="text">
            My skills include: HTML, CSS, jQuery, AJAX, REST, Git, Github, SCSS,
            Sass, Firebase, SQL, mongoDB, Axios, Express.js, Node.js, React, &
            styled-components.
          </p>
        </Details>
      </DetailsWrap>
    </TextContainer>
  </Fragment>
);

export default Profile;
