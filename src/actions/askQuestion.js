import * as api from '../api/index'

const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data })
        navigate('/')
    } catch (err) { console.log(err); }
}

export default askQuestion