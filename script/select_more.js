function selectMore(){

    let moreButton = document.querySelector('.more-options__btn')
    let optionsBlock = document.querySelector('.more-options__list')
    let optionsList = document.querySelectorAll('.more-options__option')
    optionsList.forEach(option => {
        option.onclick = e => {
            
            optionsList.forEach(opt => {
                opt.classList.contains('more-options__option--selected') && 
                opt.classList.remove('more-options__option--selected')
            })
            
            e.target.classList.add('more-options__option--selected')
            moreButton.innerHTML = 
            `${e.target.innerText}<span class="more-options__arrow">&#710;</span>`
            //console.log(e.target)
        }       
    })

    moreButton.addEventListener('click', showOtionsList)
    
    function showOtionsList(event){       
        event.stopPropagation()
        optionsBlock.classList.remove('hidden')
        moreButton.addEventListener('click', hideOtionsList)
        document.addEventListener('click', hideOtionsList)
        document.addEventListener('keydown', hideByEsc)

        moreButton.removeEventListener('click', showOtionsList)
        //console.log('open')
        //console.log(event)
    }
    
    function hideOtionsList(){
        moreButton.removeEventListener('click', hideOtionsList)
        optionsBlock.classList.add('hidden')
        moreButton.addEventListener('click', showOtionsList)
        document.removeEventListener('click', hideOtionsList)
        document.removeEventListener('keydown', hideByEsc)
        //console.log('close')
    }

    function hideByEsc(e){
        e.key === 'Escape' && hideOtionsList()
    } 
}

selectMore()

