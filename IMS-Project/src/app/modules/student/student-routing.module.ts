import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
<<<<<<< HEAD
import { AchievementsComponent } from './components/achievements/achievements.component';
import { MarksComponent } from './components/marks/marks.component';
import { MyAttendanceComponent } from './components/my-attendance/my-attendance.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
=======
>>>>>>> parent of 6f8c16a (Student tabs)
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet:'header'
  },
  {
    path: '',
<<<<<<< HEAD
    component: StudentComponent,
    children:[
      {
        path: '',
        redirectTo:'my-profile', // default routing
        pathMatch:'full'
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: 'marks',
        component: MarksComponent
      },
      {
        path: 'attendance',
        component: MyAttendanceComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      }
    ]
=======
    component: StudentComponent
>>>>>>> parent of 6f8c16a (Student tabs)
  },
  // {
  //   path: 'marks',
  //   component: StudentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
