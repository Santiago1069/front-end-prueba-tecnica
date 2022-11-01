import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    company: {},
    address: {
      geo: {}
    }
  }
  
  edit: boolean = false;

  constructor( private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params_id = this.activatedRoute.snapshot.params['id'];
    if (params_id) {
      this.userService.getUser(params_id).subscribe(
        res => {
          this.user = res;
          this.edit = true;

        },
        err => console.error(err)
      )
    }
  }

  saveNewUser(){

    delete this.user.id;

    this.userService.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      err => console.error(err)
    )
  }


  updateUser(){
    const this_user_id : String = this.user.id !== undefined ? this.user.id : '';
    this.userService.updateUser(this_user_id, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users'])
      },
      err => console.log(err)
    )
  }

}
