// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMHDwMXUVLGvvk_dpQNVWYDoY-9mEQ7AI",
  authDomain: "innovatex-43178.firebaseapp.com",
  projectId: "innovatex-43178",
  storageBucket: "innovatex-43178.appspot.com",
  messagingSenderId: "467160676611",
  appId: "1:467160676611:web:62470363ffe9dc5ef45136",
  measurementId: "G-LE656ZPML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to submit form data to Firestore
async function submitForm(formData) {
  try {
    const docRef = await addDoc(collection(db, "submissions"), formData);
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "success.html"; // Redirect to success page
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred. Please try again.");
  }
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    graduate: document.getElementById('graduate').value,
    skills: document.getElementById('skills').value,
    linkedin: document.getElementById('linkedin').value,
  };

  submitForm(formData);
});// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMHDwMXUVLGvvk_dpQNVWYDoY-9mEQ7AI",
  authDomain: "innovatex-43178.firebaseapp.com",
  projectId: "innovatex-43178",
  storageBucket: "innovatex-43178.appspot.com",
  messagingSenderId: "467160676611",
  appId: "1:467160676611:web:62470363ffe9dc5ef45136",
  measurementId: "G-LE656ZPML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to submit form data to Firestore
async function submitForm(formData) {
  try {
    const docRef = await addDoc(collection(db, "submissions"), formData);
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "success2.html"; // Redirect to success page
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred. Please try again.");
  }
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    graduate: document.getElementById('graduate').value,
    skills: document.getElementById('skills').value,
    linkedin: document.getElementById('linkedin').value,
  };

  submitForm(formData);
});