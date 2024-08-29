import React from 'react';
import AddField from '@/app/components/ui/form-fields/AddField';

interface SidebarProps {
    addField: (fieldType: string) => void;
}

const fieldList = ["Textarea", 
                   "Numeric Rating", 
                   "Star Rating", 
                   "Smiley Rating", 
                   "Single Line Input", 
                   "Radio Button", 
                   "Categories"]

const Sidebar: React.FC<SidebarProps> = ({ addField }) => {
  return (
    <div className="w-96 h-full bg-white shadow-2xl z-50 p-8">
        <h1 className='font-bold mb-12'>Add Fields</h1>
        <div className="flex flex-col gap-4">
            {
              fieldList.map((item, index) => (
                <AddField field={item} key={index} addField={addField} />
              ))
            }
        </div>
    </div>
  )
}

export default Sidebar;
