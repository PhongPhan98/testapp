import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/service/admin-service/adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private service: Adminservice) { }
  testModle = 'Phong';
  ngOnInit(): void { }
  // tslint:disable-next-line: typedef
  GetData() {
    const result = this.service.getUser().subscribe({
      // tslint:disable-next-line: typedef
      next(position) {
        console.log('Current Position: ', position);
      },
      // tslint:disable-next-line: typedef
      error(msg) {
        console.log('Error Getting Location: ', msg);
      },
    });
    console.log(result);
  }

  // tslint:disable-next-line: typedef
  GetModelValue() {
    console.log(this.testModle);
  }
}
