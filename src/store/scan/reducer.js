/* eslint-disable import/no-anonymous-default-export */
import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  SCAN_REMOVE,
  SCAN_SAVE,
  GET_QRCODE_ERROR,
  GET_QRCODE_REQUEST,
  GET_QRCODE_SUCCESS
} from '../actions';

const INIT_STATE = {
  data: [], 
  loadingData: true,
  errorData: null,

  scan: null,

  qrCode: '', 
  loadingQrCode: true,
  errorQrCode: null,
}; 

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // Получить данные 
    case GET_DATA_REQUEST:
      return {
        ...state,
        loadingData: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loadingData: false,
      };

    case GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        errorData: action.payload,
      };
    //================================

    // Операции с отсканированным QrCode
    case SCAN_SAVE:
      return {
        ...state,
        scan: action.payload,
        loading: true,
      };
    
    case SCAN_REMOVE:
      return {
        ...state,
        scan: null,
        loading: false,
      };
    //================================ 

    // Получить qrCode 
    case GET_QRCODE_REQUEST:
      return {
        ...state,
        loadingQrCode: true,
      };

    case GET_QRCODE_SUCCESS:
      return {
        ...state,
        qrCode: action.payload,
        loadingQrCode: false,
      };

    case GET_QRCODE_ERROR:
      return {
        ...state,
        loadingQrCode: false,
        errorQrCode: action.payload,
      };
    //================================

    default:
      return state;
  }
};
