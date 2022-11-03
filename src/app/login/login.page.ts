import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  npm : any;
  createQR: any;

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  public createQRCode(){
    this.router.navigate(['/tabs/tab1'],{queryParams:{data:this.npm}})
  }

}
