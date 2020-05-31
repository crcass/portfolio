import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { cssSelectors, mediaQueries } from '../constants/cssSelectors';


const StyledNavLink = styled(NavLink)({
    [cssSelectors.activeClass]: {
        color: colors.darkest,
    },
    [cssSelectors.hover]: {
        color: colors.darkest,
    },
    [mediaQueries.prefersColorsSchemeDark]: {
        [cssSelectors.activeClass]: {
            color: colors.lightest,
        },
        [cssSelectors.hover]: {
            color: colors.lightest,
        },
    },
    color: 'inherit',
    textDecorationLine: 'none',
    transition: 'color 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
});

export default StyledNavLink;
