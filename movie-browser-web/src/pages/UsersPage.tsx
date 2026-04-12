import { useEffect, useState } from 'react';
import { usersApi } from '../services/apiClient';
import type { UserResponse } from '../api';
import UserList from '../features/users/UserList';
import UserFormModal from '../features/users/UserFormModal';

export default function UsersPage() {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<UserResponse | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await usersApi.getAllUsers();
            setUsers(response.data);
            setError(null);
        } catch (err: any) {
            console.error('Error fetching users:', err);
            setError(err.message || 'Failed to load users.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this user?')) return;
        try {
            await usersApi.deleteUser(id);
            await fetchUsers(); // reload
        } catch(err) {
            console.error('Error deleting user:', err);
            alert('Failed to delete user.');
        }
    };

    const handleCreateClick = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (user: UserResponse) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const onSaveComplete = () => {
        setIsModalOpen(false);
        fetchUsers();
    };

    return (
        <div style={{ padding: '100px 4%', color: 'var(--text-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '2rem' }}>Manage Users</h1>
                <button 
                  onClick={handleCreateClick}
                  style={{ backgroundColor: 'var(--primary-brand)', color: 'white', padding: '10px 20px', fontWeight: 'bold' }}>
                    + Create User
                </button>
            </div>

            {error && <div style={{ color: 'var(--primary-brand)', marginBottom: '20px' }}>{error}</div>}

            {loading ? (
                <div>Loading users...</div>
            ) : (
                <UserList users={users} onEdit={handleEditClick} onDelete={handleDelete} />
            )}

            {isModalOpen && (
                <UserFormModal 
                  user={editingUser} 
                  onClose={() => setIsModalOpen(false)} 
                  onSaveSuccess={onSaveComplete} 
                />
            )}
        </div>
    );
}
