// public/Quiz.js
document.getElementById('quizForm').addEventListener('submit', async e => {
  e.preventDefault();
  const data = new URLSearchParams(new FormData(e.target));

  const res = await fetch('/api/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data
  });

  const { team } = await res.json();
  document.getElementById('result').innerText = `Your team(s): ${team}`;
});