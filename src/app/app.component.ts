import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // string interpolation
  myVar1 = 'angular-store';
  myVar2 = 13;
  public myVar3 = 'MePuedenAcceder'
  private myVar4 = 'NoMePuedenAcceder'
  // Property binding
  isDisabled = true;
  name = "Surraj Aonda";
  numerito = 35;
  picUrl = "https://picsum.photos/200/300";
  anObject = {
    isDisabledProp : true,
    nameProp : "Surraj Aonda",
    numeritoProp : 35,
    picUrlProp : "https://picsum.photos/200/300"
  }
}
