import React, { useState } from 'react';
import './App.css';
import EmailInput from './components/EmailInput';
import AnalysisResults from './components/AnalysisResults';
import LoadingSpinner from './components/LoadingSpinner';

//issues with frontend and backend integration 

function App() {
  const [emailData, setEmailData] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyzeEmail = async () => {
    if (!emailData.trim()) {
      setError('Please enter an email to analyze');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailData }),
      });
      
      if (!response.ok) {
        throw new Error('Server error occurred');
      }
      
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phishing Email Detector</h1>
        <p>Analyze emails for potential phishing attempts</p>
      </header>
      
      <main className="App-main">
        <EmailInput 
          emailData={emailData} 
          setEmailData={setEmailData} 
          onAnalyze={handleAnalyzeEmail} 
        />
        
        {error && <div className="error-message">{error}</div>}
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          results && <AnalysisResults results={results} />
        )}
      </main>
    </div>
  );
}

export default App;