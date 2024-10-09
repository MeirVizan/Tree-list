import React from 'react';
import { useState } from 'react'
import branchesData from './Braches.json';
import './TreeView.css';

interface branchProps {
    userId: string,
}

const LeavesBranch: React.FC<branchProps> = ({ userId }) => {

    const newUsers = branchesData.users.filter(user => user.branchId == userId);

    // The leavesBranch function is used to render the user details
    const renderTree = (): JSX.Element[] => {
        return newUsers
            .map(user => (
                <div key={user.id} className='user-details' >
                    <span style={{color: '#11adff'}}>{user.fullName}</span>
                </div>
            ));
    }

    return (
        <div style={{ display: 'block',marginRight: 50 }}>{renderTree()}</div>
    )
}

export default LeavesBranch