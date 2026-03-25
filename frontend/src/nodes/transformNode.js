// transformNode.js

import { useState, useRef, useLayoutEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' };
const textarea = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none', resize: 'none', overflow: 'hidden', lineHeight: 1.5, fontFamily: 'monospace' };

export const TransformNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'x => x.trim()');
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [expression]);

  const handles = [
    { type: 'target', position: Position.Left,  id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  return (
    <BaseNode title="Transform" handles={handles} accent="#10b981">
      <span style={label}>Expression</span>
      <textarea ref={ref} style={textarea} value={expression} onChange={(e) => setExpression(e.target.value)} />
    </BaseNode>
  );
};
