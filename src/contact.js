const contact=(()=>{
    function render(){
        const content=document.querySelector('#content');
        const contactDiv=document.createElement('div');
        contactDiv.setAttribute('id','contactDiv');

        const phNum=document.createElement('p');
        phNum.textContent="Contact number : 1234567890";
        contactDiv.appendChild(phNum);

        const mailAdd=document.createElement('p');
        mailAdd.textContent="Mail us at : 17ALASKACOLD@gmail.com";
        contactDiv.appendChild(mailAdd);

        const open=document.createElement('p');
        open.textContent="Open from 06:00 till 23:59 ";
        contactDiv.appendChild(open);

        content.appendChild(contactDiv);
    }
    return {
        render
    };

})();

export default contact;