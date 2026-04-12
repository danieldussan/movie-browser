import { useEffect } from 'react';
import type { ReactNode } from 'react';
import classes from './Modal.module.css';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto' };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={classes.overlay} onClick={onClose}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    <h2>{title}</h2>
                    <button className={classes.closeBtn} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}
