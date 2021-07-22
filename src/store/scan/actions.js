import axios from '../../services/apiService';

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

// Запрос данных на сервер
const getDataRequested = () => ({
  type: GET_DATA_REQUEST,
});

const getDataSuccess = (responseData) => ({
  type: GET_DATA_SUCCESS,
  payload: responseData,
});

const getDataError = (error) => ({
  type: GET_DATA_ERROR,
  payload: error,
});

const getDataRequest = async (string) => {
  const object = JSON.parse(string);
  return axios({
    method: object.type,
    url: object.url,
    data: object.body
  }).then((response) => response.data);
}

const getData = (string) => (dispatch) => {
  dispatch(getDataRequested());
  getDataRequest(string)
    .then((data) => dispatch(getDataSuccess(data)))
    .catch((error) => dispatch(getDataError(error)));
}; 
// ===========================

// Сохранить отсканированные данные 
const scanSave = (data) => ({
  type: SCAN_SAVE,
  payload: data,
});

const scanRemove = () => ({
  type: SCAN_REMOVE,
});
// ===========================

// Запрос qrCode
const getQrCodeRequested = () => ({
  type: GET_QRCODE_REQUEST,
});

const getQrCodeSuccess = (responseData) => ({
  type: GET_QRCODE_SUCCESS,
  payload: responseData,
});

const getQrCodeError = (error) => ({
  type: GET_QRCODE_ERROR,
  payload: error,
});

const getQrCodeRequest = async (string) =>
  axios.get('code/create', {
    params: {
      hex: string,
    }
  }).then((response) => response.data);

const getQrCode = (string) => (dispatch) => {
  dispatch(getQrCodeRequested());
  getQrCodeRequest(string)
    .then((data) => dispatch(getQrCodeSuccess(data)))
    .catch((error) => dispatch(getQrCodeError(error)));
}; 
// ===========================

export {getData, getQrCode, scanSave, scanRemove};
