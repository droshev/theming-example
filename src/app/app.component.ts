import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeServiceOutput, ThemesService } from '@fundamental-ngx/core';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output()
  themeChanged = new EventEmitter<ThemeServiceOutput>();

  showWeekCount = false;
  compact = false;
  markWeekends = false;
  cssUrl: SafeResourceUrl;
  cssCustomUrl: SafeResourceUrl;
  themes = this._themesService.themes;
  selectedValue1: string;

  constructor(private _themesService: ThemesService){}

  selectTheme(selectedTheme: string): void {
    this.cssUrl = this._themesService.setTheme(selectedTheme);
    this.cssCustomUrl = this._themesService.setCustomTheme(selectedTheme);

    this.themeChanged.emit({
      themeUrl: this.cssCustomUrl,
      customThemeUrl: this.cssUrl
    });
  }
}
