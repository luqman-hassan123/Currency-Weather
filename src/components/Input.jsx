import React from 'react';

const Input = ({ label, value, onChange, type = 'text', placeholder = '' }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            marginLeft: '0.5rem',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </label>
    </div>
  );
};

export default Input;
