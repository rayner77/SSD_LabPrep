// Validate input for XSS attack (basic whitelist)
function validateXSS(input) {
  const pattern = /^[a-zA-Z0-9\s\-_,.!?]*$/;
  return pattern.test(input);
}

// Validate input for SQL Injection attack (detect suspicious SQL keywords / chars)
function validateSQLInjection(input) {
  // Simple blacklist (you can expand this list as needed)
  const blacklist = /(SELECT|INSERT|UPDATE|DELETE|DROP|--|;|'|")/i;
  return !blacklist.test(input);
}

const homePage = document.getElementById('homePage');
const resultsPage = document.getElementById('resultsPage');
const output = document.getElementById('output');
const searchResult = document.getElementById('searchResult');
const searchForm = document.getElementById('searchForm');
const searchTermInput = document.getElementById('searchTerm');
const backButton = document.getElementById('backButton');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = searchTermInput.value.trim();

  if (!validateXSS(searchTerm)) {
    output.textContent = 'Invalid input detected: Possible XSS attack! Please use only safe characters.';
    searchTermInput.value = '';  // Clear input
    return;
  }

  if (!validateSQLInjection(searchTerm)) {
    output.textContent = 'Invalid input detected: Possible SQL Injection attempt! Please avoid SQL keywords or special characters.';
    searchTermInput.value = '';  // Clear input
    return;
  }

  // Input is valid - show results page
  output.textContent = '';
  searchTermInput.value = '';
  homePage.style.display = 'none';
  resultsPage.style.display = 'block';
  searchResult.textContent = `You searched for: "${searchTerm}"`;
});

backButton.addEventListener('click', () => {
  resultsPage.style.display = 'none';
  homePage.style.display = 'block';
  output.textContent = '';
  searchTermInput.value = '';
  searchTermInput.focus();
});
