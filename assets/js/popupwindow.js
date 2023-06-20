const arraydisplayPopupBtn = document.querySelectorAll('.btn-popup');

for (let i = 0; i < arraydisplayPopupBtn.length; i++)
 {
  arraydisplayPopupBtn[i].addEventListener('click', () => {
      const cardProjectWork = document.createElement('div');
      cardProjectWork.innerHTML = cardDetailsMobile(i);
      document.body.appendChild(cardProjectWork);

     
    });
  }
  