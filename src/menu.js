const menu=(()=>{
function render(){
    const content=document.querySelector('#content');

    const drinksMenu=document.createElement('div');
    drinksMenu.setAttribute('id', 'menu');


    const drinks=[
        {
            name:"Strawberry daiquiri",
            recipe:"Rum, lime, simple syrup and several strawberries are combined with ice and blended until smooth.",
            price:'7$',
        },
        {
            name:"Sambuca Citrus Martini",
            recipe:"4 ounces Absolut Citron, Ketel One Citronelle,2 ounces Sambuca,6 dashes orange bitters, juice of one lemon, Ice, 6 espresso beans for garnish.",
            price:'9$',
        },
        {
            name:"Pina Colada",
            recipe:"2 ounces light rum, 1 1/2 ounces cream of coconut, 1 1/2 ounces pineapple juice, 1/2 ounce lime juice, pineapple wedge, pineapple leaf.",
            price:'8$',
        },
        {
            name:"Malibu Sunrise Cocktail",
            recipe:"pineapple juice, orange juice, Malibu coconut rum, and grenadine.",
            price:'4$',
        },
        {
            name:"Diamond Blue Cocktail",
            recipe:"3/4 ounce Hendrick’s gin, 3/4 ounce creme de violette, 1/4 ounce blue curaçao, 1/4 ounce lemon juice, 3 ounces Champagne, edible silver powder.",
            price:'19$',
        },
    ];

    const drinksDiv=document.createElement('div');
    drinksDiv.setAttribute('id','drinksDiv');

    const drinksHeading=document.createElement('h1');
    drinksHeading.textContent="Drinks";
    

    const drinksCards=document.createElement('div');
    drinksCards.setAttribute('id', 'drinks-cards');

    /*Drink 1 */
    const drink1Div=document.createElement('div');
    const drink1Heading=document.createElement('h1');
    const drink1Recipe=document.createElement('p');

    /*Drink 2 */
    const drink2Div=document.createElement('div');
    const drink2Heading=document.createElement('h1');
    const drink2Recipe=document.createElement('p');

    /*Drink 3 */
    const drink3Div=document.createElement('div');
    const drink3Heading=document.createElement('h1');
    const drink3Recipe=document.createElement('p');

    /*Drink 4 */
    const drink4Div=document.createElement('div');
    const drink4Heading=document.createElement('h1');
    const drink4Recipe=document.createElement('p');

    /*Drink 3 */
    const drink5Div=document.createElement('div');
    const drink5Heading=document.createElement('h1');
    const drink5Recipe=document.createElement('p');
    

    /* Adding drink 1 */
    drink1Heading.textContent=`${drinks[0].name} ${drinks[0].price}`;
    drink1Recipe.textContent=`${drinks[0].recipe}`;

    /* Adding drink 2 */
    drink2Heading.textContent=`${drinks[1].name} ${drinks[1].price}`;
    drink2Recipe.textContent=`${drinks[1].recipe}`;

    /* Adding drink 3 */
    drink3Heading.textContent=`${drinks[2].name} ${drinks[2].price}`;
    drink3Recipe.textContent=`${drinks[2].recipe}`;

    /* Adding drink 4 */
    drink4Heading.textContent=`${drinks[3].name} ${drinks[3].price}`;
    drink4Recipe.textContent=`${drinks[3].recipe}`;

    /* Adding drink 5 */
    drink5Heading.textContent=`${drinks[4].name} ${drinks[4].price}`;
    drink5Recipe.textContent=`${drinks[4].recipe}`;


    /* APPENDING */

    /*appending Drink 1 attributes to drink1Div*/
    drink1Div.appendChild(drink1Heading);
    drink1Div.appendChild(drink1Recipe);

    /*appending Drink 2 attributes to drink2Div*/
    drink2Div.appendChild(drink2Heading);
    drink2Div.appendChild(drink2Recipe);

    /*appending Drink 3 attributes to drink3Div*/
    drink3Div.appendChild(drink3Heading);
    drink3Div.appendChild(drink3Recipe);

    /*appending Drink 4 attributes to drink4Div*/
    drink4Div.appendChild(drink4Heading);
    drink4Div.appendChild(drink4Recipe);

    /*appending Drink 5 attributes to drink5Div*/
    drink5Div.appendChild(drink5Heading);
    drink5Div.appendChild(drink5Recipe);
    
    /*appending drink1Div, drink2Div, drink3Div, drink4Div and drink5Div to drinksCards*/
    drinksCards.appendChild(drink1Div);
    drinksCards.appendChild(drink2Div);
    drinksCards.appendChild(drink3Div);
    drinksCards.appendChild(drink4Div);
    drinksCards.appendChild(drink5Div);
    
    /* Appending drinksHeading and drinksCards to drinksDiv*/
    drinksDiv.appendChild(drinksHeading);
    drinksDiv.appendChild(drinksCards);

    /* Appending drinksDiv to drinksMenu*/
    drinksMenu.appendChild(drinksDiv);

    /* Appending drinksMenu to content*/
    content.appendChild(drinksMenu);

}

return {
    render
};
})();

export default menu;