import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Icon from '../generic/Icon';
import { getQrCode } from '../../store/scan/actions';

import './QRcode.scss';

const QRcode = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      url: 'code/test',
      type: 'POST',
      body: {
        id: '1212121212121',
        name: 'ruslan'
      }
    }

    dispatch(getQrCode(JSON.stringify(data)));
  }, [dispatch]);
  
  const { qrCode, loadingQrCode, errorQrCode } = useSelector(store => store.scan);
  
  if(loadingQrCode) {
    return 'Загрузка...'
  }

  if(errorQrCode) {
    return 'Ошибка'
  }

  console.log(qrCode);

  return (
    <div className="qrCode-page">
      <div className="qrCode-page-header">
        <Icon name="scan" />
        <h1>Отсканируйте</h1>
        <span>QR Code</span> 
      </div>
      <div className="qrCode-page-body">
       <img src={qrCode} alt="qrCode" />
      </div>
      <div className="nav">
        <NavLink to="/">
          Сканирование
        </NavLink>
      </div>  
    </div>
  ) 
}

export default QRcode;