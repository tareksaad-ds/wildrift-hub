const fs = require('fs');
const { execSync } = require('child_process');

let input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || '';

    // Only format React and JS files
    const shouldFormat = ['.jsx', '.js', '.tsx', '.ts', '.css']
      .some(ext => filePath.endsWith(ext));

    if (shouldFormat && filePath) {
      execSync(`npx prettier --write "${filePath}"`);
    }

  } catch (err) {
    // something went wrong, let it pass silently
  }

  process.exit(0); // always exit 0 — we never want to block here
});