'use client';
import { useState, useEffect } from 'react';
import FormTemplate from '@/app/components/ui/FormTemplate';
import Sidebar from '@/app/components/ui/Sidebar';
import { useSearchParams } from 'next/navigation';

const NewFormPage = () => {
    const [fields, setFields] = useState<string[]>([]);
    const searchParams = useSearchParams();
    const formName = searchParams.get('name');

    const addField = (fieldType: string) => {
        setFields(prevFields => {
            const updatedFields = [...prevFields, fieldType];
            return updatedFields;
        });
    };

    const removeField = (fieldType: string) => {
        
    }

    useEffect(() => {
        console.log("Updated Fields", fields);
    }, [fields]);

    return (
        <div className='flex justify-center h-screen'>
            <div className="flex bg-indigo-100 w-full p-48 justify-center items-center overflow-y-auto">
                <FormTemplate fields={fields} formName={formName ? formName : ""}/>
            </div>

            <Sidebar addField={addField} />
        </div>
    );
};

export default NewFormPage;
