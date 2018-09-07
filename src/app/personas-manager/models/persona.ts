import { Note } from './note';

export class Persona {
   id: number;
   name: string;
   avatar: string;
   bio: string;
   birthDate?: Date;

   notes?: [Note];
 }
