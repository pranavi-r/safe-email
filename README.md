# Phishing Email Detector

A web application that looks at email in order to determine if they are phishing attempts.


## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Python (v3.8+)
- pip

## Frontend

## Backend

## Structure

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/phishing-email-detector.git
   cd phishing-email-detector
   ```

2. Set up the backend
   ```
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```

3. Set up the frontend
   ```
   cd ../frontend
   npm install
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Input Email**: Either paste the raw email content or upload an .eml file
2. **Analyze**: Click the "Analyze Email" button to process the content
3. **Review Results**: Examine the risk score and detailed analysis sections
Take Action: Report phishing emails or mark legitimate emails as safe

License
This project is licensed under the MIT License.

Acknowledgments

PhishTank for phishing URL database
NLTK for natural language processing
scikit-learn for machine learning capabilities