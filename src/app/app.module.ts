import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: 'user-creation', component: UserRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
