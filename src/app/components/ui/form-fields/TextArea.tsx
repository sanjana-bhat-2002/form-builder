import React from 'react';

interface TextAreaProps {
    field: string;
    addField: (fieldType: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ field, addField }) => {
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

export default TextArea;
