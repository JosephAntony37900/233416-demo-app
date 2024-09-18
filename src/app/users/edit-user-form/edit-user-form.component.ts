import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { Iuser } from '../interfaces/iusers';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css'
})
export class EditUserFormComponent {

  @Input() user: Iuser = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  }

  @Input() disabled: boolean = true

  @Output() eventEmitter = new EventEmitter<Iuser>()

  constructor(private _service: UserService){
  }

  enviar(): void{
    this.eventEmitter.emit(this.user);
  }
  
}