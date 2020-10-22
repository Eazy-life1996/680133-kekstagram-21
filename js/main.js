'use strict';

const picturesBlock = document.querySelector(`.pictures`);
const pictureTemplate = document.querySelector(`#picture`);
const messages = [`Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];
const names = [`Юрий`,
  `Дмитрий`,
  `Анна`,
  `Владимир`,
  `Алена`,
  `Светлана`
];

const randomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const generatePhotos = function () {
  let photos = [];
  let commentsArr = [];
  for (let i = 1; i < 26; i++) {
    let photo = {
      url: `photos/${i}.jpg`,
      decription: `описание фотографии`,
      likes: randomNumber(15, 200),
      comments: commentsArr
    };
    photos.push(photo);
    for (let g = 1; g < 7; g++) {
      let comment = {
        avatar: `img/avatar-${i}.svg`,
        message: messages[i],
        name: names[i]
      };
      commentsArr.push(comment);
    }
  }
  return photos;
};

const renderPhotoElements = function (photo) {
  const photoElement = pictureTemplate.cloneNode(true).content;

  photoElement.querySelector(`.picture__img`).src = photo.url;
  photoElement.querySelector(`.picture__likes`).textContent = photo.likes;
  photoElement.querySelector(`.picture__comments`).textContent = photo.comment;

  return photoElement;
};

const createPhotoElements = function (array) {
  const fragment = document.createDocumentFragment();
  array.forEach(function (item) {
    fragment.appendChild(renderPhotoElements(item));
  });
  picturesBlock.appendChild(fragment);
};

let photos = generatePhotos();
createPhotoElements(photos);
