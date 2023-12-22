import converter from "./converter.js";
import placeholder from "./placeholder.js";
import textAnalyzer from "./textAnalyzer.js";

function editorAnalyzer(page) {
  let typedText = "";
  let isHeadingEnabled = false;
  let idIncreament = 0;
  let paragraphs = "";
  let letters = "";

  document.addEventListener("keyup", (event) => {
    typedText += event.key.length === 1 ? event.key : "";
    if (event.key === "Enter") {
      event.preventDefault();

      if (typedText[0] === "/" && typedText[1] === "1") {
        isHeadingEnabled = true;
        letters = converter(
          textAnalyzer(typedText),
          document.getElementById("editor"),
          idIncreament,
          isHeadingEnabled,
        );
      } else {
        letters = converter(
          typedText,
          document.getElementById("editor"),
          idIncreament,
          false,
        );
      }

      paragraphs += letters != undefined ? letters : "";
      page.innerHTML = paragraphs;
      page.innerHTML += `<div id="paragraph" class="paragraph" contenteditable="true"></div>`;
      idIncreament += 1;
      typedText = "";
      document.getElementById("paragraph").focus();
      placeholder();
    }
  });
}

export default editorAnalyzer;
