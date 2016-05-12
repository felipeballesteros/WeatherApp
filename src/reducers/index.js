import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  wetather: WeatherReducer
});

export default rootReducer;
