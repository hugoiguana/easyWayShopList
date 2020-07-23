import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSchedulingListPage } from './shop-scheduling-list.page';

describe('ShopscheduleListPage', () => {
  let component: ShopSchedulingListPage;
  let fixture: ComponentFixture<ShopSchedulingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSchedulingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSchedulingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
