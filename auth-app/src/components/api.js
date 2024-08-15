export async function sendLoginRequest(formData) {
  const response = await fetch('http://127.0.0.1:8890/path/path', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return response;
}
