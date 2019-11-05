import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-deshboard',
  templateUrl: './user-deshboard.component.html',
  styleUrls: ['./user-deshboard.component.scss']
})
export class UserDeshboardComponent implements OnInit {

  constructor(private shareService: ServiceService) {
/* 
    shareService.getAllApiUsers()
    .subscribe(res =>{
      console.log(res);
      
    }) */
  }

  ngOnInit() {


  }

}
