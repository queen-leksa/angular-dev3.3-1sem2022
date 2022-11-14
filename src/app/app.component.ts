import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <h1>First App</h1>
      <div class="block"></div>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100vh;
      background-color: lightsalmon;
      padding: 50px;
      box-sizing: border-box;
    }
  `]

})
export class AppComponent {}
