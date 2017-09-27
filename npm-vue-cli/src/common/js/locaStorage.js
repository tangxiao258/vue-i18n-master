export default {
  set: function(key, value) {
    localStorage.setItem(key, value);
  },
  get: function(key) {
    return localStorage.getItem(key);
  },
  clear: function() {
    localStorage.clear();
  }
};
