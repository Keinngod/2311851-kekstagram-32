import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

];

const DESCRIPTION = [
  'Лето - это круто',
  'Шикарная фотка',
  'Мне не понравилось :(',
  'Что это вообще?',
  'А вот это вышло круто!',
  'Почему я это вижу?',
  'Нереально получилось, делай дальше',
  'Вау, отличный кадр',
  'Хочу туда!',
  'Это где?',
  'Норм, реально норм',
];
const NAMES = [
  'АЛЕКСЕЙ',
  'КОЛЯ',
  'ДМИТРИЙ',
  'СТЕПАН',
  'ЛЕВ',
  'ЕКАТЕРИНА',
  'ВЛАД',

];


const generateRandomId = createIdGenerator();

const createMessage = () =>Array.from(
  {length: getRandomInteger(1,2)},
  () => getRandomArrayElement(COMMENT_LINES)

);

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg` ,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id:index,
  url:`photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes:getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)},
    createComment
  ),
});


const getPictures = ()=> Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index)
);

export{getPictures};


