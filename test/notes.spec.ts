import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import {Notes, colours} from '../src/notes';

describe('Prueba de la practica 08', () => {
  const notes : Notes = Notes.getNotes();

  describe('Notes class test', () => {
    it('This is a note object', () => {
      expect(Notes).not.to.be.equal(null);
    });

    it('notes.getNotes() returns notes', () => {
      expect(Notes.getNotes()).to.be.equal(notes);
    });

    //Add function test
    describe('add function test', () => {
      it('notes.addNote() returns New note added! with title: Primera nota', () => {
        expect(notes.addNote('Test', 'Primera nota', 'Prueba_01', colours.yellow)).to.be.equal('New note added! with title: Primera nota\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.');
      });

      it('notes.addNote() returns New note added! with title: Segunda nota', () => {
        expect(notes.addNote('Test', 'Segunda nota', 'Prueba_02', colours.yellow)).to.be.equal('New note added! with title: Segunda nota\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.');
      });

      it('notes.addNote() returns New note added! with title: Tercera nota', () => {
        expect(notes.addNote('Test', 'Tercera nota', 'Prueba_03', colours.blue)).to.be.equal('New note added! with title: Tercera nota\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.');
      });

      it('notes.addNote() returns Error: Note title taken! (Porque se repite)', () => {
        expect(notes.addNote('Test', 'Primera nota', 'Prueba_01', colours.yellow)).to.be.equal('Error: Note title taken!');
      });
    });

    //modify function test
    describe('modify function test', () => {
      it('notes.modifyNote() returns Modified note! with title: Primera nota', () => {
        expect(notes.modifyNote('Test', 'Primera nota', 'Prueba_01_modificado', colours.yellow)).to.be.equal('Modified note! with title: Primera nota\nNote: The color must be: red, green, blue, or yellow, yellow is the default color.');
      });

      it('notes.addNote() returns Error: Title does not exist! (La primera nota se ha modificado)', () => {
        expect(notes.modifyNote('Test', 'Primera', 'Prueba_01', colours.yellow)).to.be.equal('Error: Title does not exist!');
      });

      it('notes.addNote() returns Error: User not found!', () => {
        expect(notes.modifyNote('Test2', 'Segunda nota', 'Prueba_02', colours.yellow)).to.be.equal('Error: User not found!');
      });
    });

    //Remove function test
    describe('remove function test', () => {
      it('notes.removeNote() returns Note removed!', () => {
        expect(notes.removeNote('Test', 'Primera nota')).to.be.equal('Note removed!');
      });

      it('notes.removeNote() returns Error: Title does not exist!', () => {
        expect(notes.removeNote('Test', 'PrimeraTitle')).to.be.equal('Error: Title does not exist!');
      });

      it('notes.removeNote() returns Error: User not found!', () => {
        expect(notes.removeNote('Test2', 'Segunda nota')).to.be.equal('Error: User not found!');
      });
    });

    //List function test
    describe('list function test', () => {
      it('notes.listNotes() returns - Segunda nota\n- Tercera nota\n', () => {
        expect(notes.listNotes('Test')).to.be.equal('- Segunda nota\n- Tercera nota\n');
      });

      it('notes.listNotes() returns Error: User not found!', () => {
        expect(notes.listNotes('Test2')).to.be.equal('Error: User not found!');
      });
    });

    //Read function test
    describe('read function test', () => {

      it('notes.readNote() returns - Title: Segunda nota - Body: Prueba_03', () => {
        expect(notes.readNote('Test', 'Segunda nota')).to.be.equal('- Title: Segunda nota - Body: Prueba_02');
      });

      it('notes.readNote() returns - Title: Tercera nota - Body: Prueba_03', () => {
        expect(notes.readNote('Test', 'Tercera nota')).to.be.equal('- Title: Tercera nota - Body: Prueba_03');
      });

      it('notes.readNote() returns Error: Title does not exist!', () => {
        expect(notes.readNote('Test', 'Nota')).to.be.equal('Error: Title does not exist!');
      });

      it('notes.readNote() returns Error: User not found!', () => {
        expect(notes.readNote('Test2', 'Nota')).to.be.equal('Error: User not found!');
      });
    });
  });
});


fs.rmdirSync('./database', {recursive: true});