import { Handle } from 'reactflow';

export const BaseNode = ({ title, handles, children, accent = '#6366f1', selected }) => {
  const activeShadow = `0 0 0 3px ${accent}33`;
  const defaultShadow = '0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)';

  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.boxShadow = activeShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = selected ? accent : '#e2e8f0';
        e.currentTarget.style.boxShadow = selected ? activeShadow : defaultShadow;
      }}
      style={{
        background: '#ffffff',
        border: `1px solid ${selected ? accent : '#e2e8f0'}`,
        borderRadius: '8px',
        boxShadow: selected ? activeShadow : defaultShadow,
        minWidth: '200px',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
        padding: '10px 14px 12px',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
    >
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        color: accent,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '8px',
      }}>
        {title}
      </div>

      {children}

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: '8px',
            height: '8px',
            background: '#ffffff',
            border: `2px solid ${accent}`,
            ...(handle.style || {}),
          }}
        />
      ))}
    </div>
  );
};
