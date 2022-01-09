const cards = document.getElementsByClassName('card');
const selectedName= document.getElementById('selected-card');

/**
 * GET NAME HERO BY INDEX
 * @param {*} cardIndex 
 * @returns 
 */
const showCardNameByIndex = (cardIndex) => {
    switch(cardIndex) {
        case 0:
            return "Rồng bầu trời của thần Osiris";
        case 1:
            return "Rồng bay của thần Ra";
        case 2:
            return "Thần phá hoại Obelisk";
        case 3:
            return "Nữ thần Ánh sáng";
    }
}

[].forEach.call(cards, (card, index) => {
    card.addEventListener("click", () => {
        selectedName.innerHTML = `Selected God: ${showCardNameByIndex(index)}`;
    })
});
