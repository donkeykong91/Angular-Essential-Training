import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemResponse>("mediaitems", getOptions).pipe(
      map(function(response) {
        return response.mediaItems;
      }),
      catchError(this.handleError)
    );
  }

  add(mediaItem) {
    return this.http.post('mediaItems', mediaItem);
  }

  delete(mediaItem) {
    return this.http.delete(`mediaItems/${mediaItem.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError("a data error occurred, please try again");
  }
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}
