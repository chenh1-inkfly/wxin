import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NavbarComponent} from './shared/navbar/navbar.component';
import { FigurecardComponent} from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RootComponent} from './dashboard/root/root.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsService} from './services/settings.service';
import { LoginComponent } from './page/login/login.component';
import { CalendarModule} from 'angular-calendar';
import { DemoUtilsModule } from './dashboard/my-calender/demo-utils/module';
import { MyCalendarComponent} from './dashboard/my-calender/my-calendar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    HeaderComponent,
    FooterComponent,
    RootComponent,
    LoginComponent,
    SidebarComponent,
    MyCalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,
    MatCheckboxModule
  ],
  exports: [MyCalendarComponent],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
