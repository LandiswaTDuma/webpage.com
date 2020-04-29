// Initialize Firebase
var config ={
    apiKey: "AIzaSyBZpInLxPD2Tr3hHoIWn1kmtm6uDjXX2qA",
    authDomain: "contact-form2-8bf96.firebaseapp.com",
    databaseURL: "https://contact-form2-8bf96.firebaseio.com",
    projectId: "contact-form2-8bf96",
    storageBucket: "contact-form2-8bf96.appspot.com",
    messagingSenderId: "556935617200",
    appId: "1:556935617200:web:d9fbc1f27ec0b8576ff975",
    measurementId: "G-C1R75SD7EV"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);

    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }
  