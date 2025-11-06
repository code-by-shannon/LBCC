
// 1) See what's there (should be blank the first time)
console.log('Before:', document.cookie);

// 2–5) Set a cookie: name, value, days until expiry
function setCookie(cookieName, cookieValue, days) {
  if (!Number.isFinite(days) || days <= 0) {
    console.warn('Invalid "days" value:', days);
    return;
  }
  const now = new Date();
  now.setTime(now.getTime() + days * 24 * 60 * 60 * 1000); // days → ms
  const expires = now.toUTCString();

  // Encode to be safe; add expires + path=/
  document.cookie =
    `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}; ` +
    `expires=${expires}; path=/`;
}

// 7–8) Read a cookie value by name (returns false if not found)
function getCookie(cookieName) {
  const target = encodeURIComponent(cookieName) + '=';
  const parts = document.cookie.split(';');              // split all cookies
  for (let p of parts) {
    const c = p.trim();                                  // trim whitespace
    if (c.startsWith(target)) {
      // everything after the first '=' is the value (in case value has '=')
      const value = c.split('=').slice(1).join('=');
      return decodeURIComponent(value);
    }
  }
  return false;
}

// 6) Quick test: create two cookies, refresh, then read one back
function demoCookies() {
  setCookie('course', 'JS-101', 1);    // 1 day
  setCookie('theme', 'dark', 7);       // 7 days
  console.log('After set:', document.cookie);

  const theme = getCookie('theme');
  console.log('theme cookie →', theme);
}

// If you want to keep your function name:
function cookiePrinter(cookieName, cookieValue, days){
  setCookie(cookieName, cookieValue, days);
  console.log(`Set "${cookieName}" →`, getCookie(cookieName));
}

// Run one of these to test:
demoCookies();
// cookiePrinter('nickname','GreenGenes',3);

