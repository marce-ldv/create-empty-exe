Below is a README file for your project:

---

# Empty .exe File Generator

## Description

This project is a simple script written in Node.js that generates empty .exe files based on a list of game names provided in a text file. It removes any invalid characters such as colons (:) and trademark symbols (™) from the game names before creating the files.

## Requirements

- Node.js version 16.19.0 or higher

## Installation

1. Clone this repository to your local machine. (git clone https://github.com/marce-ldv/create-empty-exe or you an use ssh)
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

1. Place your list of game names in a text file named `games.txt`. Each game name should be on a separate line.
2. Run the command `npm run start` to execute the script.
3. Empty .exe files corresponding to each game name will be generated in the `game-list` directory.

## Example

Suppose `games.txt` contains the following list of game names:

```
Akalabeth: World of Doom
Ascendant™
Bio Menace
Doomdark's Revenge
```

Running the script will create the following .exe files:

- `Akalabeth World of Doom.exe`
- `Ascendant.exe`
- `Bio Menace.exe`
- `Doomdark's Revenge.exe`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
