import foods from './fruits';
import {remove,choice} from './helpers';
let fruit = choice(foods);
console.log(`I'd like one fruit ${fruit} please!`);
console.log(`Here youo go!: ${fruit}`);
console.log(`May I have another one?`);
let remaining = remove(foods, fruit);
console.log(`I am sorry we are all out. We have ${remaining.length} foods left`);
