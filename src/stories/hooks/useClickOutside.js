import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setTimeout(() => {
        callback(false);
      }, 5000);
    }
  };
  // eslint-disable-next-line no-undef
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
