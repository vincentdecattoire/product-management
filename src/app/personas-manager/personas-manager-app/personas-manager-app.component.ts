import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-personas-manager-app',
  templateUrl: './personas-manager-app.component.html',
  styleUrls: ['./personas-manager-app.component.scss']
})
export class PersonasManagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit() {
  }

}
