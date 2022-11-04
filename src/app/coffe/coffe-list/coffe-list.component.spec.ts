/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoffeListComponent } from './coffe-list.component';
import { CoffeService } from '../coffe.service';
import { Coffe } from '../coffe';
import { faker } from '@faker-js/faker';

describe('CoffeListComponent', () => {
  let component: CoffeListComponent;
  let fixture: ComponentFixture<CoffeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeListComponent ],
      providers: [ CoffeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const coffe = new Coffe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence()
      );
      component.coffes.push(coffe);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 + header table in td elements', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows).toBeTruthy();
    expect(tableRows.length).toBe(4);
  });

  it('should have the table header correct ', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('#');
    expect(headerRow.cells[1].innerHTML).toBe('Nombre');
    expect(headerRow.cells[2].innerHTML).toBe('Tipo');
    expect(headerRow.cells[3].innerHTML).toBe('Región');
  });


});
