import { useState } from 'react';

const KEY = 'mature-content-ok';

function read() {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Whether the visitor confirmed they're 18+ during this browser session. */
export function useMatureConsent() {
  const [ok, setOk] = useState(read);
  const confirm = () => {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Storage blocked: consent just lasts for this page view.
    }
    setOk(true);
  };
  return [ok, confirm];
}
