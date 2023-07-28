import { Component, Input } from '@angular/core';
import { ProfileCard } from './_helpers/interfaces/profile-card';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  usersData: ProfileCard[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsersData().subscribe((x: ProfileCard[]) => (this.usersData = x));
  }


}
