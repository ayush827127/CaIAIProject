
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAoebNDGNMijYHlUWslnsmjYOnGUasKm2U",
    authDomain: "calai-5df45.firebaseapp.com",
    databaseURL: "https://calai-5df45-default-rtdb.firebaseio.com",
    projectId: "calai-5df45",
    storageBucket: "calai-5df45.appspot.com",
    messagingSenderId: "981887347929",
    appId: "1:981887347929:web:7184650cfb1092c362e2c8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Add event listener to the logout button
  document.getElementById('loginButton').addEventListener('click', handleLoginBtn);


  function handleLoginBtn() {
    // Check if user is logged in (you can replace this with your own logic)
    var isLoggedIn = checkIfUserIsLoggedIn();

    if (isLoggedIn) {
      // Sign out the user
      signOut(auth).then(() => {
        // Sign-out successful.
        // For example, redirect to the login page
        window.location.href = '/index.html';
        // You can redirect the user to another page or update the UI as needed.
        alert("Logout Successfully.")
        console.log("User signed out");
      }).catch((error) => {
        // An error happened.
        console.error("Sign out error:", error);
      });

      // User is logged in, perform logout
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('isLoggedIn');
      // For demonstration, let's reload the page (replace with your own logout logic)
      window.location.reload();
    } else {
      // User is not logged in, redirect to login page
      // Replace 'your_login_page_url_here' with the actual URL of your login page
      window.location.href = 'Login.html';
    }
  }

  // Function to check if user is logged in (dummy function for demonstration)
  function checkIfUserIsLoggedIn() {
    // Replace this with your own logic to check if user is logged in
    // For demonstration, let's assume user is logged in if localStorage contains 'isLoggedIn' key
    return localStorage.getItem('isLoggedIn') === 'true';
  }
