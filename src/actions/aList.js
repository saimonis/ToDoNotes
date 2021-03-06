import * as firebase from "firebase";

export const getData = ()=> async (dispatch,getState)=>{
    dispatch({type: "DATA_IS_LOADING"});

    console.log("start get data")
    try{
        await firebase.database().ref('/').once('value')
            .then(res => res.val())
            .then( res => {
                console.log(Object.values(res.data))
                dispatch({
                    type: "FETCH_DATA_SUCCESS",
                    payload: Object.values(res.data)
                })
            });
    } catch (e) {
        console.log(e);
        dispatch({type: "FETCH_DATA_FAIL",})
    }

    console.log("end get data")
}


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}