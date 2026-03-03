const fs = require('fs');

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

    if (filePath.includes('.env')) {
      process.stderr.write('BLOCKED: .env files are off limits!\n');
      process.exit(2); // 🚫 stop Claude
    }

  } catch (err) {
    // something went wrong parsing, let it pass
  }

  process.exit(0); // ✅ all good, Claude continues
});