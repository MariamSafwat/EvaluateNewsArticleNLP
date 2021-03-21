import { linkChecker } from "../src/client/js/linkChecker";

describe("Test the url check functionality", () => {
  test("Testing if the function is defined or not", () => {
    expect(linkChecker).toBeDefined();
  });

  test("Testing if the function returns true for a valid URL", () => {
    expect(linkChecker("www.google.com")).toBeTruthy();
  });

  test("Testing if the function returns false for a valid URL", () => {
    expect(linkChecker("Some string")).toBeFalsy();
  });
});
