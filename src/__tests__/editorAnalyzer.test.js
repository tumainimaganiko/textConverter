/**
 * @jest-environment jsdom
 */

import editorAnalyzer from "../editorAnalyzer";

jest.mock("../placeholder");
jest.mock("../textAnalyzer");

test("check the first paragraph", () => {
  const mockPage = (document.body.innerHTML = ` <div class="editor" id="editor">
  <div
    id="paragraph"
    contenteditable="true"
    class="paragraph"
  ></div>
</div>`);

  editorAnalyzer(mockPage);
  const expectedParagraph = `<div class="paragraph" contenteditable="true" id="paragraph" />`;

  expect(document.getElementById("paragraph").id).toBe("paragraph");
});
