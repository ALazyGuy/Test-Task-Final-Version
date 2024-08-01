import { UserInfo } from './../../../core/models/user-info';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { PopupComponent } from "../../components/popup/popup.component";
import { AccountActionType } from '../../../core/models/account-action';
import { ChangeStatusRequest } from '../../../core/models/change-status-request';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, PopupComponent, NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  userInfo$!: BehaviorSubject<UserInfo | null>;
  allUsersInfo$!: BehaviorSubject<UserInfo[]>;
  isPopupOpen: boolean = false;
  popupLabel: string = '';
  popupError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.loadUserInfo().subscribe();
    this.userInfo$ = this.userService.getUserInfo$();
    this.userInfo$.subscribe({
      next: userInfo => userInfo && userInfo.isAdmin && this.loadAllUsersInfo()
    });
    this.allUsersInfo$ = this.userService.getAllUsersInfo$();
  }

  onControlClick(label: string) {
    this.isPopupOpen = true;
    this.popupLabel = label;
    this.popupError = false;
  }

  onPopupCancel(): void {
    this.isPopupOpen = false;
    this.popupError = false;
  }

  onPopupSubmit(amount: number) {
    const value = this.userInfo$.getValue()?.account.money;
    if(!!value && this.popupLabel === 'Withdraw' && amount > value || amount < 0) {
      this.popupError = true;
      return;
    }

    this.userService.doAccountAction(this.popupLabel.toLowerCase() as AccountActionType, amount);
    this.isPopupOpen = false;
    this.popupError = false;
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  changeAccountStatus(username: string, status: boolean) {
    const body: ChangeStatusRequest = {
      username: username,
      status: status
    };
    this.userService.changeAccountStatus(body);
  }

  private loadAllUsersInfo() {
    this.userService.loadAllUsersInfo();
  }

}
