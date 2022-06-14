import { Component } from '@angular/core';
import { User } from 'src/web-components/card-user/user';
import '../web-components/card-user/card-user';

@Component({
  selector: 'corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lit-web-components';
  // user: User = {
  //   id: 2,
  //   fullName: 'Luis',
  //   role: 'Software Engineer',
  //   avatar: 'https://luixaviles.com/images/avatar@2x.png',
  // };

  users: User[] = [
    {
      id: 0,
      fullName: 'Lorenzo Simonelli',
      role: 'CEO',
      avatar: 'https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2021-03/Lorenzo%20Simonelli_0.jpg?h=b3e4b506&itok=j5GKpcfH',
    },
    {
      id: 1,
      fullName: 'Rami Qasem',
      role: 'EVP',
      avatar: 'https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2021-03/Rami%20Qasem.JPG?h=88412868&itok=dFY6HSs0'
    }
  ];

  edit(event: Event) {
    const user = (event as CustomEvent<User>).detail;
    console.log('Edit user', user);
  }
}
