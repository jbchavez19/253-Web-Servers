let countWords = (string) => {
  let words = string.replace(/[^a-zA-Z0-9\s]/g, '');
  words = words.replace(/[\s]{2,}/g, ' ');
  words = words.replace(/^\s/g, '');
  words = words.replace(/\n/g, ' ');
  words = words.replace(/\s\s/g, ' ');
  words = words.replace(/\s$/g, '');
  words = words.split(' ');
  console.log(words);
  if(words.length == 1 && words[0] == '')
    return 0;
  return words.length;
}

let updatePreview = () => {
  let editorInput = document.getElementById("editor").value;
  let markdown = marked(editorInput);
  document.querySelector(".preview").innerHTML = markdown;
  document.getElementById("words").innerHTML = countWords(editorInput);
}

let newFile = () => {
  let newFileName = prompt('Enter file name')
  if(!newFileName.match(/.md/))
    newFileName += ".md";
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
      li.className = "file-tree-item";
      li.innerHTML = '<a href="' + newFileName + '"> ' + newFileName + '</a>' +
      '<a href="/actions/delete?fileName=' + newFileName +
      '"><i class="fa fa-trash"> </i></a>';
      document.querySelector(".file-tree").appendChild(li);
    }
  })
}

let getFileName = () => {
  let fileName = window.location.pathname;
  if(fileName == '/ExampleFile.md')
    document.getElementById("editor").setAttribute("readonly", true);
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
