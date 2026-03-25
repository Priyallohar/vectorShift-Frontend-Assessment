// filterNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' };
const input = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none' };

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');

  const handles = [
    { type: 'target', position: Position.Left,  id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-pass`, style: { top: '38%' } },
    { type: 'source', position: Position.Right, id: `${id}-fail`, style: { top: '62%' } },
  ];

  return (
    <BaseNode title="Filter" handles={handles} accent="#14b8a6">
      <span style={label}>Condition</span>
      <input style={input} type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
    </BaseNode>
  );
};
