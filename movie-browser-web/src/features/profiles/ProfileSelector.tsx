import { useNavigate } from 'react-router-dom';
import classes from './ProfileSelector.module.css';

// Using some local mock data for profiles to mimic Netflix visual behavior
const PROFILES = [
    { id: '1', name: 'Jesus', color: '#E50914' },
    { id: '2', name: 'Kids', color: '#10B981' },
    { id: '3', name: 'Guest', color: '#3B82F6' },
    { id: '4', name: 'Family', color: '#F59E0B' },
    { id: '5', name: 'Add Profile', color: '#333333', isAdd: true }
];

export default function ProfileSelector() {
    const navigate = useNavigate();

    const handleProfileSelect = (profileId: string, isAdd: boolean = false) => {
        if (isAdd) return; // Normally you'd open a modal to add a profile
        
        // Save selected profile in localStorage for simple global state
        localStorage.setItem('activeProfile', profileId);
        navigate('/browse');
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Who's watching?</h1>
            <div className={classes.profilesWrapper}>
                {PROFILES.map((profile) => (
                    <div 
                      key={profile.id} 
                      className={classes.profileCard} 
                      onClick={() => handleProfileSelect(profile.id, profile.isAdd)}
                    >
                        <div 
                          className={classes.avatar} 
                          style={{ backgroundColor: profile.color }}
                        >
                            {profile.isAdd ? '+' : profile.name.charAt(0)}
                        </div>
                        <span className={classes.name}>{profile.name}</span>
                    </div>
                ))}
            </div>
            <button className={classes.manageButton}>Manage Profiles</button>
        </div>
    );
}
