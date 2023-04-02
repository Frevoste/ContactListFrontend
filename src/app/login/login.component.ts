import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Appuser } from './appuser.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm!: FormGroup;


ngOnInit(){
  this.route.params.subscribe((params:Params)=>{
    this.initForm();
  })
}

/**
 *
 */
constructor(private route: ActivatedRoute,private dataStorageService: DataStorageService) {
  
}

private initForm(){
  let username = '';
  let password = '';

  this.loginForm = new FormGroup({
    'username': new FormControl(username),
    'password': new FormControl(password),
  });

}
onSubmit(){
  let appuser: Appuser = new Appuser(this.loginForm.value.username,this.loginForm.value.password);
  console.log(appuser);
  this.dataStorageService.onLogIn(appuser);
}
}
