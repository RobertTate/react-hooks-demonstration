const displayCode = 
`import React, { useState, useRef, useLayoutEffect } from 'react';

export default function CollapsibleSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  // Toggle the state between open and close
  const toggleOpen = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const contentHeight = isOpen ? contentRef.current.scrollHeight : 0;
      setHeight(contentHeight);
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Collapse' : 'Expand'}
      </button>

      <div
        ref={contentRef}
        style={{
          overflow: 'hidden',
          transition: 'height 0.3s',
          height: \`\${height}px\`
        }}
      >
        <p>
          This is the content of the Collapsible Section. 
          <strong> It can vary in height based on the amount of content
          and width of the viewport.</strong>
          <br></br>
          <br></br>
          As such, when it opens, we have
          to use JavaSript to determine the height, to expand
          it to the right size. Otherwize, you may not see all the
          content.
        </p>
      </div>
    </div>
  );
}`

export default displayCode;
