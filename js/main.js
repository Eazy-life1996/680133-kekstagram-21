'use strict';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');
const messages = ["Всё отлично!",
                  "В целом всё неплохо. Но не всё.",
                  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
                  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
                  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
                  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
                 ];
const names = ["Юрий",
               "Дмитрий",
               "Анна",
               "Владимир",
               "Алена",
               "Светлана"
               ];

let photos = [];
let commentsArr = [];

const randomNumber = function(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const renderPhotos = function() {
  for (let i = 0; i < 25; i++) {
    let photo = {
        url : "../photos/{i}.jpg",
        decription : "описание фотографии",
        likes : randomNumber(15, 200),
        comments : commentsArr
      }
    photos.push(photo);

    for (let g = 0; g < 6; g++) {
      let comment = {
          avatar: "../img/avatar-{i}.svg",
          message: messages[i],
          name: names[i] 
        }
      commentsArr.push(comment);
    }
  }
  return photos;
};

const renderPhotoElements = function(photos) {
  const photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = photos.url;
  photoElement.querySelector('.picture__likes').textContent = photos.likes;
  photoElement.querySelector('.picture__comments').textContent = photos.comments;

  return photoElement;
}

const createPhotoElements = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    fragment.appendChild(renderPhotoElements(photos[i]));
  }
  picturesBlock.appendChild(fragment);
};

renderPhotos();
renderPhotoElements(photos);
createPhotoElements();