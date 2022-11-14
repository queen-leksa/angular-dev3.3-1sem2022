import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <h1>First App</h1>
      <div class="block">
        <main-card></main-card>
        <main-card></main-card>
        <main-card></main-card>
        <main-card></main-card>
        <main-card></main-card>
        <main-card></main-card>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100vh;
      background-color: lightsalmon;
      padding: 50px;
      box-sizing: border-box;
    }
    .block {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  `]

})
export class AppComponent {}
