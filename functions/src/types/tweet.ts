import type {
  Timestamp,
  FirestoreDataConverter
} from 'firebase-admin/firestore';

export type ImageData = {
  src: string;
  alt: string;
};

export type ImagesPreview = (ImageData & {
  id: number;
})[];

export type Tweet = {
  text: string | null;
  images: ImagesPreview | null;
  parent: { id: string; username: string } | null;
  userLikes: string[];
  createdBy: string;
  createdAt: number;
  updatedAt: number | null;
  userReplies: number;
  userRetweets: string[];
};

export const tweetConverter: FirestoreDataConverter<Tweet> = {
  toFirestore(tweet: any) {
    return { ...tweet };
  },
  fromFirestore(snapshot: { data: () => any; }) {
    const data = snapshot.data();

    return { ...data } as Tweet;
  }
};
