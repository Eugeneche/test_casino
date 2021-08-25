
//console.log(options)

document.getElementById('languages').addEventListener('change', setLanguage)

function getValue(){
    let currentValue = document.getElementById('#languages option').value
}

function setLanguage(){
    let currentValue = document.getElementById('languages').value
    document.querySelector('label[for="languages"]').innerHTML = `<span>${currentValue}</span><span><img src="img/logo_icons/${currentValue}.png" alt="language sign"></span>`
}