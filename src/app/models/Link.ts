import { DateTime } from "luxon";

export class LinkBaseData {
  title = "";
  url = "";
  categoriesIds: number[] = [];
  isFavorite = false;
  notes: string | null = null;

  setDataFromRequest(rawObject: this) {
    this.title = rawObject.title;
    this.url = rawObject.url;
    this.categoriesIds = rawObject.categoriesIds;
    this.isFavorite = rawObject.isFavorite;
    this.notes = rawObject.notes;
  }
}

export class Link {
  id = 0;
  title = "";
  url = "";
  categoriesIds: number[] = [];
  createdAt: string = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
  isFavorite = false;
  notes: string | null = null;
  readAt: DateTime | null = null;

  setBaseData(baseData: LinkBaseData) {
    this.title = baseData.title;
    this.url = baseData.url;
    this.categoriesIds = baseData.categoriesIds;
    this.isFavorite = baseData.isFavorite;
    this.notes = baseData.notes;
  }
}
