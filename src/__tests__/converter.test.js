/**
 * @jest-environment jsdom
 */

import converter from "../converter";

test("creates an h1 element for headings", () => {
  const textToConvert = "This is a heading";
  const paragraphId = 1;
  const isHeading = true;
  const page = document.body;

  const expectedOutput = `<h1 id=heading1 contenteditable="true">${textToConvert}</h1>`;
  const actualOutput = converter(textToConvert, page, paragraphId, isHeading);
  expect(actualOutput).toBe(expectedOutput);
});

test("creates a p element for paragraphs", () => {
  const textToConvert = "This is a paragraph";
  const paragraphId = 2;
  const isHeading = false;
  const page = document.body;

  const expectedOutput = `<p id=paragraph2  contenteditable="true">${textToConvert}</p>`;
  const actualOutput = converter(textToConvert, page, paragraphId, isHeading);
  expect(actualOutput).toBe(expectedOutput);
});
