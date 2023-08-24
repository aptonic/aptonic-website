"use client";

import React, { useState, useEffect } from 'react';

const AppVersion = () => {
  const [version, setVersion] = useState('');
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://updates.aptonic.com/dz4_latest_version.txt?${new Date().getTime()}`)
    .then(response => response.text())
    .then(data => {
        setVersion('Version ' + data);
        setLoaded(true);
    })
    .catch((error) => {
        console.error('Error:', error);
        setError(true);
    });
  }, []);

  return (
    <span className={`pt-2 text-sm text-gray-500 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {error ? '' : version}
    </span>
  )
};

export default AppVersion;
