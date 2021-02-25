import dotenv from 'dotenv';

import { commands } from './management/commands';


dotenv.config();

const [command, ...options] = process.argv.slice(2);
console.log(command);
const output = commands[command](...options);

console.log(output);
