
/* =========================
   CLICKER MODULE
========================= */

BJVE.modules.register("clicker", function () {

  let coins = BJVE.state.get("coins") || 0;
  coins++;

  BJVE.state.set("coins", coins);

  console.log("[BJVE] Coins:", coins);

});
