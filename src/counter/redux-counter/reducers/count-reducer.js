const initialState ={
    count :0
}
const reducer = ( prevState = initialState, action ) => {
    console.log("down")
    switch (action.type){
        case "UP":
            return{

                count : prevState.count +1
            }
        case "DOWN":
            return{
                count : prevState.count -1
            }
        case "CLEAR":
            return {
                count :0
            }
        default :
            return prevState
    }
}
export default reducer