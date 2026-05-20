const fs = require('fs');
const files = ['event-kemerdekaan-bg.svg', 'event-kemerdekaan-robot.svg', 'event-pramuka-bg.svg', 'event-pramuka-robot.svg'];
for (const file of files) {
  let content = fs.readFileSync('public/' + file, 'utf8');
  content = content.replace('preserveAspectRatio="xMidYMid slice"', 'preserveAspectRatio="xMinYMax slice"');
  fs.writeFileSync('public/' + file, content);
  console.log('Fixed ' + file);
}
