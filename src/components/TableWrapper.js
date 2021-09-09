import React, { useState } from "react"
import { useConfirm } from "material-ui-confirm";
import { EditUser } from "./EditUser";
import { TableHead } from "./TableHead";

export const TableWrapper = ({ data, sortTypes, currentSort, onSortChange, onSave, onDelete }) => {
    const [editMode, setEditMode] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const confirm = useConfirm();

    const toggleEditMode = (user) => {
        setEditMode(user.id);
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
    };
    
    const triggerSave = ({id, name, email, phone}) => {
        onSave({ id, name, email, phone});
        setEditMode(0);
    }

    const deletePrompt = (user) => {
        confirm({
            description: `This will permanently delete ${user.name}"s Information.`,
        })
            .then(() => onDelete(user.id))
            .catch(() => console.log("Deletion cancelled."));
    };
    return (
        <div>
            <TableHead
                onSortChange={onSortChange}
                sortTypes={sortTypes}
                currentSort={currentSort}
            />
            <section className="table__section">
                <table className="table__body">
                <tbody>
                    {data.map((user, index) => (
                    <tr key={index}>
                        {editMode > 0 && editMode === user.id && (
                            <EditUser
                                data={{
                                id: editMode,
                                name,
                                email,
                                phone,
                                }}
                                onSave={triggerSave}
                                setEditMode={setEditMode}
                            />
                            )}
                        {editMode !== user.id && (
                            <>
                                <td className="name__css">{user.name}</td>
                                <td className="tab_email">{user.email}</td>
                                <td className="tab_phone">{user.phone}</td>
                                <td>
                                    {
                                    <i
                                        className="fas fa-pen edit_icon"
                                        onClick={() => toggleEditMode(user)}
                                    ></i>
                                    }
                                    <i
                                    className="fas fa-trash delete_icon"
                                    onClick={() => deletePrompt(user)}
                                    ></i>
                                </td>
                            </>
                        )}
                    </tr>
                    ))}
                </tbody>
                </table>
            </section>
        </div>
    )
}