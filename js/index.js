// your code here
const gitURL = "https://api.github.com"

function getRepositories() {
  let userName = document.getElementById('username').value
  let repoURL = `${gitURL}/users/${userName}/repos`

  const req = new XMLHttpRequest()

  req.addEventListener("load", displayRepositories)
  req.open("GET", repoURL )
  req.send()
  return false;
}