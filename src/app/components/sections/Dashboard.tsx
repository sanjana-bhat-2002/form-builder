'use client';
import AddForm from '@/app/components/ui/AddForm';
import CreateFormModal from '@/app/components/ui/CreateFormModal';
import { useState } from 'react';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);

    const onAddFormClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false); 
    };

    return (
        <>
        <div className="flex justify-center items-center">
            <AddForm onAddFormClick={onAddFormClick} />
            
        </div>
        <CreateFormModal show={showModal} onClose={handleCloseModal} />
        </>
        
    );
};

export default Dashboard;
