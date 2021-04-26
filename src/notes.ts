import * as fs from 'fs';
import * as chalk from 'chalk';

/**
 * All colours
 */
export enum colours { red = 'red', green = 'green', blue = 'blue', yellow = 'yellow' }

export class Notes {

  private static notes: Notes;
  private constructor() {}

  /**
   * Static Method
   * @returns The corresponding object of the class
   */

  public static getNotes(): Notes {
    if (!fs.existsSync(`./database`)) fs.mkdirSync(`./database`, {recursive: true});
    if (!Notes.notes) Notes.notes = new Notes();
    return Notes.notes;
  }

  /**
   * Method that to add a new Note
   */
  addNote(name: string, title: string, body: string, colour: colours): string {
    const structure = `{ "title": "${title}", "body": "${body}" , "color": "${colour}" }`;
    const titleTogether = title.split(' ').join('');
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == false) {
        fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
        console.log(chalk.green(`New note added! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`));
        return `New note added! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`;
      } else {
        console.log(chalk.red('Error: Note title taken!'));
        return 'Error: Note title taken!';
      }
    } else {
      fs.mkdirSync(`./database/${name}`, {recursive: true});
      fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
      console.log(chalk.green(`New note added! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`));
      return `New note added! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`;
    }
  }

  /**
   * Method that allows modifying a note
   * @param name Username
   * @param title Note title
   * @param body Note body
   * @param color Note color
   * @returns An informative chain
   */
  modifyNote(name: string, title: string, body: string, colour: colours): string {
    const structure = `{ "title": "${title}", "body": "${body}" , "color": "${colour}" }`;
    const titleTogether = title.split(' ').join('');
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == true) {
        fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
        console.log(chalk.green(`Modified note! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`));
        return `Modified note! with title: ${title}\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.`;
      } else {
        console.log(chalk.red('Error: Title does not exist!'));
        return 'Error: Title does not exist!';
      }
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }

  /**
   * Method that allows to delete a note
   * @param name Username
   * @param title Note title
   * @returns An informative chain
   */
  removeNote(name: string, title: string): string {
    const titleTogether = title.split(' ').join('');

    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == true) {
        fs.rmSync(`./database/${name}/${titleTogether}.json`);
        console.log(chalk.green('Note removed!'));
        return 'Note removed!';
      } else {
        console.log(chalk.red('Error: Title does not exist!'));
        return 'Error: Title does not exist!';
      }
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }

  /**
   * Method that allows to list all the notes of a specific user with the corresponding titles
   * @param name Username
   * @returns An informative chain
   */
  listNotes(name: string): string {
    if (fs.existsSync(`./database/${name}`) == true) {
      console.log(chalk.white('Your notes:' + '\n'));
      let aux: string = '';
      fs.readdirSync(`./database/${name}/`).forEach((note) => {
        const data = fs.readFileSync(`./database/${name}/${note}`);
        const dataJSON = JSON.parse(data.toString());
        console.log(chalk.keyword(dataJSON.color)(`- ${dataJSON.title}` + '\n'));
        aux = aux + `- ${dataJSON.title}` + '\n';
      });
      return aux;
    } else {
      console.log(chalk.red(`Error: User not found!`));
      return 'Error: User not found!';
    }
  }

  /**
   * Method that allows printing a specific note
   * @param name Username
   * @param title Note title
   * @returns An informative chain
   */
  readNote(name: string, title: string): string {

    const titleTogether = title.split(' ').join('');
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == true) {
        const data = fs.readFileSync(`./database/${name}/${titleTogether}.json`);
        const dataJSON = JSON.parse(data.toString());
        console.log(chalk.keyword(dataJSON.color)(`- Title: ${dataJSON.title} ` + `- Body: ${dataJSON.body}`));
        return `- Title: ${dataJSON.title} ` + `- Body: ${dataJSON.body}`;
      } else {
        console.log(chalk.red('Error: Title does not exist!'));
        return 'Error: Title does not exist!';
      }
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }
}