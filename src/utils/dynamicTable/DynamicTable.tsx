'use client';

import React from 'react';

type DynamicTableProps = {
  data: (string | number | React.ReactNode)[][];
  headings: string[];
};

const DynamicTable: React.FC<DynamicTableProps> = ({ data, headings }) => {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className='table-border'>
            {headings.map((title, colIndex) => (
              <th key={colIndex} className="text-4xl p-4">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-center text-xl">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
