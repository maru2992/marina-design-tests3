import React, { useState, useEffect } from 'react';
import { Github, LogOut, AlertCircle, HelpCircle } from 'lucide-react';
import { initiateGitHubLogin, isGitHubConnected, disconnectGitHub, handleGitHubCallback, checkRepositoryStatus } from '../utils/githubAuth';
import './GitHubConnectButton.css';

const GitHubConnectButton: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmptyRepo, setIsEmptyRepo] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Check for OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const errorParam = urlParams.get('error');

    if (errorParam) {
      setError(urlParams.get('error_description') || 'GitHub authorization failed');
      setIsLoading(false);
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    if (code && state) {
      setIsLoading(true);
      handleGitHubCallback(code, state)
        .then(async () => {
          // After successful auth, check if the repository is empty
          try {
            const status = await checkRepositoryStatus();
            if (status.isEmpty) {
              setIsEmptyRepo(true);
              setIsConnected(false); // Don't show as fully connected if repo is empty
            } else {
              setIsConnected(true);
            }
          } catch (err) {
            console.error('Failed to check repository status:', err);
            // Default to connected if we can't check
            setIsConnected(true);
          }
          
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        })
        .catch(err => {
          console.error('GitHub connection failed:', err);
          setError(err instanceof Error ? err.message : 'Failed to connect to GitHub');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const connected = isGitHubConnected();
      setIsConnected(connected);
      
      // If already connected, we might want to verify repo status again
      if (connected) {
        checkRepositoryStatus().then(status => {
          if (status.isEmpty) {
            setIsEmptyRepo(true);
            setIsConnected(false);
          }
        }).catch(console.error);
      }
      
      setIsLoading(false);
    }
  }, []);

  const handleConnect = () => {
    setError(null);
    setIsEmptyRepo(false);
    initiateGitHubLogin();
  };

  const handleDisconnect = () => {
    disconnectGitHub();
    setIsConnected(false);
    setIsEmptyRepo(false);
    setError(null);
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  if (isLoading) {
    return (
      <button className="github-button loading" disabled>
        <Github size={20} className="animate-spin" />
        <span>Connecting...</span>
      </button>
    );
  }

  if (isEmptyRepo) {
    return (
      <div className="github-status-container">
        <div className="github-error-banner warning">
          <AlertCircle size={18} />
          <div className="error-content">
            <strong>Repository is empty</strong>
            <p>Your GitHub repository exists, but no code has been pushed to it yet.</p>
            <button className="help-link" onClick={toggleHelp}>
              <HelpCircle size={14} /> How to fix this
            </button>
          </div>
          <button className="disconnect-small" onClick={handleDisconnect} aria-label="Disconnect">
            <LogOut size={14} />
          </button>
        </div>
        
        {showHelp && (
          <div className="github-help-panel">
            <h4>How to push your code:</h4>
            <ol>
              <li>Open your terminal in the project folder</li>
              <li>Run <code>git init</code></li>
              <li>Run <code>git add .</code></li>
              <li>Run <code>git commit -m "Initial commit"</code></li>
              <li>Run <code>git branch -M main</code></li>
              <li>Run <code>git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git</code></li>
              <li>Run <code>git push -u origin main</code></li>
            </ol>
            <button className="retry-button" onClick={() => window.location.reload()}>
              I've pushed my code, refresh
            </button>
          </div>
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-status-container">
        <div className="github-error-banner">
          <AlertCircle size={18} />
          <div className="error-content">
            <strong>Connection Error</strong>
            <p>{error}</p>
          </div>
        </div>
        <button className="github-button" onClick={handleConnect}>
          <Github size={20} />
          <span>Try Again</span>
        </button>
      </div>
    );
  }

  if (isConnected) {
    return (
      <button className="github-button connected" onClick={handleDisconnect} aria-label="Disconnect GitHub">
        <Github size={20} />
        <span>Connected</span>
        <LogOut size={16} className="disconnect-icon" />
      </button>
    );
  }

  return (
    <button className="github-button" onClick={handleConnect} aria-label="Connect to GitHub">
      <Github size={20} />
      <span>Connect GitHub</span>
    </button>
  );
};

export default GitHubConnectButton;