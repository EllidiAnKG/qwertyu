const form = document.querySelector('form[name="form"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const nickname = formData.get('nickname');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('http://localhost:3000/people/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname, email, password })
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("gg");
  }
});