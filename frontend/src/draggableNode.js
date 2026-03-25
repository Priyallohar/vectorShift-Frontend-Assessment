// draggableNode.js

const NODE_COLORS = {
  customInput:  '#6366f1',
  customOutput: '#8b5cf6',
  text:         '#f97316',
  llm:          '#f59e0b',
  filter:       '#14b8a6',
  transform:    '#10b981',
  condition:    '#0ea5e9',
  merge:        '#d946ef',
  note:         '#eab308',
};

export const DraggableNode = ({ type, label }) => {
  const color = NODE_COLORS[type] || '#64748b';

  const onDragStart = (event) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType: type }));
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.opacity = '0.6';
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={(e) => (e.target.style.opacity = '1')}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 0 0 3px ${color}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e2e8f0';
        e.currentTarget.style.boxShadow = 'none';
      }}
      style={{
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        padding: '5px 11px 5px 7px',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        userSelect: 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
      }}
    >
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
      }} />
      <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151' }}>
        {label}
      </span>
    </div>
  );
};
