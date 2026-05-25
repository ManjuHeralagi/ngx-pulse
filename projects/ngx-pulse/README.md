# 🌟 NGX Pulse

Production-ready Angular 19 component library with signal-based architecture. Enterprise-grade components supporting reactive forms, template forms, and two-way binding out of the box.

[![npm version](https://badge.fury.io/js/ngx-pulse.svg)](https://www.npmjs.com/package/ngx-pulse)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ManjuHeralagi/ngx-pulse/blob/main/LICENSE)

## ✨ Features

- 🎯 **Signal-based architecture** - Built with Angular 19's modern signal APIs
- 📝 **Full form integration** - Works with reactive forms, template forms, and two-way binding
- ♿ **Accessible** - WCAG compliant with proper ARIA attributes
- 🎨 **Customizable** - Easy to style and theme
- 📦 **Tree-shakeable** - Small bundle size, import only what you need
- 🔒 **Type-safe** - Written in TypeScript with full type definitions
- 🚀 **Standalone** - No NgModules required

## 📦 Installation

```bash
npm install ngx-pulse
```

## 🚀 Quick Start

```typescript
import { Component } from '@angular/core';
import { ToggleComponent } from 'ngx-pulse';

@Component({
  standalone: true,
  imports: [ToggleComponent],
  template: `
    <ngx-pulse-toggle 
      [(checked)]="isEnabled" 
      label="Enable notifications">
    </ngx-pulse-toggle>
    
    <p>Status: {{ isEnabled ? 'ON' : 'OFF' }}</p>
  `
})
export class AppComponent {
  isEnabled = false;
}
```

## 📚 Components

### Toggle Component

A customizable toggle switch with full form integration.

#### Basic Usage

```typescript
<ngx-pulse-toggle 
  [(checked)]="myValue" 
  label="My Toggle">
</ngx-pulse-toggle>
```

#### With Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from 'ngx-pulse';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, ToggleComponent],
  template: `
    <form [formGroup]="myForm">
      <ngx-pulse-toggle 
        formControlName="notifications"
        label="Email notifications">
      </ngx-pulse-toggle>
      
      <ngx-pulse-toggle 
        formControlName="marketing"
        label="Marketing emails">
      </ngx-pulse-toggle>
    </form>
  `
})
export class MyComponent {
  myForm = new FormGroup({
    notifications: new FormControl(true),
    marketing: new FormControl(false)
  });
}
```

#### With Template-Driven Forms

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from 'ngx-pulse';

@Component({
  standalone: true,
  imports: [FormsModule, ToggleComponent],
  template: `
    <ngx-pulse-toggle 
      [(ngModel)]="isActive" 
      name="status"
      label="Active status">
    </ngx-pulse-toggle>
  `
})
export class MyComponent {
  isActive = false;
}
```

#### Disabled State

```typescript
<ngx-pulse-toggle 
  [(checked)]="myValue"
  [disabled]="true"
  label="Cannot change this">
</ngx-pulse-toggle>
```

#### Accessibility

The toggle is built with accessibility in mind — proper ARIA attributes, keyboard focus indicators, and screen reader support are included out of the box.

**With `ariaLabel` (when no visible label is used):**

```html
<ngx-pulse-toggle 
  [(checked)]="isDarkMode"
  ariaLabel="Toggle dark mode">
</ngx-pulse-toggle>
```

**With `ariaLabelledby` (referencing an external label element):**

```html
<h3 id="notifications-heading">Notification Preferences</h3>
<ngx-pulse-toggle 
  [(checked)]="notificationsEnabled"
  ariaLabelledby="notifications-heading">
</ngx-pulse-toggle>
```

**With `ariaDescribedby` (adding supplementary help text):**

```html
<ngx-pulse-toggle 
  [(checked)]="autoSave"
  label="Auto-save"
  ariaDescribedby="autosave-help">
</ngx-pulse-toggle>
<p id="autosave-help">Automatically saves your work every 30 seconds.</p>
```

**With custom `id` and `name` (useful in native forms):**

```html
<ngx-pulse-toggle 
  [(checked)]="termsAccepted"
  id="accept-terms"
  name="terms"
  label="I accept the terms and conditions">
</ngx-pulse-toggle>
```

**Keyboard support:**
- `Tab` / `Shift+Tab` — moves focus to and from the toggle
- `Space` — toggles the checked state
- A visible focus ring appears when navigating via keyboard

#### API Reference

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `checked` | `boolean` | `false` | Toggle state (supports two-way binding with `[(checked)]`) |
| `label` | `string` | `''` | Label text displayed next to the toggle |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `id` | `string` | auto-generated | Unique ID for the input element, used for label association |
| `name` | `string` | `''` | Name attribute for native form submission |
| `ariaLabel` | `string` | `''` | Accessible label for screen readers (use when no visible `label` is provided) |
| `ariaLabelledby` | `string` | `''` | ID of an external element that labels this toggle |
| `ariaDescribedby` | `string` | `''` | ID of an element providing additional description |
| `tabIndex` | `number` | `0` | Custom tab index (`-1` is set automatically when disabled) |

## 🎨 Styling

The toggle component uses CSS custom properties for easy customization. Override them on the `ngx-pulse-toggle` element:

```css
ngx-pulse-toggle {
  /* Track */
  --toggle-width: 48px;
  --toggle-height: 24px;
  --toggle-bg-off: #ccc;
  --toggle-bg-on: #4CAF50;
  --toggle-border-radius: 24px;
  --toggle-transition-duration: 0.3s;

  /* Knob */
  --toggle-knob-size: 20px;
  --toggle-knob-color: #fff;

  /* Label */
  --toggle-label-size: 14px;
  --toggle-label-color: #333;

  /* States */
  --toggle-disabled-opacity: 0.5;
  --toggle-focus-color: var(--toggle-bg-on);
}
```

**Example — Blue theme with a larger toggle:**

```css
ngx-pulse-toggle.blue-lg {
  --toggle-width: 56px;
  --toggle-height: 28px;
  --toggle-knob-size: 24px;
  --toggle-bg-on: #2196F3;
  --toggle-focus-color: #2196F3;
}
```

## 🗺️ Roadmap

- [x] Accessibility improvements (ARIA attributes, keyboard navigation)
- [ ] Additional size options (small, medium, large)
- [ ] Custom color theming
- [ ] Animation options
- [ ] Button component
- [ ] Input component
- [ ] Checkbox component
- [ ] Radio button component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © [ManjuHeralagi](https://github.com/ManjuHeralagi)

## 🔗 Links

- [GitHub Repository](https://github.com/ManjuHeralagi/ngx-pulse)
- [npm Package](https://www.npmjs.com/package/ngx-pulse)
- [Report Issues](https://github.com/ManjuHeralagi/ngx-pulse/issues)

## 💡 Support

If you find this library helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

**Built with ❤️ using Angular 19**