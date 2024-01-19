  import { JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe,DecimalPipe,PercentPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-test',
    standalone: true,
    imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DecimalPipe,PercentPipe,CurrencyPipe,DatePipe],
    template: `<h2>{{name}}</h2>
              <h2>{{name | lowercase}}</h2>
              <h2>{{name | uppercase}}</h2>
              <h2>{{message | titlecase}}</h2>
              <!-- starting from Index 3 but not including index 5 -->
              <h2>{{name | slice:3:5}}</h2>
              <h2>{{person | json}}</h2>

              <!-- Number piping -->
              <h2>{{5.678 | number:"1.2-3"}}</h2>
              <h2>{{5.678 | number:"3.4-5"}}</h2>
              <h2>{{5.678 | number:"3.1-2"}}</h2>

              <h2>{{0.25 | percent}}</h2>
              <h2>{{0.25 | currency}}</h2>
              <h2>{{0.25 | currency:'GBP'}}</h2>
              <h2>{{0.25 | currency:'GBP':'code'}}</h2>
              <h2>{{0.25 | currency:'EUR':'code'}}</h2>

              <h2>{{date}}</h2>
              <h2>{{date|date:'short'}}</h2>
              <h2>{{date|date:'shortDate'}}</h2>
              <h2>{{date|date:'shortTime'}}</h2>

              <h2>{{date|date:'medium'}}</h2>
              <h2>{{date|date:'mediumDate'}}</h2>
              <h2>{{date|date:'mediumTime'}}</h2>

              <h2>{{date|date:'long'}}</h2>
              <h2>{{date|date:'longDate'}}</h2>
              <h2>{{date|date:'longTime'}}</h2>
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

    public date = new Date();
    ngOnInit(): void {
      
    }

  }
