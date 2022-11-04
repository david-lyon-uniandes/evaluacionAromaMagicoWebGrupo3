import { Component, OnInit } from '@angular/core';
import { Coffe } from '../coffe';
import { CoffeService } from '../coffe.service';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {

  coffes: Array<Coffe> = [];

  constructor(private coffeService: CoffeService) { }

  getExhibitionsByMuseum(): void {
    this.coffeService.getCoffes().subscribe((coffes) => {
      this.coffes = coffes;
      console.log(this.coffes)
    });
  }

  ngOnInit() {
    this.getExhibitionsByMuseum()
  }

}
