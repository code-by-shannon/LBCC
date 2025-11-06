const form = document.forms.myform;
const emailInput = form.elements.email;
const passwordInput = form.elements.password;
const userNameInput = form.elements.userName;

const errorSpans = form.querySelectorAll('.error');

console.log({
    emailInput,
    passwordInput,
    userNameInput,
    errorSpanCount: errorSpans.length
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    errorSpans.forEach(span =>{
        span.classList.add('hide');
        span.textContent = '';
    });

    console.log('Submit captured.  Old errors cleared');

    let hasError = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email (e.g. name@example.com).');
        hasError = true;
    }

    console.log('Email valid?', !hasError);

    const pw = passwordInput.value.trim();
    const alnumOnly = /^[A-Za-z0-9]+$/.test(pw);
    const lengthOK = pw.length >= 3 && pw.length <= 8;

    if (!alnumOnly || !lengthOK) {
    let msg = 'Password must be 3–8 chars, letters & numbers only.';
    showError(passwordInput, msg);
    hasError = true;
}

    console.log('Password valid?', alnumOnly && lengthOK);


    const uname = userNameInput.value.trim();
    const unameOK = /^[A-Za-z0-9_]{2,20}$/.test(uname);

    if (!unameOK) {
        showError(userNameInput, 'User name must be 2–20 chars (letters, numbers, _).');
        hasError = true;
}

    console.log('Username valid?', unameOK);

    // 8–9) Build a data object and submit only if everything is valid
if (!hasError) {
    const formData = {};
  
    // loop through all inputs in the form
    for (let input of form.elements) {
      if (input.type !== 'submit') {
        formData[input.name] = input.value.trim();
      }
    }
  
    console.log('✅ Form is valid, ready to submit:', formData);
    alert('Form submitted successfully!');
  } else {
    console.warn('❌ Form has errors. Fix them before submitting.');
  }
  

})

function showError(inputEl, message){
    // walk forward to find the next .error span (skip <br> etc.)
    let el = inputEl.nextElementSibling;
    while (el && !(el.classList && el.classList.contains('error'))) {
      el = el.nextElementSibling;
    }
    if (!el) return;
  
    el.textContent = message;
    el.classList.remove('hide');
    inputEl.focus();
  }
  

