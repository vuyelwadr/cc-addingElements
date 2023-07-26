import { render, screen, fireEvent } from '@testing-library/react';
import App, {initialValues, initialValue} from './App';



test('renders input elements with initial values', () => {
  render(<App />);
  const inputElements = screen.getAllByRole('textbox');
  // const initialValues = ["a", "b", "c", "d", "e", "f"];

  expect(inputElements).toHaveLength(initialValues.length);

  inputElements.forEach((input, index) => {
    expect(input).toHaveValue(initialValues[index]);
  });
});

test('updates input value on change', () => {
  render(<App />);
  const inputElement = document.getElementById('inputValue1');
  const newValue = 'updated value';

  fireEvent.change(inputElement, { target: { value: newValue } });
  expect(inputElement).toHaveValue(newValue);
});

test('inserts "X" after clicking clickableItem', () => {
  render(<App />);
  const inputElement = document.getElementById('inputValue1');
  const clickableItem = document.getElementById('clickableItem0');
  
  fireEvent.click(clickableItem);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue(initialValue);

});