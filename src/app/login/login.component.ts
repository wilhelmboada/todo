import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Se le llama component property
  username = 'wilhelmboada'
  password = ''

  // Para redireccionar a otra página necesito una instancia de Router
  // Inyección de dependencia
  // En este caso router es una dependecia de LoginComponent
  constructor(private router: Router) { }

  ngOnInit() {
  }

    // Se le component event
  handleLogin(){
    if(this.username === 'wilhelmboada' && this.password === 'wilhelmboada')
    // Redireccionar a welcome page
    // navigate nos ayuda a enrutar una página específica
    this.router.navigate(['welcome', this.username])
    console.log('Username: ' + this.username)
  }

}
