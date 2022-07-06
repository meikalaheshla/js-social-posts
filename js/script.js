// MILESTONE 1 CREO L' ARRAY DI OGGETTI  

const posts = [
    {
        id: 1,
        authorName: 'Giuseppe',
        authorPic: 'https://picsum.photos/id/1/200/300',
        postDate: '12 / 05 / 2022',
        postTeaxt: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum',
        postImg: 'https://picsum.photos/id/100/200/300',
        likesNumber: 5,
    },
    {
        id: 2,
        authorName: 'Franco',
        authorPic: 'https://picsum.photos/id/1/200/300',
        postDate: '12 / 06 / 2022',
        postTeaxt: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum',
        postImg: 'https://picsum.photos/id/1003/200/300',
        likesNumber: 6,
    },
    {
        id: 3,
        authorName: 'Pippo',
        authorPic: 'https://picsum.photos/id/1/200/300',
        postDate: '12 / 07 / 2022',
        postTeaxt: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum',
        postImg: 'https://picsum.photos/id/1002/200/300',
        likesNumber: 8,
    }
]


let postCard = '';
const postContainer = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    postCard += `
    <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src=${post.postImg} alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${post.authorName}</div>
              <div class="post-meta__time">${post.postDate}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
         ${post.postTeaxt}
        </div>
        <div class="post__image">
          <img src=${post.postImg} alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <a class="like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </a>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${post.likesNumber}</b> persone</div>
          </div>
        </div>
      </div>
    </div>

    `

}
postContainer.innerHTML = postCard