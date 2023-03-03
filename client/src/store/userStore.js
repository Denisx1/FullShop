import { makeAutoObservable } from "mobx";
import { check } from "../http/userApi";
import { USER } from "../utils/consts";

export default class UserStore {
  constructor() {
    this._isAuth = localStorage.getItem('token')?true:false
    this._user = {};
    this._id = localStorage.getItem("id")?localStorage.getItem("id"):0;
    this._role = localStorage.getItem('role')?localStorage.getItem('role'):'GUEST';

    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setUserId(userId) {
    this._id = userId;
  }
  setRole(role) {
    this._role = role;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get userId() {
    return this._id;
  }
  get role() {
    return this._role;
  }
}
