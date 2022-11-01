import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router'
import {Md5} from 'ts-md5';
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

  showGravatarUrl(email?: String) {
    if(email != null) {
        const email_md5 = Md5.hashStr(email.toString())
        this.user.gravatar = email_md5
        return `https://www.gravatar.com/avatar/${email_md5}?d=robohash&f=y&s=200`
       
    } else {
      return 'https://www.gravatar.com/avatar?f=y'
    }
  }

}
