// add code snippets from README

 
function dispatch(action){
    state = reducer(state, action)
    render()
}

function render(){
    let container = document.getElementById('container') 
    container.textContent = state.count
    
} 
  dispatch({type: '@@INIT'})

let button = document.getElementById("button")

button.addEventListener('click', function(){
    dispatch({type: 'INCREASE_COUNT'})
})


