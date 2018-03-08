function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showForkedRepo(json) {
  console.log("*** json: ", json)
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
  return 'c6e33709c86589d96c7ebc966ef8acec3d2afe1e'
}
