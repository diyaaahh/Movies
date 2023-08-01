import React, { useState } from 'react';

function MessageDisplay() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      {showMessage && <p>Hello, you clicked the button!</p>}
    </div>
  );
}

export default MessageDisplay;
