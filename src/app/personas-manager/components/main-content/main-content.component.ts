import { PersonasService } from './../../services/personas.service';
import { Persona } from './../../models/persona';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  persona: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonasService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) {id = 1; }
      this.personaService.personas.subscribe( personas => {
        if ( personas.length === 0) { return ; }

        this.persona = this.personaService.personaById(id);
    });
    });
  }

}
