import { UNAUTHORIZED_ERROR_CODE } from './../constants/errorCode';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { AuthStorageService } from './authStorageService';
import { config } from '../config/index';

const authStorageService = new AuthStorageService();

export class ApiService {
  axiosInstance: AxiosInstance;

  constructor() {
    // Init axiosInstance
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      // Common header
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this._setInterceptors();
  }

  createURL(uri: (string | object)[]) {
    let paramsUrl: any;
    if (typeof uri[uri.length - 1] !== 'string') {
      paramsUrl = uri.pop();
      let url = uri.join('/');
      Object.keys(paramsUrl).forEach((x) => {
        url = url.replace(`:${x}`, paramsUrl[x]);
      });
      return url;
    } else {
      return uri.join('/');
    }
  }

  get(uri: (string | object)[], params = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.get(this.createURL(uri), {
        params,
        ...moreConfigs,
      });
      this._handleRespond(request, resolve, reject);
    });
  }

  post(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.post(
        this.createURL(uri),
        data,
        moreConfigs
      );
      this._handleRespond(request, resolve, reject);
    });
  }

  put(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.put(
        this.createURL(uri),
        data,
        moreConfigs
      );
      this._handleRespond(request, resolve, reject);
    });
  }

  delete(uri: (string | object)[], moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.delete(
        this.createURL(uri),
        moreConfigs
      );
      this._handleRespond(request, resolve, reject);
    });
  }

  multipeGets(apiRequests: any) {
    const apiReqs = apiRequests.map((v: any) => this.axiosInstance.get(v));
    return new Promise((resolve, reject) => {
      axios
        .all(apiReqs)
        .then((resp: any) => {
          resolve(resp.map((v: any) => v.data));
        })
        .catch((err: any) => reject(err));
    });
  }

  private _handleRespond(request: any, resolve: any, reject: any) {
    return request
      .then((resp: AxiosResponse) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  }

  private _setInterceptors() {
    this.axiosInstance.interceptors.request.use((request) => {
      if (authStorageService.token) {
        Object.assign(request.headers, {
          Authorization: `${config.tokenSuffix} ${authStorageService.token}`,
        });
      }
      return request;
    });
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => this._handleError(error)
    );
  }

  private async _handleError(error: AxiosError) {
    // Detect refresh Token
    // if (error.isAxiosError && error.response?.status === 401) {
    //   const originalRequest = error.config;
    //   console.log(error)
    //   const req = await this.authHelper.handleRefreshToken(originalRequest);
    //   return this.axiosInstance(req);
    // }

    // Make error model before promise
    if (error.isAxiosError && error.response) {
      switch (error.response.status) {
        case UNAUTHORIZED_ERROR_CODE:
          authStorageService.destroy();
          return Promise.reject({
            data: error.response.data,
          });

        default:
          // Axios error
          return Promise.reject({
            data: error.response.data,
          });
      }
    } else {
      // Default | Network errors | CORS | ...
      return Promise.reject({});
    }
  }
}
