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
   * Static public method
   * @returns The corresponding object of the class
   */

  public static getNotes(): Notes {
    if (!fs.existsSync(`./database`)) fs.mkdirSync(`./database`, {recursive: true});
    if (!Notes.notes) Notes.notes = new Notes();
    return Notes.notes;
  }

  /**
   * Public method that allows adding a note
   * @param name Username
   * @param title Note title
   * @param body Note body
   * @param color Note color
   * @returns An informative chain
   */

  addNote(name: string, title: string, body: string, colour: colours): string {
    const structure = `{ "title": "${title}", "body": "${body}" , "color": "${colour}" }`;
    const titleTogether = title.split(' ').join('');

    //Check user
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == false) {
        fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
        console.log(chalk.green(`New note added! title is: ${title}\nNote: If colour is NULL. Yellow is default colour.`));
        return `New note added! with title: ${title}\nNote: If colour is NULL. Yellow is default colour.`;
      } else {
        console.log(chalk.red('Error: Note title is not ok!'));
        return 'Error: Note title is not ok!';
      }
      //New user
    } else {
      fs.mkdirSync(`./database/${name}`, {recursive: true});
      fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
      console.log(chalk.green(`New note added! with title: ${title}\nNote: If colour is NULL. Yellow is default colour.`));
      return `New note added! with title: ${title}\nNote: If colour is NULL. Yellow is default colour.`;
    }
  }

  /**
   * Public method that allows modifying a note
   * @param name Username
   * @param title Note title
   * @param body Note body
   * @param color Note color
   * @returns An informative chain
   */
  modifyNote(name: string, title: string, body: string, colour: colours): string {
    const structure = `{ "title": "${title}", "body": "${body}" , "color": "${colour}" }`;
    const titleTogether = title.split(' ').join('');

    //Check user
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == true) {
        fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
        console.log(chalk.green(`Modified note! with title: ${title}\nNote: If colour is NULL. Yellow is default colour.`));
        return `Modified note! with title: ${title}\nNote: If colour is NULL. Yellow is default colour.`;
      } else {
        console.log(chalk.red('Error: Title does not exist!'));
        return 'Error: Title does not exist!';
      }
      //New user
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }

  /**
   * Public method that allows to delete a note from a specific user through the title
   * @param name Username
   * @param title Note title
   * @returns An informative chain
   */
  removeNote(name: string, title: string): string {
    const titleTogether = title.split(' ').join('');
    //Check user
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${titleTogether}.json`) == true) {
        fs.rmSync(`./database/${name}/${titleTogether}.json`);
        console.log(chalk.green('Note removed!'));
        return 'Note removed!';
      } else {
        console.log(chalk.red('Error: Title does not exist!'));
        return 'Error: Title does not exist!';
      }
      //New user
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }

  /**
   * Public method that allows to list all the notes of a specific user with the corresponding titles
   * @param name Username
   * @returns An informative chain
   */
  listNotes(name: string): string {
    //Check user
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
    //New user
    } else {
      console.log(chalk.red(`Error: User not found!`));
      return 'Error: User not found!';
    }
  }

  /**
   * Public method that allows printing a specific note of a specific user
   * @param name Username
   * @param title Note title
   * @returns An informative chain
   */
  readNote(name: string, title: string): string {
    const titleTogether = title.split(' ').join('');

    //Check user
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
    //New user
    } else {
      console.log(chalk.red('Error: User not found!'));
      return 'Error: User not found!';
    }
  }
}