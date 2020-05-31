import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { mediaQueries } from '../constants/cssSelectors';


const StyledNavLink = styled(NavLink)({
    '&.active': {
        color: colors.darkest,
    },
    '&:hover': {
        color: colors.darkest,
    },
    [mediaQueries.prefersColorsSchemeDark]: {
        '&.active': {
            color: colors.lightest,
        },
        '&:hover': {
            color: colors.lightest,
        },
    },
    color: 'inherit',
    textDecorationLine: 'none',
    transition: 'color 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
});

export default StyledNavLink;
