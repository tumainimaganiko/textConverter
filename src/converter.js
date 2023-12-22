function converter(textToConvert, page, paragraphId, isHeading) {
  const editorPage = page;
  if (isHeading) {
    editorPage.innerHTML = "";
    return `<h1 id=${
      "heading" + paragraphId
    } contenteditable="true">${textToConvert}</h1>`;
  } else {
    editorPage.innerHTML = "";
    return `<p id=${
      "paragraph" + paragraphId
    }  contenteditable="true">${textToConvert}</p>`;
  }
}

export default converter;
