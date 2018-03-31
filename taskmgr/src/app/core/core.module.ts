import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule, MatToolbarModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule { 
  constructor(ir: MatIconRegistry, ds: DomSanitizer){
    loadSvgResources(ir,ds);
  }
}
