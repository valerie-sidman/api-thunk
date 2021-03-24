import {
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  CHANGE_ITEM_FIELD, 
  CLEAR_FIELDS
} from '../actions/actionTypes';

const initialState = {
  item: { id: '', name: '', price: '', content: '' },
  loading: false,
  error: null,
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ITEM_FIELD:
      const {name, value} = action.payload;
      const { item } = state;
      return {
        ...state, 
        item: { 
          ...item, 
          [name]: value 
        } 
      };
    case ADD_SERVICE_REQUEST:
      return { 
        ...state, 
        loading: true,
        error: null 
      };
    case ADD_SERVICE_FAILURE:
      const { error } = action.payload;
      return { 
        ...state, 
        loading: false, 
        error 
      };
    case ADD_SERVICE_SUCCESS:
      return { ...initialState }
    case CLEAR_FIELDS: 
      return initialState;
    default:
      return state;
  }
}
