import React, {useEffect}from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import{useParams} from "react-router-dom";
import lessonService from "../services/lesson-service";


const LessonTabs = ({lessons= [],
                        findLessonsForModule,
                        to,
                        createLesson,
                        updateLesson,
                        deleteLesson
                    }) =>
{
    const {layout,lessonId,moduleId,courseId} = useParams();
    useEffect(()=>{
        if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
            findLessonsForModule(moduleId)}
    },[moduleId])
    return(
        <div>

            <nav className="navbar navbar-dark ">

                <ul className=" nav nav-tabs ">

                    {
                        lessons.map(lesson=>
                            <li className="nav-item  " >
                                <a className={`nav-link ${lesson._id === lessonId ?'bg-primary': ''} `} href="#">
                                    <EditableItem
                                        key={lesson._id}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                        deleteItem={deleteLesson}
                                        updateItem={updateLesson}
                                        item={lesson}/></a>

                            </li>


                        )



                    }
                    <li> <button onClick={()=>createLesson(moduleId)}
                                 className=" float-right fa fa-plus"> </button></li>

                </ul>

            </nav>


        </div>



    )
}

const stpm = (state) => ({
    lessons : state.lessonReducer.lessons
})

const dtpm  =(dispatch) =>({



    createLesson: (moduleId) =>{
        lessonService.createLesson(moduleId,{title:'new Lesson'}).then(lesson =>dispatch({type: "CREATELESSON", lesson:lesson}))
    },
    updateLesson:(newItem) => {
        dispatch({type:"UPDATELESSON", updateLesson:newItem})
    },
    deleteLesson:  (lessonToDelete) =>{
        dispatch({type:"DELETELESSON",deleteLesson:lessonToDelete})
    },
    findLessonsForModule:(moduleId) =>{

        lessonService.findLessonsForModule(moduleId).then(lessons =>{dispatch({type:"FIND_LESSONS_FOR_MODULE",lessons:lessons})})
    }
})

export default (connect(stpm,dtpm))(LessonTabs)