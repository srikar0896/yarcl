/* eslint-disable no-eval */
import styled, { css } from 'styled-components';

const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
};

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 200;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  font-size: 13px;
  line-height: ${props => (props.small
    ? '30px'
    : '36px')};
  height: ${props => (props.small
    ? '30px'
    : '36px')};
  position: relative;
  text-align: center;
  outline: 0;
  margin: 8px;
  letter-spacing: 0;
  padding: ${props => (props.icon
    ? props.large
      ? '8px 12px'
      : '0 8px'
    : props.large
      ? '16px 32px'
      : '0 16px')};
  opacity: ${props => ((props.disabled || props.loading) ? '0.5' : '1')};
  cursor: ${props => ((props.disabled || props.loading) ? 'not-allowed' : 'pointer')};;

  &:hover {
    transition: ${Transition.hover.on};
  }

  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;

export const Label = styled.span`
  display: block;
  flex: 0 0 auto;
  font-weight: 500;
  line-height: inherit;
  color: inherit;
  ${props => (props.loading && !props.hasIcon ? 'opacity: 0;' : 'opacity: 1;')};
  align-self: center;
  margin: auto;
`;

export const StyledSolidButton = styled.button`
  ${baseButton}
  background: ${props => (props.disabled
    ? props.color ? eval(`props.theme.${props.color}.lighter`)
      : props.theme.primary.main
    : props.color
      ? eval(`props.theme.${props.color}.main`)
      : props.theme.primary.main)};
  
  color: ${props => eval(`props.theme.${props.color
    ? `${props.color}.contrastTextColor`
    : 'primary.contrastTextColor'}`)};
  
  border:none;
  &:hover {
    background: ${props => (props.disabled
    ? props.color ? eval(`props.theme.${props.color}.lighter`)
      : props.theme.primary.main
    : eval(
      `props.theme.${
        props.color ? `${props.color}.light` : 'primary.light'
      }`,
    ))};
  }

  &:active {
  }
`;

export const StyledTextButton = styled(StyledSolidButton)`
background: ${props => (props.disabled
    ? props.color
      ? eval(`props.theme.${props.color}.lighter`)
      : props.theme.primary.main
    : 'transparent')};
  
  background-image: none;
  font-weight: 600;
  color: ${props => (props.disabled
    ? eval(
      `props.theme.${props.color
        ? `${props.color}.contrastTextColor`
        : 'primary.contrastTextColor'}`,
    )
    : eval(
      `props.theme.${props.color ? `${props.color}.main` : 'primary.main'}`,
    ))};
  transition: color 0.1s ease-out, box-shadow 0.2s ease-out 0.1s, border-radius 0.2s ease-out, padding: 0.2s ease-out;
  ${props => (props.loading
    ? css`
          justify-content: center;
        `
    : css`
          justify-content: flex-start;
        `)}

  &:hover {
      color: ${props => (props.disabled
    ? props.color
      ? eval(`props.theme.${props.color}.contrastTextColor`)
      : props.theme.primary.contrastTextColor
    : eval(`props.theme.${props.color
      ? `${props.color}.contrastTextColor`
      : 'primary.contrastTextColor'}`))}; }
`;

export const StyledOutlineButton = styled(StyledTextButton)`
   background: transparent;
  color: ${props => eval(
    `props.theme.${
      props.color ? `${props.color}.main` : 'primary.main'
    }`,
  )};
 border: 1px solid ${props => eval(
    `props.theme.${
      props.color ? `${props.color}.main` : 'primary.main'
    }`,
  )};
  
  transition: ${Transition.hover.on};

  &:hover {
 border: 1px solid ${props => eval(
    `props.theme.${props.color ? `${props.color}.main` : 'primary.main'}`,
  )};
    background-color: ${props => (props.disabled
    ? 'transparent'
    : eval(
      `props.theme.${
        props.color ? `${props.color}.main` : 'primary.main'
      }`,
    ))};
    color: ${props => (props.disabled
    ? props.color ? eval(`props.theme.${props.color}.main`)
      : props.theme.primary.main
    : eval(`props.theme.${props.color
      ? `${props.color}.contrastTextColor`
      : 'primary.contrastTextColor'}`))};
    transition: ${Transition.hover.on};
  }
`;

export const StyledIconButton = styled.button`
  ${baseButton} padding: 0;
  width: 32px;
  height: 32px;
  background: ${props => (props.disabled
    ? eval(` props.theme.${props.color} .lighter`)
    : props.color
      ? eval(`props.theme.${props.color} .main`)
      : props.theme.primary.main)};
  color: ${props => (props.disabled
    ? props.theme.inactive
    : props.color
      ? eval(`props.theme.${props.color}.contrastTextColor`)
      : props.theme.primary.contrastTextColor)};
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  border-radius: 50%;
  &:hover {
    color: ${props => (props.disabled
    ? props.theme.inactive
    : props.color
      ? eval(`props.theme.${props.color}.contrastTextColor`)
      : props.theme.primary.contrastTextColor)};
    transform: ${props => (props.disabled ? 'none' : 'scale(1.05)')};
    box-shadow: none;
    opacity: 1;
  }
`;

export const SpinnerContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;
