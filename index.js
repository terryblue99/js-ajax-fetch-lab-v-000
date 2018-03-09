const githubApi = 'https://api.github.com'

function getIssues() {
  console.log("*** getIssue")
  const owner = document.getElementById('owner').value
  fetch(`${githubApi}/repos/${owner}/javascript-fetch-lab/issues`)
    .then(function(result) {
      // return the issues
      return result.json()
    })
    .then(function(result) {
      showIssues(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

function showIssues(json) {
  console.log("*** showIssues")
  const issueList = `<ul>${json.map(i => '<li>' + i.title).join('')}</ul>`
  document.getElementById("issues").innerHTML = issueList
}

function createIssue() {
  console.log("*** createIssue")
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const owner = document.getElementById('owner').value
  fetch(`${githubApi}/repos/${owner}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  }).then(function() {
      getIssues()
    })
    .catch((error) => {
      console.log(error)
    })
}

function showForkedRepo(json) {
  console.log("*** showForkedRepo")
  console.log("*** showForkedRepo json", json)
  // set the owner login in HTML hidden field for use in
  // the createIssue and getIssues functions
  document.getElementById('owner').value = json.owner.login
  const repo = `<p><a href="https://github.com/${json.full_name}" target="_blank">Get Repo</a></p>`
  console.log("*** showForkedRepo repo", repo)
  document.getElementById("results").innerHTML = repo
}

function forkRepo() {
  console.log("*** ForkRepo")
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork the repository
  fetch(`${githubApi}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
    }

  }).then(function(result) {
      // return the forked repository
      return result.json()
    })
    .then(function(result) {
      showForkedRepo(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

function getToken() {
  console.log("*** getToken")
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
