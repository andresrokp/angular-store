import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  myVar1 = 'angular-store';
  myVar2 = 13;
  public myVar3 = 'MePuedenAcceder'
  private myVar4 = 'NoMePuedenAcceder'
}
