import Modal from "react-modal";
import "./Modal.css"
import { useUiStore, useUpdateEmployee } from "../../Hooks";
import { PostItem } from '../../Requester'
import { useState, useEffect } from "react";

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

export function AddEmployeeModal() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const { isAddProductModalOpen, CloseModal } = useUiStore();

    function PostElement(e) {
        e.preventDefault();
        if (!firstName || !email || !address || !phone || !role) return;
        PostItem({ firstName, email, address, phone, role });
        CloseModal();
    }

    return (
        <>
            <Modal
                isOpen={isAddProductModalOpen}
                onRequestClose={CloseModal}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <h2>Add Employee</h2>
                <hr></hr>
                <form className="m-3" onSubmit={PostElement}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="form-label">Employee Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input type="text" className="form-control" id="role" onChange={(e) => setRole(e.target.value)} required />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger mt-2" onClick={CloseModal}>Cancel</button>
                        <button type="submit" className="btn btn-primary mt-2">Accept</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export function UpdateEmployeeModal() {
    const { isUpdateProductModalOpen, CloseUpdateModalOpen } = useUiStore();
    const { employee } = useUpdateEmployee(); 
    
    const [formValues, setFormValues] = useState({
        firstName: "",
        email: "",
        address: "",
        phone: "",
        role: "",
    });

    useEffect(() => {
        if (employee) {
            setFormValues({
                firstName: employee.firstName || "",
                email: employee.email || "",
                address: employee.address || "",
                phone: employee.phone || "",
                role: employee.role || "",
            });
        }
    }, [employee]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function UpdateElement(e) {
        e.preventDefault();
        CloseUpdateModalOpen();
    }

    return (
        <Modal
            isOpen={isUpdateProductModalOpen}
            onRequestClose={CloseUpdateModalOpen}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <h2>Update Employee</h2>
            <hr />
            <form className="m-3" onSubmit={UpdateElement}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="form-label">Employee Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formValues.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formValues.email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={formValues.address.country} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formValues.phone} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="form-label">Role</label>
                    <input type="text" className="form-control" id="role" name="role" value={formValues.role} onChange={handleChange} required />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger mt-2" onClick={CloseUpdateModalOpen}>Cancel</button>
                    <button type="submit" className="btn btn-primary mt-2">Accept</button>
                </div>
            </form>
        </Modal>
    );
}


export function DeleteEmployeeModal() {
    const { isDeleteProductModalOpen, CloseDeleteModalOpen } = useUiStore();
    const{ employee } = useUpdateEmployee();

    const employeeID =  employee.id;
    console.log(employee);
    function Delete() {
        console.log(employeeID)
        CloseDeleteModalOpen();
    }

    return (
        <>
            <Modal
                isOpen={isDeleteProductModalOpen}
                onRequestClose={CloseDeleteModalOpen}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <h2>Delete Item</h2>
                <hr></hr>
                <form className="m-3">
                    <h5>Are you sure you wish to delete {employee.firstName}?</h5>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-danger mt-2" onClick={CloseDeleteModalOpen}>
                            Cancel
                        </button>
                        <button type="button" id="accept" className="btn btn-primary mt-2" onClick={Delete}>
                            Accept
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}