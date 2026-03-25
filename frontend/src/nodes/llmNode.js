// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

const ACCENT = '#f59e0b';

const chip = {
  display: 'inline-block',
  fontSize: '10px',
  fontWeight: 500,
  color: '#92400e',
  background: '#fef3c7',
  border: '1px solid #fde68a',
  borderRadius: '4px',
  padding: '2px 7px',
  marginRight: '4px',
};

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left,  id: `${id}-system`,   style: { top: '33%' } },
    { type: 'target', position: Position.Left,  id: `${id}-prompt`,   style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  return (
    <BaseNode title="LLM" handles={handles} accent={ACCENT}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '8px' }}>
        Language Model
      </div>
      <div>
        <span style={chip}>System</span>
        <span style={chip}>Prompt</span>
        <span style={chip}>Response</span>
      </div>
    </BaseNode>
  );
};
