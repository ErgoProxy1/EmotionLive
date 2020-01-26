export interface Reason{
  id: number,
  emotions: string[],
  reason: string,
  imageUrl: string
}

export const REASONS: Reason[] = [
  { id: 1, emotions: ['anger', 'sadness'], reason: 'someone was mean', imageUrl: './assets/anger_mean.jpg' },
  { id: 2, emotions: ['anger', 'sadness', 'surprise'], reason: 'something broke', imageUrl: './assets/anger_break.jpg' },
  { id: 3, emotions: ['anger', 'sadness'], reason: 'you miss someone', imageUrl: './assets/anger_miss.jpg' },
  { id: 4, emotions: ['anger', 'sadness'], reason: 'you want something', imageUrl: './assets/anger_want.jpg' },
  { id: 5, emotions: ['anger', 'sadness', 'fear', 'surprise'], reason: 'someone scared you', imageUrl: './assets/anger_scared.jpg' },
  { id: 6, emotions: ['fear', 'disgust'], reason: 'you saw a spider', imageUrl: './assets/disgust_spider.jpg' },
  { id: 7, emotions: ['fear'], reason: 'you don\'t know what\'s going on', imageUrl: './assets/fear_confused.jpg' },
  { id: 8, emotions: ['fear'], reason: 'you are lost', imageUrl: './assets/fear_lost.jpg' },
  { id: 9, emotions: ['disgust'], reason: 'something is not clean', imageUrl: './assets/disgust_dirty.jpg' },
  { id: 10, emotions: ['joy'], reason: 'you like the activity', imageUrl: './assets/happy_activity.jpg' },
  { id: 11, emotions: ['joy'], reason: 'you are feeling well', imageUrl: './assets/happy_well.jpg' },
  { id: 12, emotions: ['joy'], reason: 'you found something funny', imageUrl : './assets/happy_laugh.jpg'}
];