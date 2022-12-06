import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public addFunc() {
    this.router.navigate(['admin/register-new-employee'])
  }

  public addEscala() {
    this.router.navigate(['admin/register-escala'])
  }

}
