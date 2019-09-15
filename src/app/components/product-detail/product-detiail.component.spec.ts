import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetiailComponent } from './product-detiail.component';

describe('ProductDetiailComponent', () => {
  let component: ProductDetiailComponent;
  let fixture: ComponentFixture<ProductDetiailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetiailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetiailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
