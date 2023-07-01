/** @format */

import { combineReducers } from "redux";
import model from '@store/models/models.slice';
import language from '@store/language/language.slice';

const rootReducers = combineReducers({
  model,
  language,
});

export default rootReducers;
