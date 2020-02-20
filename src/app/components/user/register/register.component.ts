import { ModalComponent } from './../../modal/modal.component';


import { Component, OnInit ,NgZone} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {


get email(){
  return this.registerForm.get('email');
}
get password() {
  return this.registerForm.get('password');
}
  errorMessage = '';
  handleModalModalClose: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder, private ngZone: NgZone, 
  private modalServices: NgbModal) { }
  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
  })

  ngOnInit(){
  }

showModal(){
const modal = this.modalServices.open(ModalComponent);
modal.result.then(
  this.handleModalModalClose.bind(this),
  this.handleModalModalClose.bind(this)
)
  }

  createUser() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
    .then(() => {
       this.router.navigate(['/home']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
    }
}
