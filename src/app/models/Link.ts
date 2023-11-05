import { DateTime } from "luxon";

export class Link {
  id = 0;
  title = "";
  url = "";
  categoriesIds: number[] = [];
  createdAt: string = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
  isFavorite = false;
  notes: string | null = null;
  readAt: DateTime | null = null;
}
