const form = document.querySelector('form')
const setup = new NLWSetup(form)
const dayButton = document.querySelectorAll('div button')[0]
const habitButton = document.querySelectorAll('div button')[1]

dayButton.addEventListener('click', addDayColumn)
form.addEventListener('change', save)

function addDayColumn(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    if(setup.dayExists(today)){
        alert('Dia já incluso')
    } else {
        setup.addDay(today)
    }

}

function addHabit(){
    //fazer
}

function save(){
    const json = JSON.stringify(setup.data)
    localStorage.setItem('NLWSetup@habits', json)
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
setup.setData(data)
setup.load()