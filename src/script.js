// Function to validate input against XSS
function validateInput(input) {
  // OWASP C5: Validate all inputs
  // Simple whitelist: allow only letters, numbers, spaces, and a few safe punctuation chars
  // Adjust regex as needed to your use case
  const pattern = /^[a-zA-Z0-9\s\-_,.!?]*$/;

  return pattern.test(input);
}

document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form default submission

  const searchTerm = document.getElementById('searchTerm').value.trim();

  if (!validateInput(searchTerm)) {
    document.getElementById('output').textContent = 'Invalid input detected! Please use only letters, numbers, spaces, and basic punctuation.';
    return;
  }

  // If valid, simulate a search result or further processing
  document.getElementById('output').textContent = `Searching for: "${searchTerm}"`;

  // TODO: Implement actual search logic here
});
