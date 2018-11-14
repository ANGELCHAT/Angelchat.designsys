import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CheckIcon from 'react-material-icon-svg/dist/CheckIcon';
import styles from './style.scss';

const baseClass = 'select-body';
const cx = classNames.bind(styles);

const SelectItem = props => {
  const { isSelected, children, isFocused, ...restProps } = props;
  return (
    <li
      className={cx({
        [`${baseClass}__item`]: true,
        [`${baseClass}__item--selected`]: isSelected,
        [`${baseClass}__item--focused`]: isFocused
      })}
      {...restProps}
    >
      <div>{children}</div>
      <CheckIcon className={styles[`${baseClass}__checkmark`]} />
    </li>
  );
};

SelectItem.propTypes = {
  isSelected: PropTypes.bool,
  isFocused: PropTypes.bool,
  children: PropTypes.node
};

export default SelectItem;