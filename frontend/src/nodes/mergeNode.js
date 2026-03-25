// mergeNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' };
const select = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none' };

export const MergeNode = ({ id, data }) => {
  const [strategy, setStrategy] = useState(data?.strategy || 'Concat');

  const handles = [
    { type: 'target', position: Position.Left,  id: `${id}-a`, style: { top: '38%' } },
    { type: 'target', position: Position.Left,  id: `${id}-b`, style: { top: '62%' } },
    { type: 'source', position: Position.Right, id: `${id}-out` },
  ];

  return (
    <BaseNode title="Merge" handles={handles} accent="#d946ef">
      <span style={label}>Strategy</span>
      <select style={select} value={strategy} onChange={(e) => setStrategy(e.target.value)}>
        <option value="Concat">Concat</option>
        <option value="Zip">Zip</option>
        <option value="First">First</option>
        <option value="Last">Last</option>
      </select>
    </BaseNode>
  );
};
