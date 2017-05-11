import { Component } from '@angular/core';
import * as Model from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  stackNumber: number = 0;
  stackBase: number = 10; // Default is 10
  stackResult: string;
  queueNumber: number = 7;
  queueResult: string;
  queueUsers: string[] = ['John','Jack','Camila','Ingrid','Carl'];

  public onTestStack(): void {
    this.stackResult = Model.Utility.baseConverter(this.stackNumber, this.stackBase);
  }

  public onTestQueue(): void {
    this.queueResult = Model.Utility.hotPotato(this.queueUsers, this.queueNumber);
  }
}
