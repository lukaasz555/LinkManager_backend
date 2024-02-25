export class CategoryDto {
	name = '';
	color = '';
}
export class PostCategoryDto extends CategoryDto {}

export class PutCategoryDto extends CategoryDto {
	id = 0;
}
