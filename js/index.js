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
function displayRepositories(event, data) {
  let repos = JSON.parse(this.responseText)

  const repoList = "<ul>" + repos.map(repo => {
    return(`
      <li>
        <h2><a href="${repo.html_url}">${repo.name}</a></h2>
        <span><a href="#" data-repository="${repo.name}" data-username="${repo["owner"]["login"]}" onclick="getCommits(this)">Get Commits</a></span>
        <span><a href="#" data-repository="${repo.name}" data-username="${repo["owner"]["login"]}" onclick="getBranches(this)">Get Branches</a></span>
      </li>`
    )
  }).join('') + "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}
function getCommits(element) {
  const repoName = element.dataset.repository
  const userName = element.dataset.username
  const commitsURL = `${gitURL}/repos/${userName}/${repoName}/commits`

  const req = new XMLHttpRequest()

  req.addEventListener("load", displayCommits)
  req.open("GET", commitsURL)
  req.send()
}
