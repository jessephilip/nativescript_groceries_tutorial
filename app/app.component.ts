import { Component } from "@angular/core";

// services
import { UserService } from "./shared/user/user.service";

// types
import { User } from "./shared/user/user";

@Component({
  providers:  [UserService],
  selector: "my-app",
  templateUrl: './pages/login/login.component.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class AppComponent {
  public user: User;
  public isLoggingIn = true;
  public email = 'jessephilip@gmail.com';

  constructor (private userService: UserService) {
    this.user = new User();
  }

  public submit () {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  public login (): void {
    // logic stuff
  }

  public signUp (): void {
    this.userService.register(this.user);
  }

  public toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}