import styled, { keyframes } from 'styled-components';
import theme from './theme';

const spin = keyframes`
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.span`
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};

  &:before {
    content: "";
    box-sizing: border-box;
    display: inline-block;
    position: ${props => (props.inline ? 'relative' : 'absolute')};
    top: ${props => (props.inline ? '0' : '50%')};
    left: ${props => (props.inline ? '0' : '50%')};
    width: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    height: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    margin-top: ${props => (props.size !== undefined ? `-${props.size / 2}px` : '-8px')};
    margin-left: ${props => (props.size !== undefined ? `-${props.size / 2}px` : '-8px')};
    border-radius: 50%;
    border: ${props => '2px'} solid
      ${props => (props.color
    ? props.color
    : theme.primary.main)};
    border-bottom-color: transparent;
    animation: ${spin} 1s linear infinite;
  }
`;
