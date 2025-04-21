import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TavernFarkleProjectComponent} from './tavern-farkle-project.component';

describe('TavernFarkleProjectComponent', () => {
  let component: TavernFarkleProjectComponent;
  let fixture: ComponentFixture<TavernFarkleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TavernFarkleProjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TavernFarkleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
