twitter.addEventListener("click", ringTwitter);

function ringTwitter() {
    window.open(
        'https://www.twitter.com/LWCvL',
        '_blank' 
      )}

github.addEventListener("click", ringGithub);

function ringGithub() {
    window.open(
        'https://www.github.com/LWCvL',
        '_blank' 
      )
}

emailIcon.addEventListener("click", ringEmail);

function ringEmail() {
  document.getElementById("emailAlert").style.display = "block";
  $("#emailAlert")
    .delay(1000)
    .fadeOut(8000);
}
