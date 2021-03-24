import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices, fetchDelete } from '../actions/actionCreators';
import { Link } from 'react-router-dom';

export default function List() {
  const { items, loading, error } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(fetchDelete(id));
  }

  if (loading) {
    return (
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Ошибка загрузки данных
      </div>
    )
  }

  return (
    <ul>
      {items.map(o =>
        <li className="card" key={o.id}>
          <div className="card-header">Price: {o.price}</div>
          <div className="card-body">
            <p className="card-text">Service: {o.name}</p>
            <Link to={`/services/${o.id}`} className="btn btn-warning">Edit</Link>
            <button type="button" className="btn btn-danger" onClick={() => handleRemove(o.id)}>Delete</button>
          </div>
        </li>)}
    </ul>
  )
}