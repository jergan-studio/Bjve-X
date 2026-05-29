
/* =========================
   BJVE SCRIPT ENGINE (.bjve)
========================= */

BJVE.script = (function () {

  function runLine(line) {
    const parts = line.trim().split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    switch (cmd) {

      // set variable
      case "set":
        BJVE.state.set(args[0], Number(args[1]));
        break;

      // add value
      case "add":
        let v = BJVE.state.get(args[0]) || 0;
        BJVE.state.set(args[0], v + Number(args[1]));
        break;

      // print value
      case "print":
        console.log("[BJVE]", BJVE.state.get(args[0]));
        break;

      // run module
      case "run":
        BJVE.modules.use(args[0]);
        break;

      // open UI window
      case "ui":
        BJVE.ui.open(`<h1>${args.join(" ")}</h1>`, {
          title: "BJVE UI",
          width: 300,
          height: 200
        });
        break;

      default:
        console.warn("[BJVE SCRIPT] Unknown command:", cmd);
    }
  }

  return {

    run(scriptText) {
      const lines = scriptText.split("\n");

      for (let line of lines) {
        if (line.trim() !== "") {
          runLine(line);
        }
      }
    }

  };

})();
