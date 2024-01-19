import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Add other modules if any
  ],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
