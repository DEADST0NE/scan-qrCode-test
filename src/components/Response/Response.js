import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Response.scss';

import { getData } from '../../store/scan/actions'; 

const Response = () => {
  const dispatch = useDispatch();
  const { scan } = useSelector(store => store.scan); 

  useEffect(() => {
    if(scan) {
      dispatch(getData(scan));
    }
    if(!scan) {
      return 'Данные сканирования не найденны';
    }
  }, [scan, dispatch]);

  return <ResponseContent />
}

const ResponseContent = () => {
  const { data, loadingData, errorData } = useSelector(store => store.scan); 

  if(loadingData) {
    return 'Загрузка...'
  }

  if(errorData) {
    return 'Ошибка (((('
  }

  const jsonString = JSON.stringify(data, undefined, 4);

  return (
    <div className="response-page">
      <div>
        <h1> Данные полученные </h1>
        <pre>
          { jsonString }
        </pre>
      </div>
      <div className="nav">
        <NavLink to="/">
          Сканирование
        </NavLink>
      </div> 
    </div>
  )
}

export default Response;