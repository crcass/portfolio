import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const NotFoundWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
const NotFoundHeading = styled.h2({
  '@media(prefers-color-scheme: dark)': {
    color: colors.lighter,
  },
  color: colors.darkest,
});

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundHeading>
      Sorry, the page you&apos;re looking for can&apos;t be found
    </NotFoundHeading>
  </NotFoundWrapper>
);

export default NotFound;
