import type { UserResponse } from '../../api';
import classes from './UserList.module.css';
import { Edit2, Trash2 } from 'lucide-react';

interface UserListProps {
    users: UserResponse[];
    onEdit: (user: UserResponse) => void;
    onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: UserListProps) {
    if (users.length === 0) {
        return <p style={{ color: '#b3b3b3' }}>No users found.</p>;
    }

    return (
        <div className={classes.tableContainer}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                            <td>
                                <div className={classes.actions}>
                                    <button onClick={() => onEdit(user)} className={classes.editBtn} title="Edit User">
                                        <Edit2 size={16} />
                                    </button>
                                    <button onClick={() => user.id && onDelete(user.id)} className={classes.deleteBtn} title="Delete User">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
