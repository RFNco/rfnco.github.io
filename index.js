const gotoPage2 = document.getElementById("gotoPage2");

gotoPage2.onclick = function() {
    window.location.href = "page2.html";
    
}

const audioButton = document.getElementById("audioButton");
const audioControl = document.getElementById("audioControl");
const stopAudio = document.getElementById("stopAudio");

window.onload = function() {
    stopAudio.style.visibility = "visible";
}

audioButton.onclick = function() {
    if (stopAudio.style.visibility === "visible") {
      audioControl.play();
      stopAudio.style.visibility = "hidden";
    } else {
      audioControl.pause();    
      stopAudio.style.visibility = "visible";
    }
    
}

const shareLink = document.getElementById("shareLink");
const infoLinkText = document.getElementById("infoLinkText");
const copyText = "https://bit.ly/PMAEvent_FamiliyCamp2024";

const copyTextToClipboard = async () => {
  await navigator.clipboard.writeText(copyText);
}

shareLink.onclick = function() {
    copyTextToClipboard();

    setTimeout(()=> {
      shareLink.style.borderColor = "#38e66c";
      shareLink.style.color = "#38e66c";
      infoLinkText.style.color = "#38e66c";
    }, 250);
    
    setInterval (()=> {
      shareLink.style.borderColor = "#67a5d7";
      shareLink.style.color = "#85b8e2";
      infoLinkText.style.color = "#ffffff";
    }, 2500);
    
}

const mapLink = document.getElementById("mapLink");
const displayMap = document.getElementById("displayMap");
const blurMap = document.getElementById("blurMap");

mapLink.onclick = function() {
  displayMap.style.display = "flex";
  blurMap.style.display = "flex";
}

blurMap.onclick = function() {
  displayMap.style.display = "none";
  blurMap.style.display = "none";
}



