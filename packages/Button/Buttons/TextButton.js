import {
  Label,
  SpinnerContainer,
  StyledTextButton,
} from '../StyledComponents/Button';
import theme from '../theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import Icon from '../icons';

const TextButton = props => (
  <StyledTextButton
    theme={theme}
    disabled={props.loading}
    {...props}
  >
    {props.icon ? (
      props.loading ? (
        <SpinnerContainer>
          <Spinner
            color={
                props.color
                  ? theme[props.color].contrastTextColor
                  : theme.primary.contrastTextColor
            }
            size={props.large ? '18' : '14'}
          />
        </SpinnerContainer>
      ) : (
        <Icon glyph={props.icon} />
      )
    ) : null}
    {props.loading && !props.icon && (
      <Spinner
        color={
          props.color
            ? theme[props.color].contrastTextColor
            : theme.primary.contrastTextColor
        }
        size={props.large ? '18' : '14'}
      />
    )}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledTextButton>
);
TextButton.propTypes = {
  /** theme name that defined in theme.js */
  color: PropTypes.oneOf(['primary', 'secondary', 'green', 'white', 'red']),
  /** icon name, add icon in the icons.js if you want to use icon. */
  icon: PropTypes.string,
  /** set this to true to show loader icon in the button */
  loading: PropTypes.bool,
  /** sets the button size - large */
  large: PropTypes.bool,
};

export default TextButton;
