import { AppRoutingModule } from './../app-routing.module';
import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  toggleHeader(){
    this.showMenu=!this.showMenu;
  }
  navigateTo=(path:string)=>{
    this.router.navigate([path])
  }

}
