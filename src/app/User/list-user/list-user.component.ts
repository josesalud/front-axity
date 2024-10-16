import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  users:any[];

  constructor(private userService: UserService){
    this.users = []
  }

  ngOnInit(): void {
     this.userService.getAllUser().subscribe(data=>{
        this.users = data.users;
     })
  }


}
