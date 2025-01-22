function runCode() {
  const code = document.getElementById("codeEditor").value; // Get the code
  const outputDiv = document.getElementById("output"); // Output container

  try {
    outputDiv.innerHTML = "";
    const iFrame = document.createElement("iframe");
    iFrame.style.display = "none";
    document.body.appendChild(iFrame);

    const iFrameSize = iFrame.contentWindow;
    iFrameSize.console.log = function (...args) {
      const arrayConvertToString = args.join(",");
      const newChild = document.createElement("div");
      newChild.textContent = arrayConvertToString;
      outputDiv.appendChild(newChild);
    };

    iFrameSize.eval(code);
  } catch (error) {
    outputDiv.innerHTML = `<div style="color: red;">Error: ${error.message}</div>`;
  }
}
function clearOutput() {
  document.getElementById("output").innerHTML = ""; // Clear the output
}
