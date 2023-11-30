import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private router: Router) { }
  
  ngOnInit() { }

  signIn(user: string, password: string) {
    console.log(user);
    this.router.navigate(['/directives']);
  }
}
