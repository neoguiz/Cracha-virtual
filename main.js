function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

const links = {
  github: 'neoguiz',
  youtube: 'rocketseat',
  facebook: 'maykbrito',
  instagram: 'neo.guiz',
  twitter: 'amomulhersafada'
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let bio = document.getElementById('bio')
      bio.innerHTML = data.bio
      UserProfile.src = data.avatar_url
      userGitHub.href = `https://github.com/${links.github}`
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
