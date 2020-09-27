import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../user/user.service";

@Component({
    selector: 'bs-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor(private userService: UserService, private router: Router) { }

    private signOut(): void {
        let signOut = confirm('Tem certeza que deseja sair?');
        if (signOut) {
            this.userService.logout();
            this.router.navigate(['sign-in']);
        }
    }

}