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
  originNumberCoffe: number = 0;
  blendNumberCoffe: number = 0;

  constructor(private coffeService: CoffeService) { }

  getExhibitionsByMuseum(): void {
    this.coffeService.getCoffes().subscribe((coffes) => {
      this.coffes = coffes;
      this.setDistributionTypeCoffe()
    });
  }

  setDistributionTypeCoffe(){
    this.coffes.forEach(coffe => {
      if (coffe.tipo.toLowerCase().includes("origen")){
        this.originNumberCoffe += 1
      }else{
        this.blendNumberCoffe += 1
      }
    });
  }

  ngOnInit() {
    this.getExhibitionsByMuseum()
  }

}
