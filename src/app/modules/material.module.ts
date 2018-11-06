import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule],
    exports: [MatButtonModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule]
})

export class MaterialModule {}