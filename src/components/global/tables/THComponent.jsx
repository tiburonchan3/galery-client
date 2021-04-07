import React from "react";

const THComponent = ({name}) => {
  return (
    <th className="px-5 text-xs py-3 border-b-2 text-left border-gray-200 bg-gray-100 font-semibold text-gray-600 uppercase tracking-wider">
     {name}
    </th>
  );
};

export default THComponent;
