import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Iuser } from '../interfaces/iusers';
import { response } from 'express';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users: Iuser[]=[]
       constructor(private _service: UserService){

       this._service.getAll().subscribe(
          response => {
            this.users = response
          }
        )
       }
}
