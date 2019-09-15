// add code snippets from README

// let state = {count: 0}
 
// function reducer(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1};
//     default:
//       return state;
//   }
// }


// sets the initial state to equal zero that way there is not null or undefined returned on load and the state will be returned. The render function is at the bottom so that it will be fired last and will call the state that is set to zero... because sync JS :)
// function reducer(state = {count: 0}, action){
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       default:
//         return state;
//     }
//   }

// sets the initial state to equal zero that way there is not null or undefined returned on load and the state will be returned. The render function is at the bottom so that it will be fired last and will call the state that is set to zero... because sync JS :)
let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

//  calls the render function so that it update the state on the page when there is a change. 
function dispatch(action){
    state = reducer(state, action);
    render();
  }


  function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

  let button = document.getElementById('button');
 
button.addEventListener('click', function(){
  dispatch({type: 'INCREASE_COUNT'})
})

  dispatch({type: '@@INIT'})