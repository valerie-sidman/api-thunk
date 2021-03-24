import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_DELETE
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { 
        ...state, 
        items: state.items, 
        loading: true, 
        error: null, 
      };
    case FETCH_SERVICES_FAILURE:
      const { error } = action.payload;
      return { 
        ...state, 
        items: state.items, 
        loading: false, 
        error,
      };
    case FETCH_SERVICES_SUCCESS:
      const { items } = action.payload;
      return { 
        ...state, 
        items, 
        loading: false, 
        error: null,
      };
    case FETCH_SERVICES_DELETE:
      const { delId } = action.payload;
      const filtered = state.items.filter(item => item.id !== delId);
      return { 
        ...state, 
        items: filtered, 
      };
    default:
      return state;
  }
}
