import { GreetingService } from '../domain/greeting.js';

test('GreetingService returns Hello World', () => {
  const service = new GreetingService();
  expect(service.getMessage()).toBe('Hello World');
});
