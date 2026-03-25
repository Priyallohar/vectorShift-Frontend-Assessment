import React from 'react'
import { Background } from 'reactflow'
import { Handle } from 'reactflow'

export const BaseNode = ({title, handles ,children }) => {
  return (
    <div className='flex'>
        <div className='flex items-center justify-center'>{title}</div>
        {children}
        {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style || {}}
        />
      ))}
    </div>
  )
}

