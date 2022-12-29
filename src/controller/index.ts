// import { loginUserPut, createUserPost, loginUserGet } from "./user"
import { createUserPost, loginUserPut, loginUserGet, recoverUserPost, recoverPasswordUserPost } from "./auth";
import { createQuestion, getQuestion, updateQuestion, deleteQuestion } from "./question"
import { createQuiz, getQuiz, updateQuiz, deleteQuiz, submitQuiz } from "./quiz"
import { getResult } from "./result";


export {
    loginUserPut,
    createUserPost,
    loginUserGet,
    recoverUserPost,
    recoverPasswordUserPost,
    createQuiz,
    getQuiz,
    updateQuiz,
    deleteQuiz,
    submitQuiz,
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    getResult

}