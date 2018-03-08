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
  const ownerRepo = document.getElementById('ownerRepo').value
  console.log("*** createIssue ownerRepo:", ownerRepo)
}

function showForkedRepo(json) {
  console.log("*** json: ", json)
  document.getElementById('ownerRepo').value = json.full_name
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
  return '8b4992e8e35f498ec259b292f381c6ce5fbd1b43'
}
