/* =========================
   BJVE MODULE LOADER
   GitHub / URL loader system
========================= */

BJVE.loader = (function () {

  async function load(name, url) {

    // safety check
    if (!BJVE.internet.white) {
      console.warn("[BJVE] Blocked: White Internet is OFF");
      return;
    }

    try {
      const res = await fetch(url);
      const code = await res.text();

      // execute module safely in BJVE context
      const fn = new Function("BJVE", code);
      fn(BJVE);

      console.log("[BJVE] Loaded module:", name);

    } catch (err) {
      console.error("[BJVE] Failed to load module:", name, err);
    }
  }

  return {
    load
  };

})();
