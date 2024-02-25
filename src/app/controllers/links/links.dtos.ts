export class PostLinkDto {
	title = '';
	url = '';
	isFavorite = false;
	notes: string | null = null;
	categoryId = 0;
}

export class PutLinkDto extends PostLinkDto {
	id = 0;
}
