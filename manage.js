import { commands } from './management/commands';

(async () => {
  const [command, ...options] = process.argv.slice(2);
  console.log(`Running ${command}`);
  const output = await commands[command](...options);
  if(output)
    console.log(output);
  process.exit();
})();
