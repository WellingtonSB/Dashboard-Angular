import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
    window.scroll(0, 0)
  }
  
}
