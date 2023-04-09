//todo THIS IS NOT USED, ONLY FOR JS PRACTICE AND AVOIDING PURE ABSTRACTION THROUGH REACT; will apply solely through react
// no bueno to manipulate DOM (vanilla js script) then manipulate virtualDOM (react's way)
// this script is simply to study js and dom stuff, overall this should be done in react
// "intersecting" = is it on the screen
//as soon as a single pixel shows on the screen, it is `show`n
const cards = document.querySelectorAll('.card') //selects everything that has a card class

//make new observer, `entries` takes in a list of elements that changed (intersected/unintersected)
const observer = new IntersectionObserver(entries => {
    //`entries` = list of all the items that match the observed item
    //creating what to match it = `xyz.observe(document.query...('ahiru'))
    entries.forEach(entry => {
        //adds `show` class if visible, remove if not
        //if it `isIntersecting` = true  = add `show` class //if false, removes `show` class
        entry.target.classList.toggle('show', entry.isIntersecting);
        //if (entry.isIntersecting) observer.unobserve(entry.target); //todo stop animating (e.g. disappearing animation) when already shown
    })
    console.log(entries); //gives an array that has everything that we're observing and has changed intersections
}, {
    threshold: 1, //`0` (default) = as soon as 1 px of an element is shown = intersecting // `1` 100% = if <100% of an element is shown , disappear
    rootMargin: '-100px', //shrinks container, watch a vid of it, better seen than explained
    //if 100px instead, preloads img if it's 100px away from being shown

})


const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]; //only observe one thing-- the last card
    if (!lastCard.isIntersecting) return; //if the last card becomes visible, generate new cards
    loadNewCards(); //only call when last card is visible basically
    lastCardObserver.unobserve(lastCard.target) //you will have a new last card, this is no longer ur last card, hence unobserve()
    lastCardObserver.observe(document.querySelector('.card:last-child')) //get new last card
}, {})

lastCardObserver.observe(document.querySelector('.card:last-child'))

//to do an observe; what it does is it tells you when the argument does an intersection:
cards.forEach(card => {
    observer.observe(card) //observes every card in your list; `observe()` only takes one argument hence `forEach`
})
// observer.observe(cards[0]); //your first card

const cardContainer = document.querySelector('.card-container'); //the parent div/container
function loadNewCards() {
    //create 10 new cards
 for (let i = 0; i < 10; i++) {
     const card = document.createElement('div');
     card.textContent = "ahiru cute";
     card.classList.add('card'); //adding classname
     observer.observe(card); //observe them and animate them
     cardContainer.append(card); //add to card container
 }
}