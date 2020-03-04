import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDialogModule,
        MatToolbarModule, MatInputModule, MatTooltipModule, MatBadgeModule, MatSelectModule, MatOptionModule, MatListModule } from '@angular/material';
import { DetailService } from './shared/detail.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommentsComponent } from './comments/comments.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTabsModule} from '@angular/material/tabs';

import { AuthInterceptor } from './auth/auth.interceptor';

import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMessageComponent,
    CommentsComponent,
    AddMessageComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatTooltipModule,
  ],
  entryComponents: [ AddMessageComponent, CommentsComponent],
  providers: [DetailService,UserService,{ 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
