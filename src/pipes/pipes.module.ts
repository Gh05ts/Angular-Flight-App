import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProviderTypePipe } from './filter-provider-type.pipe';



@NgModule( {
    declarations: [
      FilterProviderTypePipe
    ],
    exports: [
      FilterProviderTypePipe
    ],
    imports: [
      CommonModule
    ]
} )
export class PipesModule { }