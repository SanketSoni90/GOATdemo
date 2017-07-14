import { Component } from '@angular/core';

import { PaUserInfoService } from './paUserInfo.service';

@Component({
  selector: 'pa-user-info',
  providers: [PaUserInfoService],
  styleUrls: ['./paUserInfo.scss'],
  templateUrl: './paUserInfo.html'
})

export class PaUserInfoComponent {

  public userinfo: Object[];

  constructor(private _paUserInfoService: PaUserInfoService) {
    this.userinfo = this._paUserInfoService.getUserInfo();
  }

}
