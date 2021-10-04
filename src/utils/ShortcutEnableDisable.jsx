const addShortcutsKeyboard = () => {
  document.onkeydown = function (e) {
    // console.log(e);
    // return false;
    if (
      e.key === "Escape" ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.key === "Home"
    )
      return false;
  };
};

const removeShortcutsKeyboard = () => {
  document.onkeydown = function (e) {
    return true;
  };
};

////////////////////////////////////////////////////////////

// FULLSCREEN

const makeWindowFullScreen = () => {
  // console.log(window.isFullScreen());
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  }
};

const makeExitWindowFullScreen = () => {
  var doc = window.document;

  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    doc.fullscreenElement &&
    doc.mozFullScreenElement &&
    doc.webkitFullscreenElement &&
    doc.msFullscreenElement
  ) {
    cancelFullScreen.call(doc);
  }
};

export {
  addShortcutsKeyboard,
  removeShortcutsKeyboard,
  makeWindowFullScreen,
  makeExitWindowFullScreen,
};
