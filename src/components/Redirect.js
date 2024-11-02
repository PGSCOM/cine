import React, { useEffect, useState } from 'react';
import redirects from '../data/redirects';

const Redirect = ({ url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const redirect = redirects.find(r => r.path === currentPath);
    if (redirect) {
      window.location.href = redirect.url;
    }
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Redirect;
