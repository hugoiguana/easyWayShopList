import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSchedulingAddPage } from './shop-scheduling-add.page';

describe('ShopSchedulingAddPage', () => {
  let component: ShopSchedulingAddPage;
  let fixture: ComponentFixture<ShopSchedulingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSchedulingAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSchedulingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
