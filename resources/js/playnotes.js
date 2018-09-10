document.addEventListener("DOMContentLoaded", function(event) {
  const cNote = document.getElementById("cnote");
  const dNote = document.getElementById("dnote");
  const eNote = document.getElementById("enote");
  const fNote = document.getElementById("fnote");
  const gNote = document.getElementById("gnote");
  const aNote = document.getElementById("anote");
  const bNote = document.getElementById("bnote");

  let fadebox;

    function fadeOut(fadebox) {
      let id = setInterval (dim, 100)
      let bright = 1;
      function dim() {
        if (bright <= 0.5) {
        clearInterval(id);
      } else {
        fadebox.style.opacity = bright;
        bright -= 0.1;
        }
      }
    }

  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "a":
        fadebox = document.getElementById("ckey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        cNote.play();
        cNote.currentTime = 0
        break;
      case "s":
        fadebox = document.getElementById("dkey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        dNote.play();
        dNote.currentTime = 0;
        break;
      case "d":
        fadebox = document.getElementById("ekey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        eNote.play();
        eNote.currentTime = 0;
        break;
      case "f":
        fadebox = document.getElementById("fkey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        fNote.play();
        fNote.currentTime = 0;
        break;
      case "g":
        fadebox = document.getElementById("gkey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        gNote.play();
        gNote.currentTime = 0;
        break;
      case "h":
        fadebox = document.getElementById("akey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        aNote.play();
        aNote.currentTime = 0;
        break;
      case "j":
        fadebox = document.getElementById("bkey");
        fadebox.style.opacity = 1;
        fadeOut(fadebox);
        bNote.play();
        bNote.currentTime = 0;
        break;
    }
  }, true);

  document.getElementById("ckey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("ckey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    cNote.currentTime = 0;
    cNote.play();
  });
  document.getElementById("dkey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("dkey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    dnote.currentTime = 0;
    dNote.play();
  });
  document.getElementById("ekey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("ekey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    eNote.currentTime = 0;
    eNote.play();
  });
  document.getElementById("fkey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("fkey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    fNote.currentTime = 0;
    fNote.play();
  });
  document.getElementById("gkey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("gkey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    gNote.currentTime = 0;
    gNote.play();
  });
  document.getElementById("akey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("akey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    aNote.currentTime = 0;
    aNote.play();
  });
  document.getElementById("bkey").addEventListener("click", function functionName() {
    fadebox = document.getElementById("bkey");
    fadebox.style.opacity = 1;
    fadeOut(fadebox);
    bNote.currentTime = 0;
    bNote.play();
  });
});
