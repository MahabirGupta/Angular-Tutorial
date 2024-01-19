  import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-test',
    standalone: true,
    imports: [LowerCasePipe],
    template: `<h2>{{name}}</h2>
              <h2>{{name | lowercase}}</h2>
    `,
    styleUrl: './test.component.css'
  })
  export class TestComponent implements OnInit {

    public name = "Codevolution";
    public message = "Welcome to Codevolution"

    // create an object
    public person = {
      "firstName":"Mahabir",
      "lastName":"Gupta"
    }
    ngOnInit(): void {
      
    }

  }
