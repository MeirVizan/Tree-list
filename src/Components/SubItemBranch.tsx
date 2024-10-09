import React, { useState } from 'react'
import LeavesBranch from './LeavesBranch';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface SubItemProps {
    renderTree: (branchId: string | null) => JSX.Element[];
    branch: any;
}

const SubItemBranch: React.FC<SubItemProps> = ({ renderTree, branch }) => {
    const [isOpen, setIsOpen] = useState({ open: false, branchId: '' });

    const toggleOpen = (id: string) => {
        setIsOpen({ open: !isOpen.open, branchId: id });
    };
    return (
        <div >
            <div style={{ display: 'flex' }}>
                <button style={{ border: 'none', backgroundColor: 'white' }} onClick={() => toggleOpen(branch.id)}>
                    {isOpen.open ? <RemoveCircleOutlineIcon style={{ color: '#2f8dff' }} /> : <ControlPointIcon style={{ color: '#2f8dff' }} />}
                </button>

                <span style={{ marginLeft: '8px' }}>
                    {branch.name && branch.name || branch.fullName && branch.fullName}
                </span>
            </div>
            {isOpen.open && isOpen.branchId === branch.id && (
                // The renderTree function is recursively called to render the tree structure of the branches
                <>
                    {renderTree(branch.id)}
                    <LeavesBranch userId={branch.id} />
                </>
            )}
        </div>
    )
}

export default SubItemBranch