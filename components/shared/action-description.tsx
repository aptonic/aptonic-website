import React from "react";
import Linkify from "linkify-react";

export default function ActionDescription({ item }) {
  const linkProps = {
    className: "text-blue-400 underline break-all",
  };

  const lines = item.description.split("\\n");

  return (
    <p className="text-sm text-gray-700">
      {lines.map((line, index) => (
        <span key={index}>
          <Linkify
            as="span"
            options={{
              attributes: linkProps,
              validate: {
                url: (value) => /^https?:\/\//.test(value),
              },
            }}
          >
            {line.replace(/\\"/g, '"')}
          </Linkify>

          {index !== lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}
