import PropTypes from 'prop-types';
import theme from 'config/theme';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  IoIosAdd,
  IoIosAddCircle,
  IoIosCloseCircle,
  IoMdArrowRoundBack,
  IoIosClose,
  IoMdCreate,
} from 'react-icons/io';
import {
  MdDelete, MdInfo, MdKeyboardReturn, MdInsertDriveFile,
} from 'react-icons/md';
import Edit from '@material-ui/icons/EditRounded';
import UploadIcon from '@material-ui/icons/VerticalAlignTop';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertDriveFileRounded from '@material-ui/icons/InsertDriveFileRounded';
import FolderRounded from '@material-ui/icons/FolderRounded';


export const SvgWrapper = styled.div`
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => (props.size ? `${props.size}px` : '32px')};
  color: ${props => (props.color ? `${props.color}` : 'inherit')};
  flex-direction: column;
  
  ${props => props.count
  && css`
      background-color: transparent;
      &:after {
        content: ${props.count ? `'${props.count}'` : '\'\''};
        position: absolute;
        left: calc(100% - 12px);
        top: -2px;
        font-size: 14px;
        font-weight: 600;
        background: ${theme.defaultBackground};
        color: ${({ theme }) => (process.env.NODE_ENV === 'production'
    ? theme.primary.contrastTextColor
    : theme.red.light)};
        border-radius: 8px;
        padding: 2px 4px;
        border: 2px solid
          ${({ theme }) => (process.env.NODE_ENV === 'production'
    ? theme.primary.contrastTextColor
    : theme.red.light)};
      }
    `};
`;

const getIcon = (icon) => {
  const size = 24;
  switch (icon) {
    case 'add':
      return <IoIosAddCircle size={size} />;
    case 'simple-add':
      return <IoIosAdd size={size} />;
    case 'info-circle-filled':
      return <MdInfo size={size} />;
    case 'return':
      return <MdKeyboardReturn />;
    case 'simple-create':
      return <IoMdCreate size={size} />;
    case 'md-delete':
      return <MdDelete size={size} />;
    case 'back-arrow':
      return <IoMdArrowRoundBack size={size} />;
    case 'close':
      return <IoIosClose size={size} />;
    case 'edit':
      return <Edit />;
    case 'upload':
      return <UploadIcon size={size} />;
    case 'settings':
      return <SettingsIcon size={size} />;
    case 'file-icon':
      // TODO: Use icons only from react-icons instead of material-ui icons
      return <InsertDriveFileRounded style={{ fontSize: 'inherit' }} />;
    case 'folder':
      return <FolderRounded style={{ fontSize: 'inherit' }} />;
    case 'file':
      return <MdInsertDriveFile size={size} />;
    default:
      return <IoIosCloseCircle size={size} />;
  }
};

const Icon = (props) => {
  const {
    size = 32,
    onClick,
    glyph,
    color,
    style,
  } = props;
  return (
    <SvgWrapper
      size={size}
      className="icon"
      onClick={onClick}
      color={color}
      style={style}
    >
      {
        getIcon(glyph)
      }
    </SvgWrapper>
  );
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: 32,
  onClick: () => {},
};

export default Icon;
