import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { addition } from './calculator';

describe('AppComponent', () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Show Alert Message', () => {
    expect(component.showMessage('Hello Tripurari, Unit Test is working')).toBe("Hello Tripurari, Unit Test is working")
  })

  it('Show the Addition Result', ()=> {
    expect(addition(10,20)).toBe(30)
  })

  it('Matcher - Match function', () => {
    var input = "The dotnetoffice tutorials";
    var strPhone = "001-789-56-67";
    expect(input).toMatch(/dotnetoffice/);
    expect(input).toMatch(/dotnetoffice/i);
    // expect(input).not.toMatch(/dot/);
    expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/)
  })

});
