import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import App from './App';

test('renders username field', () => {
  render(<App />)
  const loginField = screen.getByTestId('loginForm-usernameField');
  expect(loginField).toBeInTheDocument();
});

test('renders password field', () => {
  render(<App />)
  const passwordField = screen.getByTestId('loginForm-passwordField');
  expect(passwordField).toBeInTheDocument();
});

test('renders login button', () => {
  render(<App />)
  const loginButton = screen.getByTestId('bottomNavButton-loginButton');
  expect(loginButton).toBeInTheDocument();
});

test('renders register button', () => {
  render(<App />)
  const registerButton = screen.getByTestId('bottomNavButton-registerButton');
  expect(registerButton).toBeInTheDocument();
});

test('test login form', () => {
  render(<App />)
  const loginField = screen.getByTestId('loginForm-usernameField');
  const loginInput = getByRole(loginField, 'TextField', {name: 'username'})
  fireEvent.change(loginInput, {target: {value: 'test'}})
  expect(loginInput.value).toBe('test')
});