import { render, screen } from "@testing-library/react";
import App from "./App";

it(`renders the landing page`, () => {
  render(<App />);

  expect(screen.getByText("Exercise 5")).toBeInTheDocument();
  expect(1).toEqual(1);
});
