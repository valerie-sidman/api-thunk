import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_DELETE,
  EDIT_SERVICES_REQUEST,
  EDIT_SERVICES_FAILURE,
  EDIT_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  CHANGE_ITEM_FIELD,
  CLEAR_FIELDS
} from './actionTypes';

// fetch

export function fetchServicesRequest() {
  return {
    type: FETCH_SERVICES_REQUEST,
  };
}

export function fetchServicesFailure(error) {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: { error }
  };
}

export function fetchServicesSuccess(items) {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: { items }
  };
}

export function fetchServicesDelete(delId) {
  return {
    type: FETCH_SERVICES_DELETE,
    payload: { delId },
  };
}

// edit

export function editServicesRequest() {
  return {
    type: EDIT_SERVICES_REQUEST,
  };
}

export function editServicesFailure(error) {
  return {
    type: EDIT_SERVICES_FAILURE,
    payload: { error },
  };
}

export function editServicesSuccess(item) {
  return {
    type: EDIT_SERVICES_SUCCESS,
    payload: { item },
  };
}

// add

export function addServicesRequest() {
  return {
    type: ADD_SERVICE_REQUEST,
  };
}

export function addServicesFailure(error) {
  return {
    type: ADD_SERVICE_FAILURE,
    payload: { error },
  };
}

export function addServicesSuccess() {
  return {
    type: ADD_SERVICE_SUCCESS,
  };
}

// main

export function changeItemField(name, value) {
  return {
    type: CHANGE_ITEM_FIELD,
    payload: { name, value },
  }
}

export function clearFields() {
  return {
    type: CLEAR_FIELDS,
    payload: {}
  };
}

export const fetchServices = () => (dispatch) => {
  dispatch(fetchServicesRequest());
  fetch('https://api-redux-back.herokuapp.com/api/services', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      dispatch(fetchServicesSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchServicesFailure(e.message))
    })
}

export const fetchDelete = (delId) => (dispatch) => {
  dispatch(fetchServicesDelete(delId));
  fetch(`https://api-redux-back.herokuapp.com/api/services/${delId}`, {
    method: 'DELETE'
  })
  fetchServices(dispatch);
}

export const editService = (editId) => (dispatch) => {
  dispatch(editServicesRequest());
  fetch(`https://api-redux-back.herokuapp.com/api/services/${editId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      dispatch(editServicesSuccess(data))
     })
    .catch((e) => {
      dispatch(editServicesFailure(e.message))
    })
}

export const addService = (id, name, price, content) => (dispatch) => {
  dispatch(addServicesRequest());
  fetch('https://api-redux-back.herokuapp.com/api/services', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify({ id: id ? id : 0, name, price, content }),
  }).then(() => {
    dispatch(addServicesSuccess());
  })
    .catch((e) => {
      dispatch(addServicesFailure(e.message));
    })
  fetchServices(dispatch);
}
