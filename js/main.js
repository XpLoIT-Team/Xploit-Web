const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

const url = window.location.href
const url_title = urlParams.get('titulo')
const url_author = urlParams.get('autor')
const url_release = urlParams.get('ano')


const title = document.getElementById('title')
const author = document.getElementById('author')
const release = document.getElementById('release')


title.append(url_title)
author.append(url_author)
release.append(url_release)

console.log(url)
