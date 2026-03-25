import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div style={{
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e5e7eb',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flexShrink: 0,
    zIndex: 10,
  }}>
    <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', flexShrink: 0 }}>
      Pipeline
    </span>
    <div style={{ width: '1px', height: '18px', background: '#e5e7eb', flexShrink: 0 }} />
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      <DraggableNode type="customInput"  label="Input"     />
      <DraggableNode type="llm"          label="LLM"       />
      <DraggableNode type="customOutput" label="Output"    />
      <DraggableNode type="text"         label="Text"      />
      <DraggableNode type="filter"       label="Filter"    />
      <DraggableNode type="transform"    label="Transform" />
      <DraggableNode type="condition"    label="Condition" />
      <DraggableNode type="merge"        label="Merge"     />
      <DraggableNode type="note"         label="Note"      />
    </div>
    <div style={{ flex: 1 }} />
    <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500 }}>Drag to canvas</span>
  </div>
);
