import {
  EDIT_SERVICES_REQUEST,
  EDIT_SERVICES_FAILURE,
  EDIT_SERVICES_SUCCESS,
  CHANGE_ITEM_FIELD,
  CLEAR_FIELDS
} from '../actions/actionTypes';

const initialState = {
  item: { id: '', name: '', price: '', content: ''},
  loading: false,
  error: null,
};

export default function editReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ITEM_FIELD:
      const {name, value} = action.payload;
      return {
        ...state, 
        item: { 
          ...state.item, 
          [name]: value 
        } 
      };
    case EDIT_SERVICES_REQUEST: 
      return {
        ...state,
        item: state.item,
        loading: true, 
        error: null,
      };
    case EDIT_SERVICES_FAILURE:
      const { error } = action.payload;
      return {
        ...state, 
        items: state.items, 
        loading: false, 
        error,
      };
    case EDIT_SERVICES_SUCCESS:
      const { item } = action.payload;
      return { 
        ...state, 
        item, 
        loading: false, 
        error: null,
      };
    case CLEAR_FIELDS: 
      return initialState;
    default:
      return state;
  }
}
