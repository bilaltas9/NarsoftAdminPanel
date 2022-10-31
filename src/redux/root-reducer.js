import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import Box from '@iso/redux/box/reducer';
import Notes from '@iso/redux/notes/reducer';
import Todos from '@iso/redux/todos/reducer';
import Cards from '@iso/redux/card/reducer';
import DynamicChartComponent from '@iso/redux/dynamicEchart/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import Articles from '@iso/redux/articles/reducers';
import Investors from '@iso/redux/investors/reducers';
import drawer from '@iso/redux/drawer/reducer';
import modal from '@iso/redux/modal/reducer';
import profile from '@iso/redux/profile/reducer';
import quiz from '@iso/redux/quiz/reducer';
import Ecommerce from '@iso/redux/ecommerce/reducer';
import UserDefination from '@iso/redux/userDefination/reducer';
import CompanyDefination from '@iso/redux/companyDefinition/reducer';
import RoleDefinition from '@iso/redux/roleDefinition/reducer';
import ChooseCompany from '@iso/redux/chooseCompany/reducer';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Box,
  Notes,
  Todos,
  Cards,
  DynamicChartComponent,
  Ecommerce,
  Articles,
  Investors,
  modal,
  drawer,
  profile,
  quiz,
  UserDefination,
  CompanyDefination,
  RoleDefinition,
  ChooseCompany
});
