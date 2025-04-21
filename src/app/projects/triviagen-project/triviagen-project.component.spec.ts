import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TriviagenProjectComponent} from './triviagen-project.component';

describe('TriviagenProjectComponent', () => {
  let component: TriviagenProjectComponent;
  let fixture: ComponentFixture<TriviagenProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviagenProjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TriviagenProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
