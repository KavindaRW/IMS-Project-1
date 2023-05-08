import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { AchievementsComponent } from './modulse/parent/components/achievements/achievements.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ModulesComponent } from './admin/components/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AchievementsComponent,
    AdminComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
