import editorAnalyzer from "./editorAnalyzer.js";
import placeholder from "./placeholder.js";
import '../src/style/index.css';


const pageToConvert = document.getElementById("editor");
document.getElementById("paragraph").focus();

editorAnalyzer(pageToConvert);
placeholder();