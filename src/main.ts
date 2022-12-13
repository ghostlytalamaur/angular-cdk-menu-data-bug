import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CdkMenuModule } from '@angular/cdk/menu';

@Component({
  selector: 'menu-data-bug',
  template: `
  <button
  [cdkMenuTriggerFor]="menu"
  [cdkMenuTriggerData]="{ $implicit: counter }"
>
  Click me!
</button>
<button (click)="increment()">Increment {{ counter }}</button>

<ng-template #menu let-data>
  <div class="example-menu" cdkMenu>
    <button cdkMenuItemCheckbox>Counter = {{ data }}</button>
  </div>
</ng-template>
  `,
  standalone: true,
  imports: [CdkMenuModule],
})
export class MenuDataBug {
  counter = 1;

  increment() {
    this.counter++;
  }
}

bootstrapApplication(MenuDataBug);
