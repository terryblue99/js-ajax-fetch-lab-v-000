function getIssues() {
  console.log("*** getIssues")
}

function showIssues(json) {
  console.log("*** showIssues")
}

function createIssue() {
  console.log("*** createIssue")
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const repo = document.getElementById("results").innerHTML
  console.log("*** createIssue repo:", repo)
}

function showForkedRepo(json) {
  console.log("*** json: ", json)
  const repo = `<p><a href="https://github.com/${json.full_name}" target="_blank">Get Repo</a></p>`
  document.getElementById("results").innerHTML = repo
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork the repository
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
    Authorization: `token ${token}`
    }
    
  })// return the forked repository
    .then(function(result) {
      return result.json()
    })
    .then(function(result) {
      showForkedRepo(result)
    }) 
    .catch(function(error) {
        console.log(error)
    })

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '535db158c925e9dd44e3d7f3a68dbe836a24bf6c'
}
