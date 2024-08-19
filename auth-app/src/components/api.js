export async function sendLoginRequest(formData) {
  const response = await fetch('http://192.168.101.2:3000/api/v1/readers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'APIKey': '48fdd9794d35198c4867fb0180252908cc742b18835545d4342ae9544748aa0d'
    },
    body: JSON.stringify(formData),
    mode: 'cors',
  });

  return await response.json();
}
