import React, { useRef, useState, useEffect } from 'react';

const Drawing = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ff0000');
  const [brushSize, setBrushSize] = useState(5);

  // Canvas setup - runs once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = 400;
    canvas.style.border = '4px dashed #6A5ACD';
    canvas.style.borderRadius = '15px';
    canvas.style.backgroundColor = '#FFF8DC';

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = '#ff0000';  // initial color hardcoded here
    context.lineWidth = brushSize;
    contextRef.current = context;
  }, [brushSize]); // run only once

  // Update stroke style and brush size whenever color or brushSize changes
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = brushSize;
    }
  }, [color, brushSize]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#E6E6FA', minHeight: '100vh' }}>
      <h1 style={{ color: '#4B0082', fontSize: '2rem' }}>🎨 Let's Draw Something!</h1>

      <div style={{ margin: '10px 0' }}>
        <label style={{ marginRight: '10px', fontSize: '1.1rem' }}>Pick a color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>

      <div style={{ margin: '10px 0' }}>
        <label style={{ marginRight: '10px', fontSize: '1.1rem' }}>Brush Size:</label>
        <input
          type="range"
          min="2"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />
        <span style={{ marginLeft: '8px' }}>{brushSize}px</span>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ marginTop: '10px' }}
      />

      <div>
        <button
          onClick={clearCanvas}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#FF69B4',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '2px 2px 10px #aaa',
          }}
        >
          🧼 Clear Canvas
        </button>
      </div>
    </div>
  );
};

export default Drawing;
