import { Component, forwardRef, model, effect, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Auto-incrementing unique ID counter
let nextUniqueId = 0;

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

  // 3. Accessibility inputs — allows consumers to wire up proper ARIA semantics
  // Uses a deterministic auto-incrementing counter
  id = input<string>(`ngx-pulse-toggle-${++nextUniqueId}`);
  name = input<string>('');
  ariaLabel = input<string>('');
  ariaLabelledby = input<string>('');
  ariaDescribedby = input<string>('');
  tabIndex = input<number>(0);

  // Placeholders to hold classic forms callback functions
  private onChange = (val: boolean) => { };
  private onTouched = () => { };

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

  // Called from the template on (blur) to mark the control as touched for form validation.
  // Must NOT be private — Angular templates cannot access private members.
  markAsTouched(): void {
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