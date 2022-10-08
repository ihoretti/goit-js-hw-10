import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { getRefs } from './js/getRefs';
const DEBOUNCE_DELAY = 300;
