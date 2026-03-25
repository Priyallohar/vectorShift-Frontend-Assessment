// textNode.js

import { useState ,useRef, useLayoutEffect  } from 'react';
import { Handle, Position } from 'reactflow';
import {BaseNode} from "./baseNode"

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };


  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handles = [{ type:"source",position:Position.Right,id:`${id}-output`}]



  return (

    <BaseNode title="Text"  handles={handles}>
       <div>
        <label>
          Text:
          <textarea 
           ref={textareaRef}
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
            style={{ overflow: "hidden", resize: "none" }} 
          />
        </label>
      </div>
    </BaseNode>

    
     

  );
}
