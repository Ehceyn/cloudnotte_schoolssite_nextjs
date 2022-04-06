function htmlDecode(content) {
  var doc =
    process.browser && new DOMParser().parseFromString(content, "text/html");
  return process.browser && doc.documentElement.textContent;
}
