import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, sanitizer: DomSanitizer) => {
  ir.addSvgIcon(
    'header-left-svg',
    sanitizer.bypassSecurityTrustResourceUrl('/assets/img/header-left-svg.svg')
  )
}
