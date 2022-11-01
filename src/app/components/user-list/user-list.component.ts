import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService  } from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users: Array<User> = Array();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }

  deleteUser(id?: String){
    if(id != null){
      this.userService.deleteUser(id).subscribe(
        res => {
          console.log(res);
          this.getUsers(); 
        },
        err => console.log(err)
      )
    }
  }

  getGravatarUrl(gravatar: String) {
    return `https://www.gravatar.com/avatar/${gravatar}?d=robohash&f=y&s=200`
  }

}
