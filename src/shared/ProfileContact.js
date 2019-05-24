import styled from 'styled-components';
import { colors } from '../shared/colors';

const ProfileContact = styled.main`
  font-size: 1.375em;
  line-height: 1.35em;
  margin: 1em 1.1em 0;
  width: 100%;

  & .border {
    border-top: 1px solid ${colors.anchor};
    padding-top: 2em;
    margin-top: 1em;
  }

  h2 {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    font-size: 1em;
    margin: 0 0 1.27em;
    transition: color 1s ease;
  }

  p {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    margin: 0;
    transition: color 1s ease;

    &.text {
      color: ${colors.anchor};
      font-size: 16px;
    }
  }

  a {
    color: ${colors.anchor};
    margin-right: 3em;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;

    &:hover {
      color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
      text-decoration: underline;
    }
  }

  a {
    margin-right: 0;
  }
`;

export default ProfileContact;
