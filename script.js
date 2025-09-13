document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const surveyForm = document.getElementById('surveyForm');
  const formMessage = document.getElementById('formMessage');

  surveyForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(surveyForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const source = formData.get('source');
    const rating = formData.get('rating');

    if (!name || !email || !source || !rating) {
      showMessage('Please complete all required fields.', 'error');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      showMessage('Please enter a valid email.', 'error');
      return;
    }

    showMessage('Submitting survey...', 'info');
    setTimeout(() => {
      surveyForm.reset();
      showMessage('Thank you! Your feedback has been submitted.', 'success');
    }, 1000);
  });

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.opacity = '1';
    formMessage.style.color = type === 'error' ? '#ffb3c6' : type === 'success' ? '#bff7d6' : '#fff';
    setTimeout(() => { formMessage.style.opacity = '0'; }, type === 'success' ? 5000 : 3000);
  }
});
