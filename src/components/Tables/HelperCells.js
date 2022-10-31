import React from 'react';
import ImageCellView from './ImageCell';
import DeleteCell from './DeleteCell';
import EditableCell from './EditableCell';
import FilterDropdown from './FilterDropdown';
import { Button } from 'antd';
import { direction } from '@iso/lib/helpers/rtl';
import IntlMessages from '@iso/components/utility/intlMessages';

const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

const onClickIndex = (index) => {
  console.log(index);
};

const DateCell = data => <p>{data.toLocaleString()}</p>;
const ImageCell = src => <ImageCellView src={src} />;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = text => <p>{text}</p>;
// const ButtonCell = index => <Button key={index}  /> ; //onClick={onClick}
//const ButtonCell = index => <Button key={index}  type="primary" onClick={(e) => { onClickIndex(index); }} style={margin}> {<IntlMessages id="forms.button.simpleButtonPrimaryText" />} </Button> ; //onClick={onClick}

export {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
  EditableCell,
  DeleteCell,
  FilterDropdown
};
