import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders title", () => {
  render(<Header />);
  const title = screen.getByText(/Yearbook/);
  expect(title).toBeInTheDocument();
});
