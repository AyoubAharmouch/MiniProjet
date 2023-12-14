const INITIAL_STATE={
    qte :1
}
function RedcerCounter(state=INITIAL_STATE ,action){
    if(action.type === "inc"){
        return{qte : state.qte + 1}
    }
    if(action.type === "dec"){
        return{qte : state.qte - 1}
    }
    return state
}
export default RedcerCounter;