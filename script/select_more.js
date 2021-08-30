function selectMore(){
    let optionsList = document.querySelectorAll('.more-options__option')
    optionsList.forEach(option => {
        option.onclick = e => {
            
            optionsList.forEach(opt => {
                opt.classList.contains('more-options__option--selected') && 
                opt.classList.remove('more-options__option--selected')
            })
            
            e.target.classList.add('more-options__option--selected')
            document.querySelector('.more-options__btn').innerHTML = 
            `${e.target.innerText}<span class="more-options__arrow">&#710;</span>`
            console.log(e.target)
        }
        
    })

    document.querySelector('.more-options__btn').addEventListener('click', showOtionsList)

    
    function showOtionsList(){
        let optionsBlock = document.querySelector('.more-options__list')

        optionsBlock.classList.contains('hidden') ?
        optionsBlock.classList.remove('hidden') :
        optionsBlock.classList.add('hidden')

    }

    function hideOtionsList(){
        document.querySelector('.more-options__list').classList.add('hidden')
    }

    //more-options__list
}
selectMore()

