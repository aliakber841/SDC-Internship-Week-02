// Contact form validation — kept in its own file so it never touches script.js

function validateContactForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return; // this file only does anything on contact.html

  const successBox = document.getElementById("formSuccess");

  const fields = {
    name: {
      input: document.getElementById("name"),
      group: document.getElementById("group-name"),
      error: document.getElementById("error-name"),
      validate: function (value) {
        if (value.trim().length === 0) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      },
    },
    email: {
      input: document.getElementById("email"),
      group: document.getElementById("group-email"),
      error: document.getElementById("error-email"),
      validate: function (value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) return "Please enter your email.";
        if (!emailPattern.test(value.trim())) return "Please enter a valid email address.";
        return "";
      },
    },
    subject: {
      input: document.getElementById("subject"),
      group: document.getElementById("group-subject"),
      error: document.getElementById("error-subject"),
      validate: function (value) {
        if (value === "") return "Please choose an enquiry type.";
        return "";
      },
    },
    message: {
      input: document.getElementById("message"),
      group: document.getElementById("group-message"),
      error: document.getElementById("error-message"),
      validate: function (value) {
        if (value.trim().length === 0) return "Please write a short message.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      },
    },
  };

  function validateField(fieldKey) {
    const field = fields[fieldKey];
    const message = field.validate(field.input.value);
    if (message) {
      field.group.classList.add("invalid");
      field.error.textContent = message;
      return false;
    } else {
      field.group.classList.remove("invalid");
      field.error.textContent = "";
      return true;
    }
  }

  // validate a field as soon as the user leaves it
  Object.keys(fields).forEach(function (fieldKey) {
    fields[fieldKey].input.addEventListener("blur", function () {
      validateField(fieldKey);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isFormValid = true;
    Object.keys(fields).forEach(function (fieldKey) {
      const fieldIsValid = validateField(fieldKey);
      if (!fieldIsValid) isFormValid = false;
    });

    if (!isFormValid) {
      successBox.classList.remove("show");
      return;
    }

    // Mock submission handler — no backend yet, so we just simulate a send.
    // To wire this up for real, replace this block with a fetch() call to
    // a form service such as Formspree or EmailJS.
    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "SENDING...";

    setTimeout(function () {
      successBox.classList.add("show");
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "SEND MESSAGE";
    }, 800);
  });
}

validateContactForm();