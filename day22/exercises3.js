import asabenehChallenges2020 from './challenge_info.js'

function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const wrapper = document.querySelector('.wrapper')
wrapper.style.textAlign = 'center'
wrapper.style.width = '50%'
wrapper.style.margin = 'auto'
const year = document.querySelector('#year')
year.style.fontSize = '64px'

const title = document.querySelector('h2')
title.style.textDecoration = 'underline'
title.style.fontSize = '26px'
title.style.fontWeight = '100'

const time = document.createElement('div')
time.style.display = 'inline'
time.style.width = 'min-content'
time.style.fontSize = '18px'
time.style.padding = '5px 10px'
title.parentNode.insertBefore(time, title.nextSibling)

setInterval(function () {
  year.style.color = getRandomColor()
  time.innerHTML = new Date()
  time.style.backgroundColor = getRandomColor()
}, 1000)

const challengeWrapper = document.createElement('div')
challengeWrapper.style.margin = '20px auto'
challengeWrapper.style.display = 'flex'
challengeWrapper.style.flexDirection = 'column'
challengeWrapper.style.alignItems = 'center'
challengeWrapper.style.fontSize = '1.5rem'
wrapper.appendChild(challengeWrapper)

const challenges = asabenehChallenges2020.challenges
for (const challenge of challenges) {
  const challengeBox = document.createElement('div')
  challengeBox.style.display = 'flex'
  challengeBox.style.width = '100%'
  challengeBox.style.padding = '10px 10px'
  challengeBox.style.margin = '5px 0px'
  challengeBox.style.display = 'flex'
  challengeBox.style.alignItems = 'center'
  // create challenge name
  const challengeNameBox = document.createElement('div')
  challengeNameBox.style.width = '50%'
  challengeNameBox.style.textAlign = 'left'
  if (challenge.githubUrl !== '') {
    const challengeHyperLink = document.createElement('a')
    challengeHyperLink.innerHTML = challenge.name
    challengeHyperLink.href = challenge.githubUrl
    challengeNameBox.appendChild(challengeHyperLink)
  } else challengeNameBox.innerHTML = challenge.name
  challengeBox.appendChild(challengeNameBox)
  // create challenge topic
  const challengeTopic = document.createElement('details')
  challengeTopic.style.width = '30%'
  challengeTopic.style.textAlign = 'left'
  const challengeSummary = document.createElement('summary')
  challengeSummary.innerHTML = challenge.name.replace('30 Days Of ', '')
  challengeTopic.appendChild(challengeSummary)
  const challengeTopicList = document.createElement('ul')
  challengeTopicList.style.listStyleType = 'none'
  challengeTopicList.style.padding = '0'
  for (let i = 0; i < challenge.topics.length; i++) {
    const challengeTopicItem = document.createElement('li')
    challengeTopicItem.innerHTML = challenge.topics[i]
    challengeTopicList.appendChild(challengeTopicItem)
  }
  challengeTopic.appendChild(challengeTopicList)
  challengeBox.appendChild(challengeTopic)
  // create challenge status
  const challengeStatus = document.createElement('div')
  challengeStatus.innerHTML = challenge.status
  challengeStatus.style.width = '20%'
  challengeStatus.style.textAlign = 'right'
  if (challengeStatus.innerHTML.includes('Done')) { challengeBox.style.backgroundColor = '#00ffa3' } else if (challengeStatus.innerHTML.includes('Ongoing')) { challengeBox.style.backgroundColor = '#e4a026' } else { challengeBox.style.backgroundColor = '#b62226' }

  challengeBox.appendChild(challengeStatus)

  challengeWrapper.appendChild(challengeBox)
}

const authorNameBox = document.createElement('p')
authorNameBox.innerHTML = 'Asabeneh Yetayeh'
authorNameBox.style.fontSize = '30px'
authorNameBox.style.fontWeight = '700'
wrapper.appendChild(authorNameBox)

const author = asabenehChallenges2020.author
const contacts = author.socialLinks

const contactContanier = document.createElement('div')
contactContanier.style.display = 'flex'
contactContanier.style.alignItems = 'center'
contactContanier.style.margin = '20px auto'
contactContanier.style.width = 'min-content'
for (const contact of contacts) {
  const contactItemHyperLink = document.createElement('a')
  contactItemHyperLink.href = contact.url
  contactItemHyperLink.innerHTML = contact.fontawesomeIcon
  contactItemHyperLink.style.color = 'black'
  const contactItem = document.createElement('div')
  contactItem.style.fontSize = '44px'
  contactItem.style.margin = '0px 10px'
  contactItem.append(contactItemHyperLink)

  contactContanier.appendChild(contactItem)
}
wrapper.appendChild(contactContanier)

