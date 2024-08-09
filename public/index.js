// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.user-name').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      alert(event.target.innerHTML);
    });
  });

  document.querySelector('.send-button1').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'しか' }) })
    window.location.reload();
  });

  document.querySelector('.send-button2').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'のこ' }) })
    window.location.reload();
  });

  document.querySelector('.send-button3').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'こし' }) })
    window.location.reload();
  });

  document.querySelector('.send-button4').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'たん' }) })
    window.location.reload();
  });

  document.querySelector('.send-button5').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'しかのこのこのここしたんたん' }) })
    window.location.reload();
  });

  document.querySelector('.send-button6').addEventListener('click', async (event) => {
    //const text = document.querySelector('.input-text').value;
    await fetch('/api/user', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'しか' })})
    window.location.reload();
  });
});
