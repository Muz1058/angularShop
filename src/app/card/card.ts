import { ChangeDetectorRef, Component, input,inject } from '@angular/core';
import { NgOptimizedImage, SlicePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { pipe } from 'rxjs';
import { CurrencyPipe,TitleCasePipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  id=input.required()
  images=input()
  title=input('')
  price=input(0)
  description=input('')
  category=input('')

 
}
