
let updatePreview = () => {
  let editorInput = document.getElementById("editor").value
  let markdown = marked(editorInput)
  document.querySelector(".preview").innerHTML = markdown
}

window.onload = () => {
  document.getElementById("editor").addEventListener("input", updatePreview)
}
