import React, { useRef } from 'react';

function EmailInput({ emailData, setEmailData, onAnalyze }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setEmailData(event.target.result);
    };
    reader.readAsText(file);
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        setEmailData(text);
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  };

  return (
    <div className="email-input-container">
      <div className="input-options">
        <button 
          className="option-button"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Email File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".eml,.txt"
          style={{ display: 'none' }}
        />
        
        <button className="option-button" onClick={handlePaste}>
          Paste from Clipboard
        </button>
      </div>
      
      <textarea
        className="email-textarea"
        placeholder="Paste email content here or upload an email file..."
        value={emailData}
        onChange={(e) => setEmailData(e.target.value)}
        rows={10}
      />
      
      <button 
        className="analyze-button"
        onClick={onAnalyze}
        disabled={!emailData.trim()}
      >
        Analyze Email
      </button>
    </div>
  );
}

export default EmailInput;