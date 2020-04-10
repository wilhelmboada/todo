import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../service/autenticacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;
  submitted = false;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AutenticacionService) { }

  ngOnInit() {
    this.registrarForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  guardarUsuario(){
    this.submitted = true;
    if (this.registrarForm.invalid) {
      return;
    }
    this.service.guardarUsuario(
      this.registrarForm.get('nombre').value, 
      this.registrarForm.get('apellido').value,
      this.registrarForm.get('usuario').value, 
      this.registrarForm.get('password').value)
        .subscribe(
          response => this.handleSuccessfulResponse(response),
          error => this.handleErrorResponse(error)
        )
    }

  handleSuccessfulResponse(response) {
    alert('Usuario registrado con éxito');
    this.router.navigate(['login'])
  }

  handleErrorResponse(error) {
    console.log('Error mensaje: ' + error);
  }

}
