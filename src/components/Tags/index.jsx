import React from 'react';
import classNames from 'classnames';

import './tags.scss';

const Tags = ({ color, onClick, className }) => <i onClick={onClick} className={classNames('tag', {[ `tag--${color}` ] : color }, className)}></i>

export default Tags;