import textAnalyzer from "../textAnalyzer.js";

test("removes the first two characters from the text", () => {
  const inputText = "/1hello world";
  const expectedOutput = "hello world";

  const actualOutput = textAnalyzer(inputText);

  expect(actualOutput).toBe(expectedOutput);
});

test("removes the first two characters from the text with a white space", () => {
  const inputText = "/1 javascript";
  const expectedOutput = " javascript";

  const actualOutput = textAnalyzer(inputText);

  expect(actualOutput).toBe(expectedOutput);
});

test("handles single-character input string", () => {
  const inputText = "/1a";
  const expectedOutput = "a";

  const actualOutput = textAnalyzer(inputText);

  expect(actualOutput).toBe(expectedOutput);
});

test("handles two-character input string", () => {
  const inputText = "/1ab";
  const expectedOutput = "ab";

  const actualOutput = textAnalyzer(inputText);

  expect(actualOutput).toBe(expectedOutput);
});
