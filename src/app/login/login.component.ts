import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../service/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AutenticacionService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleLogin(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.service.login(this.loginForm.get('usuario').value, this.loginForm.get('password').value)
        .subscribe(
          response => this.handleSuccessfulResponse(),
          error => this.handleErrorResponse(error)
        )
    }

  handleSuccessfulResponse() {
    this.router.navigate(['bienvenido'])
  }

  handleErrorResponse(error) {
    alert('Usuario o clave invalida');
    console.log('Error mensaje: ' + JSON.stringify(error.error));
  }
}
