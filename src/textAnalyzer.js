export default function textAnalyzer(text) {
  const splittedText = text.split("");
  const insertedText = splittedText.slice(2);
  const treatedText = insertedText.join("");

  return treatedText;
}
