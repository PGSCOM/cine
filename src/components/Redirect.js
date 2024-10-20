import React, { useEffect, useState } from 'react';

const Redirect = ({ url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  return (
    <div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Redirect;
