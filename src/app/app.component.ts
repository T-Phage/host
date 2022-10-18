import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'mail' },
    { title: 'Mysite', url: '/folder/mysite', icon: 'paper-plane' },
    { title: 'Repository', url: '/folder/repo', icon: 'heart' },
    { title: 'Accounts', url: '/folder/Archived', icon: 'archive' },
    { title: 'Task', url: '/folder/task', icon: 'warning' },
    { title: 'Logout', url: '/folder/Trash', icon: 'logout' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
