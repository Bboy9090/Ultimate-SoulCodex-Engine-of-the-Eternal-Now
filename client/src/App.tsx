import { useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message || 'API Response received');
    } catch (error) {
      setMessage('Error connecting to API: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '3rem',
        maxWidth: '600px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          🔮 Soul Codex Engine
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Engine of the Eternal Now
        </p>
        
        <div style={{
          padding: '2rem',
          background: '#f7f7f7',
          borderRadius: '10px',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333' }}>
            ⚠️ Incomplete Installation
          </h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            The complete client application code is missing from this repository. 
            This is a minimal placeholder to allow the build process to complete.
          </p>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '1rem' }}>
            To restore full functionality, you need to copy the complete <code>client/</code> and 
            <code>shared/</code> directories from your Replit deployment to this repository.
          </p>
        </div>

        <button
          onClick={testAPI}
          disabled={loading}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '10px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {loading ? 'Testing...' : '🧪 Test API Connection'}
        </button>

        {message && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: message.includes('Error') ? '#fee' : '#efe',
            border: `1px solid ${message.includes('Error') ? '#fcc' : '#cfc'}`,
            borderRadius: '8px',
            color: message.includes('Error') ? '#c00' : '#060',
          }}>
            {message}
          </div>
        )}

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#fff9e6',
          borderRadius: '10px',
          border: '2px solid #ffd700'
        }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#b8860b' }}>
            📋 Next Steps
          </h3>
          <ol style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li>Restore complete client source code from Replit</li>
            <li>Restore complete shared/schema.ts from Replit</li>
            <li>Set up environment variables (.env file)</li>
            <li>Run <code>npm install</code></li>
            <li>Run <code>npm run build</code></li>
            <li>Run <code>npm start</code> for production mode</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
