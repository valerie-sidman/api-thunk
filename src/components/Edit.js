import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeItemField, editService, addService, clearFields } from '../actions/actionCreators';
import { Link, useHistory } from 'react-router-dom';

export default function Edit({ match }) {
  const { item, loading, error } = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeItemField(name, value));
	}

  const handleEdit = evt => {
    evt.preventDefault();
    dispatch(addService(item.id, item.name, item.price, item.content));
    dispatch(clearFields());
    history.push("/services");
  }

  useEffect(() => {
    dispatch(editService(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <div>
      <h2>Editing service item</h2>
      <form className="filling-form">
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
      <button type="submit" className="btn btn-success" onClick={handleEdit} disabled={loading}>Apply</button>
      <Link to="/services" className="btn btn-secondary">Cancel</Link>
      {error && <div className="alert alert-danger" role="alert">Ошибка редактирования данных</div>}
    </form>
    </div>
    
  )
}
