const home=(()=>{
    function render(){
        const content=document.querySelector('#content');
        const div=document.createElement('div');
        div.setAttribute('id', 'about');
        const text=document.createElement('h1');
        const text1 = document.createTextNode("Feel the cold glacial madnesss.");
        
        const text2=document.createElement('p');
        text2.setAttribute('id','text2');
        text2.textContent="If you’re looking for a perfect spot away from the city, then 17 ALASKA is the place for you.";

        text.appendChild(text1);
        div.appendChild(text);
        div.appendChild(text2);
        content.appendChild(div);
    }

    return {
        render
    };

})();
export default home;