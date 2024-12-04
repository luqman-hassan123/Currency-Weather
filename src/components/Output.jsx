import React from 'react'

const Output = ({title, data}) => {
  return (
    <div>
     <h2 className='text-lg font-semibold'>{title}</h2>
     {data && typeof data === 'object'? (
        Object.entries(data).map(([key, value]) => (
            <p key={key}>
                {key}: {value}
            </p>
        ))
     ):(
        <p>No data available</p>
     )}
      
    </div>
  );
};

export default Output
