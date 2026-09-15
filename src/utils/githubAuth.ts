const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
const REDIRECT_URI = window.location.origin;

export const initiateGitHubLogin = () => {
  const state = Math.random().toString(36).substring(7);
  localStorage.setItem('github_auth_state', state);
  
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'repo user',
    state: state,
  });

  window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
};

export const handleGitHubCallback = async (code: string, state: string) => {
  const savedState = localStorage.getItem('github_auth_state');
  if (state !== savedState) {
    throw new Error('Invalid state parameter');
  }
  
  // In a real app, you would exchange the code for a token via your backend.
  // Since this is a client-side only app without a backend to hide the client secret,
  // we simulate the connection state for UI purposes.
  
  // Simulate checking if repository is empty (for demonstration purposes)
  // If we wanted to simulate an empty repo, we could throw an error here.
  // throw new Error('github repository empty');
  
  localStorage.setItem('github_connected', 'true');
  localStorage.removeItem('github_auth_state');
};

export const isGitHubConnected = () => {
  return localStorage.getItem('github_connected') === 'true';
};

export const disconnectGitHub = () => {
  localStorage.removeItem('github_connected');
};

export const checkRepositoryStatus = async (): Promise<{ isEmpty: boolean }> => {
  // Simulate checking if the repository is empty
  // In a real implementation, this would call the GitHub API: GET /repos/{owner}/{repo}
  // and check if it returns 409 Conflict (Git Repository is empty) or check the size/branches.
  
  // For now, we'll just return true. If you want to test the error state, 
  // you can change this to throw new Error('github repository empty');
  return { isEmpty: false };
};
