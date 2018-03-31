import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  togger = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onTogger() {
    this.togger.emit();
  }
}
