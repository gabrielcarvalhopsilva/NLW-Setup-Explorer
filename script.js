const form = document.querySelector('form')
const setup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)
function add(){

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