import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  users:any[] | undefined;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
     this.userService.getAllUser().subscribe(data=>{
        console.log(data);
        this.users = data;
     })
  }


}
