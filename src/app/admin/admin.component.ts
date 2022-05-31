import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/service/admin-service/adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private service: Adminservice) {}

  ngOnInit(): void {}
  GetData() {
    const result = this.service.getUser().subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      },
    });
    console.log(result);
  }
}
