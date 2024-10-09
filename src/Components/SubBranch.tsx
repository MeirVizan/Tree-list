import React from 'react'
import { useState } from 'react'
import branchesData from './Braches.json'
import SubItemBranch from './SubItemBranch'

interface branchProps {
    branchId: string
}

const SubBranch: React.FC<branchProps> = ({ branchId }) => {

    const [branches] = useState<any[]>(branchesData.branches);

    const renderTree = (branchId: string | null): JSX.Element[] => {
        return branches.filter(branch => branch.parentId === branchId)
            .map(branch => (
                <div key={branch.id} style={{ paddingRight: '20px' }}>

                    <SubItemBranch
                        branch={branch}
                        renderTree={renderTree} />
                </div>
            ));
    }
    return (
        <div>
            <div>{renderTree(branchId)}</div>
        </div>
    )
}

export default SubBranch