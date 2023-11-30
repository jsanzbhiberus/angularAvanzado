// src/app/custom-component.component.ts

import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service.ts.service';

@Component({
  selector: 'app-custom-component',
  template: `
    <div>
      <h2>Custom Component llamada</h2>
      <button (click)="fetchData2()">Fetch Data 2</button>
      <pre>{{ data | json }}</pre>
    </div>
    <div>
    <h2>Custom Component llamada</h2>
    <button (click)="fetchData3()">Fetch Data 3</button>
    <pre>{{ data | json }}</pre>
  </div>
  `,
})
export class CustomComponent implements OnInit {
  data: any;

  constructor(private customHttpClient: CustomHttpClientService) {}

  ngOnInit() {
   
    // Puedes llamar a fetchData aquí al inicio si es necesario
  }

  fetchData2() {
   
    this.customHttpClient.get('https://jsonplaceholder.typicode.com/todos/2').subscribe((response) => {
      this.data = response;
    });
  }

  fetchData3() {
   
    this.customHttpClient.get('https://jsonplaceholder.typicode.com/todos/3').subscribe((response) => {
      this.data = response;
    });
  }
}
