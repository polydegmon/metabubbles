import { Component } from '@angular/core';

import { CircleService } from '../../services/circle.service';

@Component({
  moduleId: module.id,
  selector: 'metabubblesApp',
  templateUrl: 'app.component.html',
  providers: [CircleService]
})

export class AppComponent {
  name = 'Metabubbles';
}