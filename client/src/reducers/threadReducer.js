import { GET_THREAD, GET_COMMENTS, NEW_COMMENT} from "../actions/types";

const initialState = {
  title: "",
  comments: [],
  content: "",
  newComment: false,
  newCommentValue: ""
};

export default function(state = initialState, action) {
  //console.log("action.type:", action.type);
  switch (action.type) {
    case GET_THREAD:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content
      };

    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
      case NEW_COMMENT:
        return{
          ...state,
          comments: [...state.comments,action.payload]
        }
    default:
      return state;
  }
}
