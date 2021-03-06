import { User } from '../user/user';
import { Comment } from './comment';

export class FileEntry {
  public title: string;
  public name: string;
  public content: string;
  public user?: User;
  public created?: Date;
  public _id?: string;
  public comments?: Array<Comment>;
  public slug?: string;
}

