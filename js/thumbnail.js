const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createThumbnail = ({comments, description, likes, url, id})=>{
  const thumbnail = thumbNailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailID = id;
  return thumbnail;
};

const renderThumbnails = (pictures, container) =>{
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails};

