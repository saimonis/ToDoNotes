import * as firebase from "firebase";

export const getItem = (id)=> async (dispatch,getState) => {
    dispatch({type: "ITEM_IS_LOADING"});

  try{
      await firebase.database().ref(`/data/${id}`).once('value')
          .then(res => res.val())
          .then( res => {
              dispatch({
                  type: "FETCH_ITEM_SUCCESS",
                  payload: {...res}
              })
          });
  } catch (e) {
      console.log(e)
      dispatch({type: "FETCH_ITEM_FAIL"})
  }
}
