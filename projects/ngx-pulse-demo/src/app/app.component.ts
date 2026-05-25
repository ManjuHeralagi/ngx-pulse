import { Component, signal } from '@angular/core';
import { ToggleComponent } from 'ngx-pulse'; // imported straight from your library!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngx-pulse-demo';
  
  // Track the toggle state using a local signal
  isNotificationsEnabled = signal<boolean>(true);

  // Accessibility demo states
  isDarkMode = signal<boolean>(false);
  isAutoSave = signal<boolean>(true);
  isLocationTracking = signal<boolean>(false);

  // CSS theming demo states
  isBlueToggle = signal<boolean>(true);
  isPurpleToggle = signal<boolean>(false);
  isCompactToggle = signal<boolean>(true);
}