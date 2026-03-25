// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const field = { display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '8px' };
const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' };
const input = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none' };

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handles = [{ type: 'target', position: Position.Left, id: `${id}-value` }];

  return (
    <BaseNode title="Output" handles={handles} accent="#8b5cf6">
      <div style={field}>
        <span style={label}>Name</span>
        <input style={input} type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </div>
      <div style={{ ...field, marginBottom: 0 }}>
        <span style={label}>Type</span>
        <select style={input} value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
