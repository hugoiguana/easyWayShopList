import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopAddPage } from './shop-add.page';

describe('ShopAddPage', () => {
  let component: ShopAddPage;
  let fixture: ComponentFixture<ShopAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
