function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}


function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
    Authorization: `token ${token}`
    }
  }).then(res => console.log(res))

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
