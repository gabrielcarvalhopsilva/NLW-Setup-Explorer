const form = document.querySelector('form')
const setup = new NLWSetup(form)

const newDayButton = document.querySelectorAll('div button')[0]
const newHabitButton = document.querySelectorAll('div button')[1]

const divModal = document.querySelector('.modal-fullscreen')
const closeNewHabit = document.querySelector('.closeButton')
const addNewHabitButton = document.querySelector('.addNewHabitButton')

newDayButton.addEventListener('click', addDayColumn)
form.addEventListener('change', save)
newHabitButton.addEventListener('click', () => divModal.style.display = 'flex')
closeNewHabit.addEventListener('click', () => divModal.style.display = 'none')
addNewHabitButton.addEventListener('click', addHabit)

console.log('💧')
function addHabit(){
    const newHabit = document.createElement('div')
    const habitList = document.querySelector('.habits')

    const habitInput = document.querySelectorAll('.modalInput')[0]
    const emojiInput = document.querySelectorAll('.modalInput')[1]

    habitList.appendChild(newHabit)
    newHabit.className = 'habit'
    newHabit.setAttribute('data-name', habitInput.value)
    newHabit.innerText = emojiInput.value
}

function addDayColumn(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    if(setup.dayExists(today)){
        alert('Dia já incluso')
    } else {
        setup.addDay(today)
    }

}

function save(){
    const json = JSON.stringify(setup.data)
    localStorage.setItem('NLWSetup@habits', json)
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
setup.setData(data)
setup.load()