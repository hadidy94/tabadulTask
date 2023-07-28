import { Component, Input } from '@angular/core';
import { ProfileCard } from '../../_helpers/interfaces/profile-card';


@Component({
  selector: 'app-pofile-card',
  templateUrl: './pofile-card.component.html',
  styleUrls: ['./pofile-card.component.scss']
})
export class PofileCardComponent {
  @Input() user: any = {};
  statusTxt : string = '';



  ngOnInit(): void {
    switch(this.user.status) {
      case 1:
      this.statusTxt = 'تم اعداد الطلب';
      break;
      case 2:
        this.statusTxt = 'تم اسناد الطلب';
        break;
      case 3:
        this.statusTxt = 'تم رفع الطلب';
        break;
    }
  }
}
