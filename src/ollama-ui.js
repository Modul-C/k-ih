const API_URL = 'http://localhost:11434/api/generate';
const MODEL_NAME = 'deepseek-r1:1.5b';

export async function generate(prompt) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      prompt,
      stream: false
    })
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data = await res.json();
  return data.response;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ollama-form');
  const input = document.getElementById('ollama-prompt');
  const output = document.getElementById('ollama-response');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    output.textContent = 'Loading...';
    try {
      const text = await generate(input.value);
      output.textContent = text;
    } catch (err) {
      output.textContent = 'Error: ' + err.message;
    }
  });
});
