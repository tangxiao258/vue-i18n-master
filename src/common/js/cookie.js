export function setCookie(name, value, time) {
  let exp = new Date();
  if (time) {
    exp.setTime(exp.getTime() + time * 24 * 60 * 1000);
  } else {
    exp.setTime(exp.getTime() + 10 * 60 * 1000);
  }

  document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString();
};

export function getCookieValue(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

export function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 60 * 1000);
  let cval = getCookieValue(name);

  document.cookie = name + '=' + cval + ';path=/;expires=' + exp.toUTCString();
};
