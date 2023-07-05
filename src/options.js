import { supertokens } from './utils/supertokens.js';

document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.getElementById('save-options');
  const logoutButton = document.getElementById('logout');

  saveButton.addEventListener('click', saveOptions);
  logoutButton.addEventListener('click', logout);
});

function saveOptions() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  supertokens.loginWithSupertokens(username, password)
    .then(() => {
      alert('Options saved successfully.');
    })
    .catch((error) => {
      console.error('Error saving options:', error);
    });
}

function logout() {
  supertokens.logout()
    .then(() => {
      alert('Logged out successfully.');
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });
}