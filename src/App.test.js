import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import Form from "./Form";
import Dashboard from "./Dashboard";

test("Button renders and handles click", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  
  const btn = screen.getByText("Click Me");
  fireEvent.click(btn);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Form validation and submit", () => {
  render(<Form />);
  
  const input = screen.getByPlaceholderText("Enter name");
  const button = screen.getByText("Submit");

  fireEvent.click(button);
  expect(screen.getByText("Name is required")).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "John" } });
  fireEvent.click(button);

  expect(screen.getByText("Submitted successfully")).toBeInTheDocument();
});

test("Dashboard snapshot", () => {
  const { asFragment } = render(
    <Dashboard loading={false} data={["A", "B"]} />
  );
  expect(asFragment()).toMatchSnapshot();
});