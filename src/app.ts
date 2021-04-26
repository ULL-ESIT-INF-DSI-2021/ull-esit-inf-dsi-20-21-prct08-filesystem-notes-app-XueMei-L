import {Notes, colours} from './notes';
import * as yargs from 'yargs';

const notes : Notes = Notes.getNotes();

/**
 * Command to add a new note
 */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User\'s name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note Color. The colors must be red, green, blue and yellow, yellow is the default color.',
      demandOption: true,
      type: 'string',
    },
  },

  handler(argv) {
    //default colour is yellow 
    let colourNote: colours = colours.yellow;
    if (typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string' && typeof argv.user === 'string') {
      Object.values(colours).forEach((value) => {
        if (argv.color == value) {
          colourNote = value;
        }
      });
      notes.addNote(argv.user, argv.title, argv.body, colourNote);
    }
  },
});


/**
 * Execute according to the command selected by the user
 */
yargs.command({
  command: 'modify',
  describe: 'Modify a note',
  builder: {
    user: {
      describe: 'User\'s name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note Color.',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      let colour: colours = colours.yellow;
      Object.values(colours).forEach((value) => {
        if (argv.color == value) {
          colour = value;
        }
      });
      notes.modifyNote(argv.user, argv.title, argv.body, colour);
    }
  },
});

/**
 * Execute according to the command selected by the user
 */
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    user: {
      describe: 'User\'s name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.removeNote(argv.user, argv.title);
    }
  },
});

/**
 * Execute according to the command selected by the user
 */
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    user: {
      describe: 'User\'s name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      notes.listNotes(argv.user);
    }
  },
});

/**
 * Execute according to the command selected by the user
 */
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    user: {
      describe: 'User\'s name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.readNote(argv.user, argv.title);
    }
  },
});

/**
 * Process arguments
 */
yargs.parse();