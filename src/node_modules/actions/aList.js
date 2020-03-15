import * as firebase from "firebase";

export const getData = () => async (dispatch, getState) => {
    dispatch({type: "DATA_IS_LOADING"});

    try {
        await firebase.database().ref('/').once('value')
            .then(res => res.val())
            .then(res => {
                dispatch({
                    type: "FETCH_DATA_SUCCESS",
                    payload: Object.values(res.data)
                })
            });
    } catch (e) {
        dispatch({type: "FETCH_DATA_FAIL",})
    }
}