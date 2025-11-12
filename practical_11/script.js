// Client-side validation and submit handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('studentForm');
  const errorsDiv = document.getElementById('errors');
  const resultSection = document.getElementById('result');
  const resultData = document.getElementById('resultData');
  const newEntryBtn = document.getElementById('newEntry');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    errorsDiv.innerHTML = '';

    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const errors = validate(values);

    if (errors.length) {
      showErrors(errors);
      focusFirstInvalid();
      return;
    }

    // If validation passes, show the submitted data prettily
    resultData.textContent = JSON.stringify(values, null, 2);
    resultSection.hidden = false;
    form.hidden = true;
  });

  newEntryBtn.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    resultSection.hidden = true;
    errorsDiv.innerHTML = '';
    form.querySelector('input,select,textarea').focus();
  });

  function showErrors(list) {
    const ul = document.createElement('ul');
    ul.id = 'error-list';
    list.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = msg;
      ul.appendChild(li);
    });
    errorsDiv.appendChild(ul);
  }

  function focusFirstInvalid() {
    const invalid = form.querySelector('.invalid, :invalid');
    if (invalid) invalid.focus();
  }

  function validate(vals) {
    const errs = [];

    // Full name (required)
    if (!vals.fullName || !vals.fullName.trim()) {
      errs.push('Full name is required.');
      markInvalid('fullName');
    } else {
      clearInvalid('fullName');
    }

    // Roll number: numeric only, at least 4 digits and <=12
    if (!vals.rollNo || !/^\d{4,12}$/.test(vals.rollNo.trim())) {
      errs.push('Roll number is required and must be numeric (4 to 12 digits).');
      markInvalid('rollNo');
    } else {
      clearInvalid('rollNo');
    }

    // Age: numeric, between min and max (browser enforces but re-check)
    const age = Number(vals.age);
    if (!vals.age || Number.isNaN(age) || age < 16 || age > 100) {
      errs.push('Age is required and must be a number between 16 and 100.');
      markInvalid('age');
    } else {
      clearInvalid('age');
    }

    // Email: HTML5 type=email is used; fallback regex check
    if (!vals.email || !validateEmail(vals.email)) {
      errs.push('A valid email address is required.');
      markInvalid('email');
    } else {
      clearInvalid('email');
    }

    // Phone: optional, but if provided must be exactly 10 digits
    if (vals.phone && vals.phone.trim()) {
      if (!/^\d{10}$/.test(vals.phone.trim())) {
        errs.push('Phone number, if provided, must be exactly 10 digits.');
        markInvalid('phone');
      } else {
        clearInvalid('phone');
      }
    } else {
      clearInvalid('phone');
    }

    // Course: specific value check (must be one of the allowed options)
    const allowedCourses = ['BSc','BCom','BA','BTech','BVoc'];
    if (!vals.course || !allowedCourses.includes(vals.course)) {
      errs.push('Please choose a valid course from the list.');
      markInvalid('course');
    } else {
      clearInvalid('course');
    }

    // Year: 1 to 4 (specific value range)
    const year = Number(vals.year);
    if (!vals.year || Number.isNaN(year) || year < 1 || year > 4) {
      errs.push('Year is required and must be between 1 and 4.');
      markInvalid('year');
    } else {
      clearInvalid('year');
    }

    return errs;
  }

  function validateEmail(email) {
    // conservative email regex (not overly strict)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  }

  function markInvalid(id) {
    const elt = document.getElementById(id);
    if (elt) {
      elt.classList.add('invalid');
      elt.setAttribute('aria-invalid', 'true');
    }
  }

  function clearInvalid(id) {
    const elt = document.getElementById(id);
    if (elt) {
      elt.classList.remove('invalid');
      elt.removeAttribute('aria-invalid');
    }
  }
});
