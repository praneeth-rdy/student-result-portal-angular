import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ModifyResultComponent } from './pages/modify-result/modify-result.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ResultService } from './result.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentViewComponent,
    AdminViewComponent,
    LayoutComponent,
    ResultCardComponent,
    ModifyResultComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, ResultService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
