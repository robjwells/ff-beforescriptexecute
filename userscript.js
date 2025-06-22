// ==UserScript==
// @name        Localhost intercept script
// @match       http://localhost*/
// @version     1.0
// @description 22/06/2025, 15:21:10
// @run-at      document-start
// @inject-into page
// ==/UserScript==

new MutationObserver(async (mutations, observer) => {
  mutations.forEach(({ addedNodes }) => {
    addedNodes.forEach(node => {
      if (node.nodeType == 1 && node.tagName == "SCRIPT") {
        const src = node.src || '';
        if (src.match("main\.js")) {
          node.type = "text/plain";
          console.log("userscript.js executed");
          addEventListener("load", () => {
            document.querySelector("#userscript-target").textContent = "userscript.js executed";
          })
        }
      }
    })
  })
})
  .observe(document.documentElement, { childList: true, subtree: true });
