 // Import Firebase dependencies
import { auth } from "./firebase.js";

// Get the link container
const linkContainer = document.querySelector(".links-container");

// Check if user is logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is logged in
    linkContainer.innerHTML = `
      <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
      <li class="link-item"><a href="#" onclick="logoutUser()"  class="link">Logout</a></li>
    `
  } else {
    // User is not logged in
    linkContainer.innerHTML = `
      <li class="link-item"><a href="/admin" class="link">Login</a></li>
    `
  }
})