import Modal from "react-modal";
import { useUiStore } from "../Hooks";
import { PostItem } from "../Requester";
import { useState } from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        padding: '30px'
    }
};

Modal.setAppElement('#root');

export function AddCustomerModal() {
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { isAddProductModalOpen, CloseModal } = useUiStore();

    function PostElement(e) {
        e.preventDefault();

        PostItem({ name, id, email, phone });
        CloseModal();
    }

    return (
        <Modal
            isOpen={isAddProductModalOpen}
            onRequestClose={CloseModal}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <h2>Add customer</h2>
            <hr />
            <form className="m-3" onSubmit={PostElement}>
                <div className="mb-4">
                    <label htmlFor="customerID" className="form-label">ID</label>
                    <input type="text" className="form-control" id="customerID" onChange={(e) => setID(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="customerName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="customerName" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="customerEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="customerEmail" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="customerPhone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="customerPhone" pattern="[0-9]+" onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger mt-2" onClick={CloseModal}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary mt-2">
                        Accept
                    </button>
                </div>
            </form>
        </Modal>
    );
}
