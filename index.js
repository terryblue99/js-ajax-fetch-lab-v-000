function getIssues() {
  console.log("*** getIssues")
}

function showIssues(json) {
  console.log("*** showIssues")
}

function createIssue() {
  console.log("*** createIssue")
  const token = getToken()  
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const owner = document.getElementById('owner').value
  const repo = document.getElementById('repo').value
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: 'post',
    headers: {
    Authorization: `token ${token}`
    },
    body: JSON.stringify({
      title: title,
      body: body
    })     
  }).catch((error) => {
      console.log(error)
    })
}

function showForkedRepo(json) {
  console.log("*** json: ", json)
  document.getElementById('owner').value = json.owner.login
  document.getElementById('repo').value = json.name
  const repo = `<p><a href="https://github.com/${json.full_name}" target="_blank">Get Repo</a></p>`
  document.getElementById("results").innerHTML = repo
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork the repository
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
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
    .catch((error) => {
      console.log(error)
    })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
