import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { getRefs } from './js/getRefs';

const refs = getRefs();

const DEBOUNCE_DELAY = 300;

refs.countryInfo.innerHTML = '';
refs.countryList.innerHTML = '';

Notify.init({
  width: '280px',
  position: 'center-top',
  timeout: 2500,
  plainText: true,
  borderRadius: '10px',
  cssAnimationStyle: 'zoom',
});
