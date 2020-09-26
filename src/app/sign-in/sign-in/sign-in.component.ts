import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { Error} from "src/app/core/components/errors/error";
import { UserService } from "src/app/core/user/user.service";

@Component({
    selector: 'bs-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.css']
})
export class SignInComponent implements OnInit {

    private loginForm: FormGroup;
    private errors: Error[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.loginForm = this.formBuilder.group({
            userId: [null, Validators.required],
            password: [null, Validators.required],
        });
    }

    private showInputErrorMessage(inputName: string): boolean {
        const input = this.loginForm.get(inputName);
        return input.invalid && (input.dirty || input.touched);
    }

    private signIn(): void {
        const userId = this.loginForm.get('userId').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userId, password)
            .subscribe(
                res => this.loginSucceded(res),
                res => this.loginFailed(res)
            );
    }

    private loginSucceded(res): void {
        this.userService.setToken(res.accessToken);
        this.router.navigate(['books']);
    }

    private loginFailed(res): void {
        const error = new Error();
        error.message = res.error.message;
        this.errors = [error];
        this.loginForm.get('password').reset();
    }
}