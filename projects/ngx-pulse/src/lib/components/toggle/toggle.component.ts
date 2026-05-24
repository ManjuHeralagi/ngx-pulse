import { Component, forwardRef, model, effect, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-pulse-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
  providers: [
    {
      // This hooks our custom component right into Angular's global Forms engine
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {
  // 1. The Core Value State (Using the standard model() input)
  // This automatically provides support for standard property binding: [(checked)]="myVar"
  checked = model<boolean>(false);
  
  // Expose as 'value' for compatibility with signal-based forms when they use it
  readonly value = this.checked;

  // 2. Extra Form States
  label = input<string>('');
  disabled = model<boolean>(false);
  touched = signal<boolean>(false);

  // Placeholders to hold classic forms callback functions
  private onChange = (val: boolean) => {};
  private onTouched = () => {};

  constructor() {
    // Whenever our checked signal changes (either by UI click or code modification),
    // this effect automatically passes the new value up to any parent Angular Form APIs
    effect(() => {
      this.onChange(this.checked());
    });
  }

  // Handles UI interaction cleanly
  onToggle(): void {
    if (this.disabled()) return;
    
    this.checked.update(current => !current);
    this.markAsTouched();
  }

  private markAsTouched(): void {
    if (!this.touched()) {
      this.touched.set(true);
      this.onTouched();
    }
  }

  // ==========================================================================
  // --- ControlValueAccessor Implementation ---
  // (This allows classic Template [ngModel] and Reactive [formControl] to work)
  // ==========================================================================

  // Form API pushes a state down programmatically (e.g., control.setValue(true))
  writeValue(value: boolean): void {
    this.checked.set(!!value);
  }

  // Form API gives us the function to run whenever the component updates
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Form API gives us the function to run when the component is blurred/interacted with
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Form API tells us when the form control gets enabled or disabled
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}