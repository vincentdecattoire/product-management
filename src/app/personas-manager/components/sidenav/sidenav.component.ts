import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia('(max-width: ' + SMALL_WIDTH_BREAKPOINT + 'px)');

  personas: Observable<Persona[]>;

  constructor(
    zone: NgZone,
    private router: Router,
    private personasService: PersonasService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(
        () =>
          this.mediaMatcher = mql)

    );

  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.personas = this.personasService.personas;
    this.personasService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isSmallScreen()) { this.sidenav.close(); }
    });

  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }



}
