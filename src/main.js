import { GreetingService } from '../domain/greeting.js';

export function renderMessage(elementId = 'app') {
  const service = new GreetingService();
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = service.getMessage();
  }
  return service.getMessage();
}

document.addEventListener('DOMContentLoaded', () => {
  renderMessage();
});
