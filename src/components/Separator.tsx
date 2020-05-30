import styled from 'styled-components';
import { colors } from '../constants/colors';

interface Props {
  marginBottom?: number;
}

const Separator = styled.div(({ marginBottom }: Props) => ({
  borderTop: `1px solid ${colors.light}`,
  margin: `0 6px ${marginBottom ? `${marginBottom}px` : '46px'}`,
}));

export default Separator;