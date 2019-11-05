import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatMenuModule,MatDialogModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatAutocompleteModule, MatProgressSpinnerModule, MatExpansionModule, MatDividerModule, MatRadioModule, MatCheckboxModule, MatBadgeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UserDeshboardComponent } from './Dashboard/user-deshboard/user-deshboard.component';
import { AssignCompanyComponent } from './assign-company/assign-company.component';
import { JwtInterceptor } from './httpconfig.interceptor';
import { ServiceService } from './service.service';
import { LoginComponent } from './form/login/login.component';
import { FormsModule } from '@angular/forms';
import { ViewUserComponent } from './popup/view-user/view-user.component';
import { AuthGuard } from './auth.guard';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PasswordResetComponent } from './form/password-reset/password-reset.component';
import { PasswordForgetComponent } from './form/password-forget/password-forget.component';
import { PasswordThanksComponent } from './form/password-thanks/password-thanks.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-creation', component: UserRegistrationComponent, canActivate: [AuthGuard] },
  { path: 'user-deshboard', component: UserDeshboardComponent, canActivate: [AuthGuard] },
  { path: 'company-assign', component: AssignCompanyComponent, canActivate: [AuthGuard] },
  { path: 'view-user', component: ViewUserComponent, canActivate: [AuthGuard] },
  { path: 'forget', component: PasswordForgetComponent },
  { path: 'reset', component: PasswordResetComponent },
  { path: 'resetLink', component: PasswordThanksComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    UserRegistrationComponent,
    MatTableComponent,
    UserDeshboardComponent,
    AssignCompanyComponent,
    LoginComponent,
    PasswordResetComponent,
    PasswordForgetComponent,
    PasswordThanksComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatMenuModule



  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
