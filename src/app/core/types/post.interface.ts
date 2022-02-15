export interface PostInterface {
  link: string;
  preview_link: string;
  preview_video_link: string;
  self_created: boolean;
  sensitive: boolean;
  type: 'video' | 'image';
  share_link: string
}
