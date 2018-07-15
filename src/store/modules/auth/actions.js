import * as types from './mutation-types.js';
import auth from '../../../api/auth.requests.js'

async function registerUser({ commit }, userData) {
  try {
    //const { data } = await auth.registerUser(userData);
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}

export default {
  registerUser
};