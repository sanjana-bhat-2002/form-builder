import React from 'react';
import TextArea from '@/app/components/ui/form-fields/TextArea';

interface SidebarProps {
    addField: (fieldType: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ addField }) => {
  return (
    <div className="w-96 h-full bg-white shadow-2xl z-50 p-8">
        <h1 className='font-bold mb-12'>Add Fields</h1>
        <div className="flex flex-col gap-4">
            <TextArea field='Textarea' addField={addField} />
        </div>
    </div>
  )
}

export default Sidebar;
