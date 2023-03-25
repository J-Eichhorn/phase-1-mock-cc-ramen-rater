// write your code here
let url = 'http://localhost:3000/ramens'
let ramenMenu = document.getElementById('ramen-menu')
let ramenDetail = document.getElementById('ramen-detail')
let create = document.getElementById('new-ramen')
let update = document.getElementById('edit-ramen')

fetch(url)
.then(response => response.json())
.then(data => {
    renderRamen(data)
    renderFirstRamen(data)
})

function renderFirstRamen(ramenId1) {
    let ramen1 = ramenId1[0]
    let ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramen1.image

    let ramenName = document.querySelector('.name')
    ramenName.innerText = ramen1.name

    let restaurantName = document.querySelector('.restaurant')
    restaurantName.innerText = ramen1.restaurant

    let ramenRating = document.getElementById('rating-display')
    ramenRating.innerText = ramen1.rating

    let ramenComment = document.getElementById('comment-display')
    ramenComment.innerText = ramen1.comment
}

function renderRamen(ramenArray) {
    ramenArray.forEach(ramen => {
        let image = document.createElement('img')
        image.src = ramen.image
        ramenMenu.append(image)
        image.addEventListener('click', () => {
            let ramenImage = document.querySelector('.detail-image')
            ramenImage.src = ramen.image

            let ramenName = document.querySelector('.name')
            ramenName.innerText = ramen.name

            let restaurantName = document.querySelector('.restaurant')
            restaurantName.innerText = ramen.restaurant

            let ramenRating = document.getElementById('rating-display')
            ramenRating.innerText = ramen.rating

            let ramenComment = document.getElementById('comment-display')
            ramenComment.innerText = ramen.comment
        })
    });
}

create.addEventListener('submit', (e) => {
    e.preventDefault();

        let newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value,
        }    
        
    fetch(url, {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newRamen)
    })
    .then(response => response.json())
    .then(data => renderRamen([data]))
})

//wrap this in a patch function
update.addEventListener('submit', (e) => {
    e.preventDefault()
    let ramenRating = document.getElementById('rating-display')
    ramenRating.innerText = e.target.rating.value

    let ramenComment = document.getElementById('comment-display')
    ramenComment.innerText = e.target['new-comment'].value

    //patch in here
    //fetch(`url/${id}`)
})