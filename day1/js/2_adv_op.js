function executeOk () {
    console.log("ExecuteOk");
}

let result = true;
result && executeOk();

result = false;
result && executeOk();

result = undefined;
result && executeOk();

let svGetName = "HelloMan";
console.log (svGetName || "DefaultMan");

svGetName = null;
console.log (svGetName || "DefaultMan");

svGetName = "HelloMan";
console.log (svGetName ? "Hello1" : "Goodbye1");

svGetName = null;
console.log (svGetName ? "Hello1" : "Goodbye1");