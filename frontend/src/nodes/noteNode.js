// noteNode.js

import { useState, useRef, useLayoutEffect } from 'react';
import { BaseNode } from './baseNode';

const label = { fontSize: '10px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' };
const textarea = { fontSize: '12px', color: '#1e293b', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '5px 8px', width: '100%', outline: 'none', resize: 'none', overflow: 'hidden', lineHeight: 1.5 };

export const NoteNode = ({ data }) => {
  const [text, setText] = useState(data?.text || 'Add a note...');
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <BaseNode title="Note" handles={[]} accent="#eab308">
      <span style={label}>Content</span>
      <textarea ref={ref} style={textarea} value={text} onChange={(e) => setText(e.target.value)} />
    </BaseNode>
  );
};
