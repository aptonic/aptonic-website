'use client';

import React, { useEffect, useState } from 'react';

export default function ActionsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://actions.aptonic.com/actions/actions.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="mt-28 flex flex-col">
    {data.map((item, index) => (
        <div key={index} className="flex flex-row items-center mb-10">
        <img src={item.icon} alt={item.name} className="mr-2 w-14" />
        <div>
            <h2 className="text-xl">{item.name}</h2>
            <p className="text-base">{item.description}</p>
        </div>
        </div>
    ))}
    </div>
  );
}