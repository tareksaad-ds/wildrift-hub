// .claude/hooks/audit-log.js
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

    const timestamp = new Date().toISOString();
    const tool = data.tool_name;
    const file = data.tool_input?.file_path || 'unknown';

    const logLine = `${timestamp} | ${tool} | ${file}\n`;

    fs.appendFileSync('claude-audit.log', logLine);

  } catch (err) {
    // don't crash, just exit cleanly
  }

  process.exit(0);
});
