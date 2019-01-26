import { StyledIconButton } from '../StyledComponents/Button';
import theme from '../theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import Icon from '../icons';

const IconButton = props => (
  <StyledIconButton
    theme={theme}
    disabled={props.loading || props.disabled}
    {...props}
  >
    {
        props.loading
          ? (
            <Spinner
              theme={theme}
              color={
              props.color
                ? theme[props.color].contrastTextColor
                : theme.primary.contrastTextColor
            }
              size={props.large ? '18' : '14'}
            />
          )
          : (
            <Icon
              glyph={props.icon}
              tipText={props.tipText}
              tipLocation={props.tipLocation}
            />
          )
      }
  </StyledIconButton>
);
IconButton.propTypes = {
  /** theme name that defined in theme.js */
  color: PropTypes.oneOf(['primary', 'secondary', 'green', 'white', 'red']).isRequired,
  /** icon name, add icon in the icons.js if you want to use icon. */
  icon: PropTypes.string.isRequired,
  /** set this to true to show loader icon in the button */
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

export default IconButton;
