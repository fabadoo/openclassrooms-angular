import {User} from '../model/user.model';
import {Subject} from 'rxjs';

export class UserService {

  private users: User[] = [
    {firstName: 'john', lastName: 'doe', email: 'jdoe@gmail.com', drinkPreference: 'cokes', hobbies: ['gold', 'polo']}
    ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
