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

function getGitHubProfileInfos(){
  
}