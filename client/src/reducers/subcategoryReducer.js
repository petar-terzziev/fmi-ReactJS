import { GET_SUBCATEGORIES } from "../actions/types";

const initialState = {
    subcategories = []
}

export default function(state = initialState, action) {
    console.log("subcategoryReducer");
    switch(action.type){
        case GET_SUBCATEGORIES:
            return{
                ...state,
                subcategories : action.payload
            };
        default:
            return state;
    }
}