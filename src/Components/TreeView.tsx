import React, { useState } from 'react';
import branchesData from './Braches.json';
import ItemTree from './ItemTree';
import './TreeView.css';

interface Branch {
  id: string;
  name: string;
  parentId: string | null;
  usersInBranch: User[] | null;
}

interface User {
  id: string;
  agentId: string;
  fullName: string | null;
  roleId: string;
}

const TreeView: React.FC = () => {
  // The branchesData is used to get the branches data from the branches.json file
  const [branches] = useState<Branch[]>(branchesData.branches);
  
  // The renderTree function is used to render the tree structure of the branches
  const renderTree = (parentId: string | null): JSX.Element[] => {
    return branches
      .filter(branch => branch.parentId === parentId)
      .map(branch => (
        <div key={branch.id} style={{ marginLeft: '20px' }}>
          <ItemTree renderTree={renderTree} branch={branch} />
        </div>
      ));
  };
  return (
    <div className='wapper-tree' >
      <div>{renderTree(null)}</div>
    </div>
  );
};

export default TreeView;
