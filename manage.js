import { commands } from './management/commands';

const [command, ...options] = process.argv.slice(2);
console.log(`Running ${command}`);
const output = commands[command](...options);
console.log(output);
