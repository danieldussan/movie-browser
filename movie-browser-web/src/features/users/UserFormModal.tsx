import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import Modal from '../../components/ui/Modal';
import type { UserResponse, UserRequest } from '../../api';
import { usersApi } from '../../services/apiClient';
import classes from './UserFormModal.module.css';

interface UserFormModalProps {
    user: UserResponse | null; // null if creating, populated if editing
    onClose: () => void;
    onSaveSuccess: () => void;
}

export default function UserFormModal({ user, onClose, onSaveSuccess }: UserFormModalProps) {
    const isEdit = !!user;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setEmail(user.email || '');
            setPassword(''); // Generally password is empty on edit
        }
    }, [user]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const payload: UserRequest = {
            username,
            email,
            password
        };

        try {
            if (isEdit && user?.id) {
                await usersApi.updateUser(user.id, payload);
            } else {
                await usersApi.createUser(payload);
            }
            onSaveSuccess();
        } catch (err: any) {
             console.error('Error saving user:', err);
             // handle API error format ideally
             setError(err?.response?.data?.message || err.message || 'Error occurred saving user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal 
            isOpen={true} 
            onClose={onClose} 
            title={isEdit ? 'Edit User' : 'Create User'}
        >
            <form onSubmit={handleSubmit} className={classes.form}>
                {error && <div className={classes.errorMsg}>{error}</div>}
                
                <div className={classes.field}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        required 
                        className={classes.input}
                    />
                </div>

                <div className={classes.field}>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                        className={classes.input}
                    />
                </div>

                <div className={classes.field}>
                    <label htmlFor="password">Password {isEdit && <small>(Leave blank to keep current)</small>}</label>
                    <input 
                        id="password"
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required={!isEdit} 
                        className={classes.input}
                    />
                </div>

                <div className={classes.actions}>
                    <button type="button" onClick={onClose} className={classes.cancelBtn} disabled={loading}>
                        Cancel
                    </button>
                    <button type="submit" className={classes.saveBtn} disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </Modal>
    );
}
