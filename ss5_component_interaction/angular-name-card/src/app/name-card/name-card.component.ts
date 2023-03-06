import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nam-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NamCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
