// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  console.log(JSON.stringify({ nodes, edges }))

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        alert('Error: Could not reach the backend.');
        return;
      }


      const { num_nodes, num_edges, is_dag } = await response.json();

      alert(
        `Pipeline Analysis\n` +
        `─────────────────\n` +
        `Nodes      : ${num_nodes}\n` +
        `Edges      : ${num_edges}\n` +
        `Valid DAG  : ${is_dag ? 'Yes ✓' : 'No ✗'}`
      );
    } catch (err) {
      alert('Error: Could not connect to the backend. Is it running?');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 24px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#ffffff',
          background: '#6366f1',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background 0.15s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#4f46e5')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#6366f1')}
      >
         Submit
      </button>
    </div>
  );
};