const authorBioContainer = document.createElement('div')
const authorBio = author.bio

authorBioContainer.innerHTML = authorBio
wrapper.appendChild(authorBioContainer)

const experiencesContainer = document.createElement('div')
experiencesContainer.style.display = 'flex'
experiencesContainer.style.textAlign = 'left'
experiencesContainer.style.justifyContent = 'space-between'
experiencesContainer.style.margin = '20px 0px'
const titles = author.titles
const titlesContainer = document.createElement('div')
titlesContainer.style.display = 'flex'
titlesContainer.style.flexDirection = 'column'
titlesContainer.style.textAlign = 'left'
const titlesContainerHeader = document.createElement('div')
titlesContainerHeader.innerHTML = 'Titles'
titlesContainerHeader.style.fontWeight = '600'
titlesContainerHeader.style.margin = '5px 0px'
titlesContainer.appendChild(titlesContainerHeader)
for (const title of titles) {
  const titleItem = document.createElement('div')
  titleItem.innerHTML = title[0] + ' ' + title[1]
  titlesContainer.appendChild(titleItem)
}
experiencesContainer.appendChild(titlesContainer)

const skills = author.skills
const skillsContainer = document.createElement('div')
skillsContainer.style.display = 'flex'
skillsContainer.style.flexDirection = 'column'
const skillsContainerHeader = document.createElement('div')
skillsContainerHeader.innerHTML = 'Skills'
skillsContainerHeader.style.fontWeight = '600'
skillsContainerHeader.style.margin = '5px 0px'
skillsContainer.appendChild(skillsContainerHeader)
for (const skill of skills) {
  const skillItem = document.createElement('div')
  const iconCheckSquare = '<i style="color: green" class="fa fa-check-square"></i>'
  skillItem.innerHTML = iconCheckSquare + ' ' + skill
  skillsContainer.appendChild(skillItem)
}

experiencesContainer.appendChild(skillsContainer)

const qualificationsContainer = document.createElement('div')
qualificationsContainer.style.display = 'column'
const qualificationsContainerHeader = document.createElement('div')
qualificationsContainerHeader.innerHTML = 'Qualifications'
qualificationsContainerHeader.style.margin = '5px 0px'
qualificationsContainerHeader.style.fontWeight = '600'
qualificationsContainer.appendChild(qualificationsContainerHeader)
const qualifications = author.qualifications

for (const qualification of qualifications) {
  const qualificationItem = document.createElement('div')
  let qualificationIcon = ''
  if (qualification.includes('Ongoing')) {
    qualificationIcon = '📖'
  } else qualificationIcon = '👨‍🎓'
  qualificationItem.innerHTML = qualificationIcon + ' ' + qualification
  qualificationsContainer.appendChild(qualificationItem)
}

experiencesContainer.appendChild(qualificationsContainer)

wrapper.appendChild(experiencesContainer)

const keywordsContainer = document.createElement('div')
keywordsContainer.style.textAlign = 'left'
const keywordsContainerHeader = document.createElement('div')
keywordsContainerHeader.innerHTML = 'Keywords'
keywordsContainerHeader.style.fontWeight = '600'
keywordsContainerHeader.style.margin = '0px 30px'
keywordsContainer.appendChild(keywordsContainerHeader)
const keywords = asabenehChallenges2020.keywords
const keywordsContainerList = document.createElement('div')
keywordsContainerList.style.display = 'flex'
keywordsContainerList.style.flexWrap = 'wrap'
keywordsContainerList.style.marginLeft = '80px'
keywordsContainerList.style.marginTop = '10px'
for (const keyword of keywords) {
  const keywordsItem = document.createElement('div')
  keywordsItem.style.borderRadius = '20px'
  keywordsItem.style.padding = '5px 10px'
  keywordsItem.style.marginRight = '10px'
  keywordsItem.style.marginBottom = '10px'
  keywordsItem.innerHTML = '# ' + keyword
  keywordsItem.style.backgroundColor = getRandomColor()
  keywordsContainerList.appendChild(keywordsItem)
}
keywordsContainer.appendChild(keywordsContainerList)
wrapper.appendChild(keywordsContainer)
