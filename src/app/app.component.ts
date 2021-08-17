
/* 
import { ApplicationRef, NgZone, ChangeDetectorRef } from '@angular/core';

// ApplicationRef.tick() - similar to Angular 1's $rootScope.$digest() -- i.e., check the full component tree
private tmp: ApplicationRef, 

// NgZone.run(callback) - similar to $rootScope.$apply(callback) -- i.e., evaluate the callback function inside the Angular 2 zone. I think, but I'm not sure, that this ends up checking the full component tree after executing the callback function.
private tmp: NgZone, 

// ChangeDetectorRef.detectChanges() - similar to $scope.$digest() -- i.e., check only this component and its children
private tmp: ChangeDetectorRef, 
*/


import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  //constructor(public router: Router) { this.router.navigateByUrl('login'); }

  author: string = 'Yotam Hassin';
  title: string = 'My App';

    
}

