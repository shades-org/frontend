export class cacheWrapper {
  setData = (key, value) => localStorage.setItem(key, value);
  getData = (key) => localStorage.getItem(key);
}
