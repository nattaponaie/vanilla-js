var currentPersonIdx = 0;
var persons = [
    {
        avatarUrl: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/202088979_4234972339856651_1661405499228133081_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fLis2t82eyUAX81a-fF&_nc_ht=scontent.fbkk28-1.fna&oh=86c3bbd97054fca42e539b102e2841da&oe=6163AFA4',
        fullName: 'Cristiano Ronaldo',
        position: 'Manchester United Football Player',
        description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team.'
    },
    {
        avatarUrl: 'https://i.insider.com/6113ad8540ea660018d709d6?width=700',
        fullName: 'Lionel Messi',
        position: 'Paris Saint Germain Football Player',
        description: 'Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.'
    },
    {
        avatarUrl: 'https://news.williamhill.com/sweet-caroline/assets/ferdinand.0eb3c68d.png',
        fullName: 'Rio Ferdinand',
        position: 'Manchester United Football Player',
        description: 'Rio Gavin Ferdinand is an English former professional footballer who played as a centre-back, and is now a television pundit for BT Sport. He played 81 times for the England national team between 1997 and 2011, and was a member of three FIFA World Cup squads.'
    }
]

function setAvatar(avatarUrl) {
    const element = document.querySelector('#avatar');
    element.src = avatarUrl;
}

function setName(name) {
    const element = document.querySelector('#name');
    element.textContent = name;
}

function setPosition(position) {
    const element = document.querySelector('#position');
    element.textContent = position;
}

function setDescription(desc) {
    const element = document.querySelector('.description');
    element.textContent = desc;
}

function slide(direction) {
    if (direction === 'prev') currentPersonIdx -= 1;
    if (direction === 'next') currentPersonIdx += 1;

    if (currentPersonIdx < 0) currentPersonIdx = persons.length - 1;
    if (currentPersonIdx > persons.length-1) currentPersonIdx = 0;

    const person = persons[currentPersonIdx];
    setAvatar(person?.avatarUrl);
    setName(person?.fullName);
    setPosition(person?.position);
    setDescription(person?.description);
}

function slidePrev() {
    slide('prev')
}

function slideNext() {
    slide('next')
}

function initiate() {
    const person = persons[currentPersonIdx];
    setAvatar(person?.avatarUrl);
    setName(person?.fullName);
    setPosition(person?.position);
    setDescription(person?.description);
}

document.querySelector('#arrow-prev').addEventListener('click', slidePrev)
document.querySelector('#arrow-next').addEventListener('click', slideNext)
window.addEventListener('load', initiate)