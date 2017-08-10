import { Component } from "@angular/core";
import { Router } from "@angular/router";

// services
import { UserService } from '../../shared/user/user.service';

// types
import { User } from "../../shared/user/user";

@Component({
  providers:  [UserService],
  selector: "my-app",
  templateUrl: './pages/login/login.component.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent {
  public user: User;
  public isLoggingIn = true;
  public email = 'jessephilip@gmail.com';

  constructor (private router: Router, private userService: UserService) {
    this.user = new User();
    this.user.email = "jessephilip@gmail.com";
    this.user.password = "112233";
  }

  public submit () {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  public login (): void {
    this.userService.login(this.user)
        .subscribe(
          () => this.router.navigate(["/list"]),
          (error) => alert("Unfortunately we could not find your account.")
        );
  }

  public signUp (): void {
    this.userService.register(this.user)
      .subscribe(() => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        }, () => alert("Unfortunately we were unable to create your account.")
      );
  }

  public toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}