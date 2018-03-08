function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showForkedRepo(json) {
  console.log("*** json.full_name: ", json.full_name)
  console.log("*** json: ", json)
  const repo = `<p><li><a href="https://github.com/${json.full_name}" target="_blank">Get Repo</a></p>`
  document.getElementById("results").innerHTML = repo
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
  return '75520947b97932e7625de06a49f2b2c8b9fa19c5'
}
