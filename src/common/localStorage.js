export function setLocalStorage(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
}

export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}