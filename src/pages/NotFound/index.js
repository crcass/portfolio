import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NotFoundWrap from './layout/NotFoundWrap';

const propTypes = {
  dark: PropTypes.bool.isRequired
};

const NotFound = ({ dark }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <NotFoundWrap dark={dark}>
      <h2>Sorry, the page you're looking for can't be found</h2>
    </NotFoundWrap>
  );
};

NotFound.propTypes = propTypes;

export default NotFound;
