import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  constructor(public navCtrl: NavController, private router: ActivatedRoute) {}
  
  npm:any;

  ngOnInit(): void {
    this.router.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.npm = params.data;
    })
  }

}
