const initialState = {
    loading:false,
    data: [],
    error:false
}


const reList = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_IS_LOADING":
            return {...state, loading: true};
        case "FETCH_DATA_SUCCESS":
            return {
            ...state,
                loading: false,
                data: [...action.payload]
        };
        case "FETCH_DATA_FAIL":
            return {
                ...state,
                loading: false,
                error:true,
            };
        default: return initialState
    }
};



export default reList