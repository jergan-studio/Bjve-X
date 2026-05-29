
/* =========================
   BJVE SCRIPT ENGINE (.bjve)
   - parser + runtime
   - supports core commands
========================= */

BJVE.script = (function () {

  /* =========================
     RUN SINGLE LINE
  ========================= */
  function runLine(line) {
    const parts = line.trim().split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    switch (cmd) {

      /* =========================
         STATE SYSTEM
      ========================= */
      case "set":
        BJVE.state.set(args[0], Number(args[1]));
        break;

      case "add":
        let current = BJVE.state.get(args[0]) || 0;
        BJVE.state.set(args[0], current + Number(args[1]));
        break;

      case "print":
        console.log("[BJVE]", BJVE.state.get(args[0]));
        break;

      /* =========================
         MODULE SYSTEM
      ========================= */
      case "run":
        BJVE.modules.use(args[0]);
        break;

      /* =========================
         UI SYSTEM (OpenDraw)
      ========================= */
      case "ui":
        BJVE.ui.open(`<h1>${args.join(" ")}</h1>`, {
          title: "BJVE UI",
          width: 300,
          height: 200
        });
        break;

      /* =========================
         INTERNET SYSTEM
      ========================= */
      case "internet":
        BJVE.internet.white = args[0] === "true";
        console.log("[BJVE] White Internet =", BJVE.internet.white);
        break;

      /* =========================
         MODULE LOADER
      ========================= */
      case "load":
        BJVE.loader.load(args[0], args[1]);
        break;

      default:
        console.warn("[BJVE SCRIPT] Unknown command:", cmd);
    }
  }

  /* =========================
     SCRIPT RUNNER
  ========================= */
  function run(scriptText) {
    const lines = scriptText.split("\n");

    for (let line of lines) {
      if (line.trim() !== "") {
        runLine(line);
      }
    }
  }

  /* =========================
     PUBLIC API
  ========================= */
  return {
    run
  };

})();
