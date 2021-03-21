import { handleSubmit } from "../src/client/js/handleSubmit";

describe("Test the submit functionality", () => {
  test("Testing that handleSubmit function is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
