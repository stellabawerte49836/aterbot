// index.js
// Runs your src/index.ts entry using tsx

const { spawn } = require('child_process');

const child = spawn('npx', ['tsx', './src/index.ts'], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code);
});
