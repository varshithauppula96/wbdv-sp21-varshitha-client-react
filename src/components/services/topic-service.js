import {createModule, deleteModule, findModulesForCourse, updateModule} from "./module-services";

const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/1234/lessons"
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/1234/topics"

export const createTopic = (lessonId,topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (LessonId) =>
    fetch(`${LESSONS_URL}/${LessonId}/topics`)
        .then(response => response.json());




export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());
const api = {
    findTopicsForLesson, createTopic,deleteTopic, updateTopic
}

export default api;