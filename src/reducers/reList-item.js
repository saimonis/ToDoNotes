const initialState = {
    loading:false,
    item: {
        _id:1,
        title:"null",
        content:"null"
    },
    error:false
}


const reList_item = (state = initialState,action) => {
    switch (action.type) {
        case "ITEM_IS_LOADING":
            return {...state, loading: true};
        case "FETCH_ITEM_SUCCESS":
            return {
                ...state,
                loading: false,
                item: {...action.payload}
            };
        case "FETCH_ITEM_FAIL":
            return {
                ...state,
                loading: false,
                error:true,
            };
        default: return initialState
    }
}

export default reList_item