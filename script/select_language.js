const languages = [
    [{'value': 'EN'}, {'text': 'english'}], 
    [{'value': 'DE'}, {'text': 'deutsch'}],
    [{'value': 'UA'}, {'text': 'українська'}],
    [{'value': 'RU'}, {'text': 'русский'}],
]

function selectLanguage(itemsArray){

    let currentLanguage = itemsArray[0][0]['value']
    
    let select = document.createElement('div')
    select.classList.add(`select-languages`)
    document.querySelector('.main-menu-top__language-block').appendChild(select)
    
    let selectItems =  `<div class="select-languages__label language-list-hidden">
                            <span class="current-language-code">${currentLanguage}</span>
                            <img class="current-language-flag" src="img/logo_icons/EN.png" alt="english language sign">
                            <img src="img/logo_icons/arrow_down.svg" id="top-languages-select" alt="language selection">
                        </div>
                        <div class="select-languages__active hidden">`
    itemsArray.map(item => {
        return selectItems += `<div class="select-languages__item" data-value="${item[0]['value']}">${item[1]['text']}</div>`
    })
    selectItems += `</div>`

    document.querySelector('.main-menu-top__language-block').insertAdjacentHTML('afterbegin', selectItems)

    document.querySelector('.select-languages__label.language-list-hidden').addEventListener('click', showItemList)

    function showItemList(){

        document.querySelector('img#top-languages-select').style = 'transform: scale(1, -1); transition: 0,5s;'
        function showFirstItem(){
            if (document.querySelector('.select-languages__active.hidden')) { 
            let firstEl = document.querySelector('.select-languages__active.hidden').firstChild
            firstEl.style.cssText = 'display: block;'
            setTimeout(() => showNextItem(firstEl.nextSibling), 50)
            }            
        }
        showFirstItem()

        function showNextItem(node){
            node.style.cssText = 'display: block;'
            document.querySelector('.select-languages__active').classList.remove('hidden')
            document.querySelector('.select-languages__active').classList.add('shown')
            node.nextSibling && setTimeout(() => showNextItem(node.nextSibling), 50)  
             
            document.addEventListener('keydown', hideByEsc) 
            document.addEventListener('click', hideItemList)          
        }
        document.querySelector('.select-languages__label').classList.remove('language-list-hidden')
        document.querySelector('.select-languages__label').classList.add('language-list-shown')     
    }

    document.querySelector('.select-languages__label.language-list-shown') && 
    document.querySelector('.select-languages__label.language-list-shown').addEventListener('click', hideItemList)

    function hideItemList(){
        
        document.querySelector('img#top-languages-select').style = 'transform: scale(1, 1); transition: 0,5s;'
        function hideLastItem(){
            if (document.querySelector('.select-languages__active.shown')) {
            let lastEl = document.querySelector('.select-languages__active.shown').lastChild
            lastEl.style.cssText = 'display: none;'
            setTimeout(() => hidePreviousItem(lastEl.previousSibling), 50)
            }
        }
        hideLastItem()
        function hidePreviousItem(node){
            node.style.cssText = 'display: none;'
            document.querySelector('.select-languages__active').classList.remove('shown')
            document.querySelector('.select-languages__active').classList.add('hidden')
            node.previousSibling && setTimeout(() => hidePreviousItem(node.previousSibling), 50)    
        }

        document.querySelector('.select-languages__label').classList.remove('language-list-shown')
        document.querySelector('.select-languages__label').classList.add('language-list-hidden')
        document.removeEventListener('keydown', hideByEsc)
        document.removeEventListener('click', hideItemList)
    }
    
    document.querySelectorAll('.select-languages__item').forEach(item => {
        item.onclick = setLanguage
    })

    function setLanguage(){
        document.querySelector('.current-language-code').innerText = this.getAttribute("data-value")
        document.querySelector('.current-language-flag').outerHTML = `<img class="current-language-flag" src="img/logo_icons/${this.getAttribute("data-value")}.png" alt="english language sign">`
        hideItemList()
    }

    function hideByEsc(e){
        e.key === 'Escape' && hideItemList()
    }   
}

selectLanguage(languages)

