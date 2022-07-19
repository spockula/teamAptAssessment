import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {
  @Input()
  public inputText: string = "placeholder";
  constructor() { }

  ngOnInit(): void {
  }

}
