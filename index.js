const fs = require('fs');

const createExeFiles = (inputFile) => {
  const items = fs.readFileSync(inputFile, 'utf-8').split('\n').filter(Boolean);

  items.forEach((item, key) => {
    const sanitizedItem = item.replace(/[:™]/g, ' ').trim();
    const fileName = `./game-list/${sanitizedItem}.exe`;

    console.log(`Creating ${sanitizedItem}.exe`);
    fs.writeFileSync(fileName, ''); // Create empty .exe files
  });
}

const main = (inputFile) => {
  if (!fs.existsSync('./game-list')) {
    fs.mkdirSync('./game-list'); // Create the directory if it doesn't exist
  }
  createExeFiles(inputFile);
}

main('games.txt');
