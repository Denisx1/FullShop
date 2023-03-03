import { makeAutoObservable } from "mobx";
import { getBasket } from "../http/deviceApi";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._allDevices = [];
    this._basket = []
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._dublicateItem = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setAllDevices(allDevices) {
    this._allDevices = allDevices;
  }
  setBasket(basket) {
    this._basket = basket;
  }
  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }
  setLimit(limit) {
    this._limit = limit;
  }
  setDublicateItem(dublicateItem) {
    this._dublicateItem = dublicateItem;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get allDevices() {
    return this._allDevices;
  }
  get basket() {
    return this._basket;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }
  get dublicateItem() {
    return this._dublicateItem;
  }
}
