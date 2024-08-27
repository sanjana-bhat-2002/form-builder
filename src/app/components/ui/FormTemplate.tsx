import React from 'react';
import TextAreaWidget from '@/app/components/ui/form-field-widgets/TextAreaWidget';
import FieldWrapper from '@/app/components/ui/FieldWrapper';

interface FormTemplateProps {
    fields: string[];
    formName: string;
}

const FormTemplate: React.FC<FormTemplateProps> = ({ fields, formName }) => {
    
  return (
    <div className="flex flex-col bg-white w-96 min-h-96 rounded-xl">
        <div className='bg-indigo-500 p-3 rounded-t-xl text-white'>
            {formName}
        </div>
        <div className="p-3">
        {fields.map((field, index) => {
            
            if (field === 'textarea') {
                return (
                <FieldWrapper key={index} >
                    <TextAreaWidget />
                </FieldWrapper>
            )  
            }
            return null; 
        })}
        </div>
    </div>
  );
};

export default FormTemplate;
