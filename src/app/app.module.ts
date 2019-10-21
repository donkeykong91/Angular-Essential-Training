import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';

const lookupLists = {
  mediums: ['Movies', 'Series']
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    { provide: 'lookupListToken', useValue: lookupLists}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
