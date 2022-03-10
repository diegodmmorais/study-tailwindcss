const Display = () => {
  return (
    <>
      <div className="container">
        <span className="m-4 block bg-cyan-600 p-2">Span com bloco</span>
        <span className="m-4 block bg-cyan-600 p-2">Span com bloco</span>
        <div className="m-4 bg-red-600 p-2">Div sem block </div>
        <div className="m-4 bg-red-600 p-2">Div sem block </div>
        <div className="m-4 inline-block bg-red-600 p-2">Div inline block </div>
        <div className="m-4 inline-block bg-red-600 p-2">Div inline block </div>
      </div>
    </>
  );
};

export default Display;
