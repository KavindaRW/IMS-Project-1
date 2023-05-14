import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { StudentComponent } from './pages/student/student.component';
<<<<<<< HEAD
import { MarksComponent } from './components/marks/marks.component';
import { MyAttendanceComponent } from './components/my-attendance/my-attendance.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PrizeGivingComponent } from './components/prize-giving/prize-giving.component';
=======
>>>>>>> parent of 6f8c16a (Student tabs)


@NgModule({
  declarations: [
    AchievementsComponent,
<<<<<<< HEAD
    StudentComponent,
    MarksComponent,
    MyAttendanceComponent,
    MyProfileComponent,
    PrizeGivingComponent
=======
    StudentComponent
>>>>>>> parent of 6f8c16a (Student tabs)
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
