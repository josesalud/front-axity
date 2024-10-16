import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  userForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    correo: new FormControl('',[Validators.required, Validators.email])
  })

  alert:boolean = true;

  constructor(private userService: UserService){

  }

  guardarUsuario(){
    this.userService.saveUser(this.userForm.value).subscribe(response => {
      if(response.httpStatus === "CREATED"){
        this.userForm.reset();
        this.alert = false;
      }
    })
  }

  updateAlert(){
    this.alert = this.alert == true ? false : true;
  }

}
