// Replacing Variables At Top Of This Document

var emailFormCard = document.getElementById("emailFormCard");
emailFormCard.innerHTML = emailFormCard.innerHTML
  .replace(/Google_Entry_ID_Name/g, Google_Entry_ID_Name)
  .replace(/ Google_Entry_ID_Email/g, Google_Entry_ID_Email)
  .replace(/ Google_Entry_ID_Subject/g, Google_Entry_ID_Subject)
  .replace(/ Google_Entry_ID_Phone/g, Google_Entry_ID_Phone)
  .replace(/ Google_Entry_ID_YourMessage/g, Google_Entry_ID_YourMessage)
  .replace(/GOOGLE_FORM_URL/g, Google_Form_Link);
