import {
  Label,
  SpinnerContainer,
  StyledOutlineButton,
} from '../StyledComponents/Button';
import theme from '../theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import Icon from '../icons';

const OutlineButton = props => (
  <StyledOutlineButton
    theme={theme}
    disabled={props.loading || props.disabled}
    {...props}
  >
    {props.icon ? (
      props.loading ? (
        <SpinnerContainer>
          <Spinner
            theme={theme}
            color={props.color ? theme[props.color].main : theme.primary.main}
            size={props.large ? '18' : '14'}
          />
        </SpinnerContainer>
      ) : (
        <Icon glyph={props.icon} />
      )
    ) : null}
    {props.loading && !props.icon && (
      <Spinner
        theme={theme}
        color={props.color ? theme[props.color].main : theme.primary.main}
        size={props.large ? '18' : '14'}
      />
    )}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledOutlineButton>
);

OutlineButton.propTypes = {
  /** theme name that defined in theme.js */
  color: PropTypes.oneOf(['primary', 'secondary', 'green', 'white', 'red']),
  /** icon name, add icon in the icons.js if you want to use icon. */
  icon: PropTypes.string,
  /** set this to true to show loader icon in the button */
  loading: PropTypes.bool,
  /** sets the button size - large */
  large: PropTypes.bool,
  disabled: PropTypes.bool,
};

OutlineButton.defaultProps = {
  disabled: false,
};

export default OutlineButton;
