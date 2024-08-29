import React from 'react';

interface AddFieldProps {
    field: string;
    addField: (fieldType: string) => void;
}

const AddField: React.FC<AddFieldProps> = ({ field, addField }) => {
    const handleClick = () => {
        addField(field);
    };

    return (
    <button 
    className='flex justify-between'
    onClick={handleClick}
    >
        <p>{field}</p>
        <p>+</p>
    </button>
  )
}

export default AddField;
