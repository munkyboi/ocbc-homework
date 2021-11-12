import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

// test('renders username field', () => {
//   render(<App />);
//   const loginField = screen.getByTestId('loginForm-usernameField');
//   expect(loginField).toBeInTheDocument();
// });

// test('renders password field', () => {
//   render(<App />);
//   const passwordField = screen.getByTestId('loginForm-passwordField');
//   expect(passwordField).toBeInTheDocument();
// });

// test('renders login button', () => {
//   render(<App />);
//   const loginButton = screen.getByRole('button', 'Login');
//   expect(loginButton).toBeInTheDocument();
// });

// test('renders register button', () => {
//   render(<App />);
//   const registerButton = screen.getByRole('link', 'Register');
//   expect(registerButton).toBeInTheDocument();
// });

// test('check login form input', async () => {
//   render(<App />);
//   const usernameField = screen.getByRole('textbox', 'username');
//   const passwordField = screen.getByRole('textbox', 'password');

//   act(() => {
//     fireEvent.change(usernameField, {target: {value: 'test'}});
//   })
//   expect(usernameField.value).toBe('test');

//   act(() => {
//     fireEvent.change(passwordField, {target: {value: 'asdasd'}});
//   })
//   expect(passwordField.value).toBe('asdasd');
  
//   const loginButton = screen.getByRole('button', 'Login');
//   fireEvent.click(loginButton)
//   expect(screen.getByText('You Have')).toBeInTheDocument()

// });

describe("login", () => {
  test("login form should be in the document", () => {
    const component = render(<App />)
    const labelNode = component.getByText("Username")
    expect(labelNode).toBeInTheDocument()
  })

  test("username field should have label", () => {
    const component = render(<App />)
    const usernameInputNode = component.getByLabelText("Username")
    expect(usernameInputNode.getAttribute("name")).toBe("username")
  })

  test("username field should accept text input", () => {
    const component = render(<App />)
    const usernameInputNode = component.getByLabelText("Username")
    expect(usernameInputNode.value).toMatch("")
    act(() => {
      fireEvent.change(usernameInputNode, {target: {value: 'test'}})
    })
    expect(usernameInputNode.value).toMatch("test")

    const errorMessageNode = screen.getByText('Please type in your password')
    expect(errorMessageNode).toBeInTheDocument()
  })
})