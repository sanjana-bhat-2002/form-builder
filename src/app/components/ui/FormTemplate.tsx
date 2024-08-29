import React from 'react';
import TextArea from '@/app/components/ui/form-field-widgets/TextArea';
import FieldWrapper from '@/app/components/ui/FieldWrapper';
import NumericRating from '@/app/components/ui/form-field-widgets/NumericRating';

interface FormTemplateProps {
    fields: string[];
    formName: string;
}

const widgetComponents: { [key: string]: React.ComponentType<any> } = {
    "Textarea": TextArea,
    "Numeric Rating": NumericRating,
};

const FormTemplate: React.FC<FormTemplateProps> = ({ fields, formName }) => {

    return (
        <div className="flex flex-col bg-white w-96 min-h-96 rounded-xl">
            <div className='bg-indigo-500 p-3 rounded-t-xl text-white'>
                {formName}
            </div>
            <div className="p-3">
                {fields.map((field, index) => {
                    const WidgetComponent = widgetComponents[field];

                    if (WidgetComponent) {
                        return (
                            <FieldWrapper key={index}>
                                <WidgetComponent />
                            </FieldWrapper>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FormTemplate;
