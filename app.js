import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCTextFieldIcon} from '@material/textfield/icon';
const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));

import {MDCTopAppBar} from '@material/top-app-bar/index';
// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);