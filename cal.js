let output = document.getElementById("output");
    function appendToOutput(value) {
      if (output.innerHTML === "0") {
        output.innerHTML = value;
      } else {
        output.innerHTML += value;
      }
    }
    function clearOutput() {
      output.innerHTML = "0";
    }
    function calculateResult() {
      try {
        let result = eval(output.innerHTML);
        output.innerHTML = result;
      } catch (e) {
        output.innerHTML = "Error";
      }
    }