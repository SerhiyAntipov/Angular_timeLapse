import { PostInterface } from './post.interface';
import { UserInterface } from './user.interface';
import { CategoryInterface } from './category.interface';
import { CommentInterface } from './comment.interface';
import { LikeInterface } from './like.interface';

export interface MemInterface {
  bookmark: boolean;
  categories: Array<CategoryInterface>;
  comment: CommentInterface;
  like: LikeInterface;
  meme_id: string;
  post: PostInterface;
  share_link: string;
  size: {w: number, h: number};
  tags: [];
  user: UserInterface;
}
