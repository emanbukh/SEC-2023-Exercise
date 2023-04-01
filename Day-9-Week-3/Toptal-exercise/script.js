// get input
window.addEventListener("keydown", (e) => {
  document.getElementById("input").innerText = `JavaScript Key Code ${e.which}`;
  document.getElementById("e-key").innerText = `${e.key}`;
  document.getElementById("e-code").innerText = `${e.code}`;
  document.getElementById("e-which").innerText = `${e.which}`;
  document.getElementById("keycode").innerText = `${e.which}`;

  // Print location of keydown based on its event.location = 0, 1, 2, 3
  if (e.location === 0) {
    document.getElementById("e-location").innerText = "General Keys";
  } else if (e.location === 1) {
    document.getElementById("e-location").innerText = "Left-side modifier keys";
  } else if (e.location === 2) {
    document.getElementById("e-location").innerText =
      "Right-side modifier keys ";
  } else {
    document.getElementById("e-location").innerText = "Numpad";
  }

  // print event.dump
  const obj = {
    Key: e.key,
    KeyCode: e.which,
    Which: e.which,
    code: e.code,
    location: e.location,
    altKey: e.altKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    repeat: e.repeat,
  };
  document.getElementById("e-dump").innerText = JSON.stringify(obj, null, 4);
});
