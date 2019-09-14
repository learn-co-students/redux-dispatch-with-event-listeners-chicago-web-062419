// add code snippets from README
let state
// let action = {
//   type: "INCREASE"
// }
const countButton = document.getElementById("button")

const reducer = (state={count: 0}, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'INCREASE':
      return {count: state.count+1}
    default:
      return state
  }
}

const dispatch = action => {
  state = reducer(state, action)
  // console.log('hi')
  render()
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}
 
dispatch({type: '@@INIT'})

countButton.addEventListener('click', () => dispatch({type: 'INCREASE'}))
// countButton.addEventListener('click', console.log('sup'))