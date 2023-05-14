import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

<<<<<<< HEAD
  activeId = StudentTabTypes.MYPROFILE;
  activeTab?: StudentTab;
  readonly studentTabTypes: typeof StudentTabTypes = StudentTabTypes
  tabList: StudentTab[] = [
    {
      id: 1,
      title: 'Achievement',
      active: false,
      type: StudentTabTypes.ACHIEVEMENT,
      routeTitle: 'achievements'

    },
    {
      id: 2,
      title: 'Marks',
      active: false,
      type: StudentTabTypes.MARK,
      routeTitle: 'marks'

    },
    {
      id: 3,
      title: 'My Attendance',
      active: false,
      type: StudentTabTypes.ATTENDANCE,
      routeTitle: 'attendance'

    },
    {
      id: 4,
      title: 'My Profile',
      active: false,
      type: StudentTabTypes.MYPROFILE,
      routeTitle: 'my-profile'

    }
  ];


  constructor(  private readonly router: Router,
    ) {
    this.setActive(this.tabList[0]);
  }


  setActive(item: StudentTab): void {
    this.activeTab = item;
    this.activeId = item.type;
  }

  getActive(choice: string): string {
    return this.activeId === choice ? 'active' : 'not';
  }

  async beforeTabChange(event: NgbNavChangeEvent): Promise<void> {
    console.log(event);
    
    event.preventDefault();
    // get next tab
    const index: number = this.tabList.findIndex(
      (item: StudentTab) => item.type === event.nextId
    );
    console.log(index);
    
    if (index !== -1) {
      const item: StudentTab = this.tabList[index];
      this.setActive(item);
      this.router.navigate([`/student/${item?.routeTitle}`]);
    }
   
  }




=======
>>>>>>> parent of 6f8c16a (Student tabs)
}
