function init() {
  var pageUrl = encodeURI(document.location.href);
  var postTitle = "This is an application that tells you what to eat...";
  document.getElementById(
    "share-fb"
  ).href = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
  document.getElementById(
    "share-wa"
  ).href = `https://api.whatsapp.com/send?text=${postTitle} ${pageUrl}
  `;
}
init();
export default init;
