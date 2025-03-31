import { useDispatch, useSelector } from "react-redux"
import { setEmployees, clearSelectedEmployee } from "../Store"

export const useUpdateEmployee = () => {
    const { employee } = useSelector(state => state.updateEmployeeHandler);

    const dispatch = useDispatch();

    const UpdateEmployee = (employee) => {
        dispatch(setEmployees(employee));
    }

    const DeleteEmployee = () => {
        dispatch(clearSelectedEmployee());
    }

    return {
        employee,

        UpdateEmployee,
        DeleteEmployee
    }
}