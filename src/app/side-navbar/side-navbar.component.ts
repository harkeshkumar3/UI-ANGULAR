import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {




  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isLoggedIn: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver, private _service: ServiceService, private _router: Router) {

    //alert(this.isLoggedIn)



  }
  ngOnInit(): void {
    this.isLoggedIn = this._service.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this._service.logout();
    this._router.navigate(['/login']);

  }


}
