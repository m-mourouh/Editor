
window.onload = function () {
  let editor = CodeMirror(
    document.getElementById("editor"), 
    {
    // mode: "text/html",
    mode: "javascript",
    extraKeys: { "Ctrl-Space": "autocomplete" },
    theme: "ayu-mirage",
    lineNumbers: true,
    autoCloseTags: true,
    fullScreen: true,
    closeOnEnter: true,
    autoCloseBrackets: true,
    matchTags: {bothTags: true},
    profile: 'html'
    // value: document.documentElement.innerHTML
    // comment: true
  });
  //   editor.setSize("200","200")
  emmetCodeMirror(editor);
};

