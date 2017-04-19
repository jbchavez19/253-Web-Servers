
let updatePreview = () => {
  let editorInput = document.getElementById("editor").value
  let markdown = marked(editorInput)
  document.querySelector(".preview").innerHTML = markdown
}

let newFile = () => {
  let newFileName = prompt('Enter file name')
  fetch('/actions/new/?fileName=' + newFileName, {
    method: 'get',
    headers: {
      "Content-Type": "text/plain"
    }
  })
  .then((response) => {
      return response.text()
  })
  .then((response) => {
    if(response == '1') {
      let li = document.createElement("li");
      li.innerHTML = '<a href="' + newFileName + '"> ' + newFileName + '</a>';
      document.querySelector(".file-tree").appendChild(li);
    }
  })
}

let getFileName = () => {
  let fileName = window.location.pathname;
  return fileName.match(/\/(.*)/)[1];
}

let save = (file) => {
  let editorInput = document.getElementById("editor").value
  fetch('/actions/save?fileName=' + file, {
    method: 'post',
    headers: {
      "Content-Type": "text/plain"
    },
    body: editorInput
  })
  .then((response) => {
    return response.text()
  })
  .then((response) => {
    document.cookie = "lastEdited=" + file;
  })
  .catch(console.log)
}

let load = (file) => {
  fetch('/actions/load?fileName=' + file, {
    method: 'get',
    headers: {
      "Content-Type": "text/plain"
    }
  })
  .then((response) => {
      return response.text()
  })
  .then((response) => {
    document.getElementById("editor").value = response
    updatePreview()
  })
}


window.onload = () => {
  document.getElementById("editor").addEventListener("input", updatePreview);
  document.getElementById("save").addEventListener("click",() => {
    save(getFileName());
  });
  load(getFileName());
  document.getElementById("new-file").addEventListener("click", newFile);
}
