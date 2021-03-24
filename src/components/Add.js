import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeItemField, addService, clearFields } from '../actions/actionCreators';

export default function Add() {
  const { item, loading, error } = useSelector(state => state.serviceField);
	const dispatch = useDispatch();

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeItemField(name, value));
	}

  const handleCancel = () => {
    dispatch(clearFields());
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.id, item.name, item.price, item.content));
    dispatch(clearFields());
}

  return (
    <form className="filling-form" onSubmit={handleSubmit}>
      <div className="fields-group">
        <div className="mb-3 item-form">
          <label htmlFor="item-field" className="form-label">Service</label>
          <input type="text" className="form-control" id="item-field" name="name" onChange={handleChange} value={item.name} />
        </div>
        <div className="mb-3 quantity-form">
          <label htmlFor="quantity-field" className="form-label">Price</label>
          <input type="text" className="form-control" id="quantity-field" name='price' onChange={handleChange} value={item.price}/>
        </div>
        <div className="mb-3 content-form">
          <label htmlFor="content-field" className="form-label">Content</label>
          <input type="text" className="form-control" id="content-field" name='content' onChange={handleChange} value={item.content}/>
        </div>
      </div>
      <button type="submit" className="btn btn-success" disabled={loading}>Apply</button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      {error && <div className="alert alert-danger" role="alert">Ошибка добавления данных</div>}
    </form>
  )
}
