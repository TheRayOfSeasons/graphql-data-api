import { commands } from './management/commands';

const [command, ...options] = process.argv.slice(2);
console.log(command);
const output = commands[command](...options);

console.log(output);
