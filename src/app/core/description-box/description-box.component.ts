import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {
  public readonly message: string = "Think well before you guess. You have only 2 attempts per day and even after you win, you can come back the next day to try for another jackpot!";
  constructor() { }

  ngOnInit(): void {
  }

}
