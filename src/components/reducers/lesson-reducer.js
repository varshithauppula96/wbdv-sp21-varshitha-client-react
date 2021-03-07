const initialState ={
    lessons:[]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATELESSON":

            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "DELETELESSON": return{
            ...state,
            lessons: state.lessons.filter(
                lesson => {
                    if(lesson._id !== action.lessonToDelete._id)
                    {
                        return true
                    }
                    else{
                        return false
                    }
                })
        }
        case "UPDATELESSON": return{
            ...state,
            lessons:state.lessons.map(lesson =>{
                if(lesson._id === action.updateLesson._id){
                    return action.updateLesson
                }
                else
                {
                    return lesson
                }
            })
        }
        case "FIND_LESSONS_FOR_MODULE":
            return{
                ...state,
                lessons:action.lessons,

            }

        default:
            return state


    }
}
export default lessonReducer