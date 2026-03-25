// conditionNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' };
const input = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none', fontFamily: 'monospace' };

export const ConditionNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'x !== null');

  const handles = [
    { type: 'target', position: Position.Left,  id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-true`,  style: { top: '38%' } },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '62%' } },
  ];

  return (
    <BaseNode title="Condition" handles={handles} accent="#0ea5e9">
      <span style={label}>If expression</span>
      <input style={input} type="text" value={expression} onChange={(e) => setExpression(e.target.value)} />
    </BaseNode>
  );
};
