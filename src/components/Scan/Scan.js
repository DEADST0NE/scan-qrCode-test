import QrReader from 'react-qr-reader';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Icon from '../generic/Icon';
import { scanSave } from '../../store/scan/actions';

import './Scan.scss';

const Scan = () => { 
  const dispatch = useDispatch();
  const history = useHistory()

  const onScan = (result) => {
    if(result) { 
      dispatch(scanSave(result));
      history.push('/response');
    }
  }

  return (
    <div className="scan-page">
      <div className="scan-page-header">
        <Icon name="scan" />
        <h1>Сканирование</h1>
        <span>QR Code</span> 
      </div>
      <div className="scan-page-body">
        <QrReader
          delay={300}
          onError={(err) => console.log(err)}
          onScan={onScan}
          style={{ width: '500px', height: '500px' }}
        />
      </div>
      <div className="nav">
        <NavLink to="/qrCode">
          Показать QrCode
        </NavLink>
      </div>
    </div>
  )
}

export default Scan;