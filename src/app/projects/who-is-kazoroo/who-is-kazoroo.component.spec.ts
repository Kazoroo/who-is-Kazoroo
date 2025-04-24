import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WhoIsKazorooComponent} from './who-is-kazoroo.component';

describe('WhoIsKazorooComponent', () => {
  let component: WhoIsKazorooComponent;
  let fixture: ComponentFixture<WhoIsKazorooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsKazorooComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhoIsKazorooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
