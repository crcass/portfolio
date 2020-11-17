import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/cssSelectors';

const NotFoundWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
const NotFoundHeading = styled.h2({
  [mediaQueries.prefersColorsSchemeDark]: {
    color: colors.lighter,
  },
  color: colors.darkest,
});

const NotFound: FC = () => (
  <NotFoundWrapper>
    <NotFoundHeading>
      Sorry, the page you&apos;re looking for can&apos;t be found
    </NotFoundHeading>
  </NotFoundWrapper>
);

export default NotFound;
