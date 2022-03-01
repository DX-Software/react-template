import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./index";

test("renders learn react link", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
