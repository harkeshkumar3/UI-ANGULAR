import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ServiceService } from '../service.service';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewUserComponent } from '../popup/view-user/view-user.component';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  private userSelectedData: any = {};
  public rowSelected: boolean = false;

  ngOnInit() {

    this.getAllUserList();
  //  this.dataSource.paginator = this.paginator;
  }


  displayedColumns = ['id', 'firstName', 'username', 'email', 'maxcount', 'currentcount', 'active'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  alluser: any;

  constructor(private service: ServiceService, public dialog: MatDialog) {
    // Create 100 users
    this.service.getAllApiUsers().subscribe(data => {
      this.alluser = data;
      console.log(data);
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.alluser);
      this.dataSource.paginator = this.paginator;

    })


  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    //  this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public getAllUserList() {

    console.log("I am calling");

    this.service.getAllApiUsers()
      .subscribe(data => {
        console.log(data);
        this.alluser = data;

      })
  }

  checkBoxSelected(obj, index) {

    this.userSelectedData = obj;
    this.rowSelected = true;

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      width: '500px',
      data: this.userSelectedData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */