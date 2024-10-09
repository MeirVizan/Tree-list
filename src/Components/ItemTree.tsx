import React, { useState } from 'react'
import SubBranch from './SubBranch';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface SubItemProps {
    renderTree: (branchId: string | null) => JSX.Element[];
    branch: any;
}

const ItemTree: React.FC<SubItemProps> = ({ renderTree, branch }) => {

    const [isOpen, setIsOpen] = useState({ open: false, branchId: '' });

    // The toggleOpen function is used to toggle the open state of the branch
    const toggleOpen = (id: string) => {
        setIsOpen({ open: !isOpen.open, branchId: id });
    };
    return (
        <div style={{ paddingRight: 20 }}>
            <div style={{display: 'flex'}}>
                <button style={{ border: 'none', backgroundColor: 'white' }} onClick={() => toggleOpen(branch.id)}>
                    {isOpen.open ? <RemoveCircleOutlineIcon style={{ color: '#2f8dff' }} /> : <ControlPointIcon style={{ color: '#2f8dff' }} />}
                </button>

                <span style={{ marginLeft: '8px', color: '#2e3c8c', fontWeight: 'bold' }}>
                    {branch.name && branch.name || branch.fullName && branch.fullName}
                </span>
            </div>

            {isOpen.open && isOpen.branchId === branch.id && (
                <>
                    <SubBranch branchId={branch.id} />
                    {branch.parentId === undefined && renderTree(branch.id)}
                </>
            )}
        </div>
    )
}

export default ItemTree