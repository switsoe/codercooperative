import axios from 'axios';
import { FETCH_USER } from './types';

// Fetch current logged in user data
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  // sends action.type "FETCH_USER" to Reducers and updates everything in app using the user model
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Handle and get the Stripe payment token / object
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};