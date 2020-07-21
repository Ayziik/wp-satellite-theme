// to top button start

const pageStart = document.querySelector('.logo');
const toTopBtn = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
  pageYOffset > 400 ? toTopBtn.classList.remove('hide') : toTopBtn.classList.add('hide');
});

function handleToTopButtonClick() {
  pageStart.scrollIntoView({block: "start", behavior: "smooth"});
}

toTopBtn.addEventListener('click', handleToTopButtonClick);

// to top button end

// youtube lazy load start

const youtube = document.querySelectorAll( ".youtube" );

for (let i = 0; i < youtube.length; i++) {

  let source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

  let image = new Image();
  image.src = source;
  image.addEventListener( "load", function() {
    youtube[ i ].appendChild( image );
  }( i ) );

  youtube[i].addEventListener( "click", function() {

    let iframe = document.createElement( "iframe" );

    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

    this.innerHTML = "";
    this.appendChild( iframe );
  } );
}

// youtube lazy load end

// popups start

const container = document.querySelector('#popupContainer');
console.log(container)
const popupWrapper = document.createElement('div');
let locationHref = window.location.hostname;
let roboto_font = new FontFace('Roboto', 'url(https://fonts.googleapis.com/css?family=Roboto&display=swap)');
roboto_font.load().then(function (loaded_face) {
  document.fonts.add(loaded_face);
  document.body.style.fontFamily = '"Roboto", sans-serif';
}).catch(function (error) {
// error occurred
});
const orangeParagraph = '5 портфелей инвестора';
const orangeBackground = 'url(https://cdn.backyard.ltd/popups/orange.png)  50% 0%  no-repeat, center center';
const orangeDescription = 'Узнайте, какие топ-5 инвестпортфелей приносят повышенный доход трейдерам. Получите свой набор для прибыли и торгуйте еще увереннее!';
const orangeTextTopButton = 'Получить портфель';
const orangeTextBottomButton = 'Не интересно';
const orangeTopButtonBackground = '#F46C1F';
const orangeBottomButtonBackground = '#EEAA84';
const orangeTopButtonHref = 'https://r.maximarkets.org/?linkid=oth-sat-investment-portfolio-popup-ru&sky='+locationHref;
const redParagraph = 'Двойной бонус на счет';
const redBackground = 'url(https://cdn.backyard.ltd/popups/red.png) 50% 0%  no-repeat, center center';
const redDescription = 'Удвойте ваш депозит и результат в торговле. Получите 100% бонус на счет и начните зарабатывать!';
const redTextTopButton = 'Получить бонус';
const redTextBottomButton = 'В другой раз';
const redTopButtonBackground = '#F41F1F';
const redBottomButtonBackground = '#E48E8E';
const redTopButtonHref = 'https://r.maximarkets.org/?linkid=oth-sat-bonus-popup-ru&sky='+locationHref;
const blueParagraph = 'Тест на трейдера';
const blueBackground = 'url(https://cdn.backyard.ltd/popups/blue.png) 50% 0%  no-repeat, center center';
const blueDescription = ' По статистике финансовый успех зависит от качеств, которыми обладают 70% людей. Пройдите тест из 10 вопросов и узнайте, сможете ли вы заработать на бирже!';
const blueTextTopButton = 'Пройти тест';
const blueTextBottomButton = 'Спасибо, не хочу';
const blueTopButtonBackground = '#1F67F4';
const blueBottomButtonBackground = '#8EAFC8';
const blueTopButtonHref = 'https://r.umarkets.com/?linkid=oth-sat-quiz-popup-um-ru&sky='+locationHref;
const greenParagraph = 'СМС-аналитика бесплатно';
const greenBackground = 'url(https://cdn.backyard.ltd/popups/green.png) 50% 0%  no-repeat, center center';
const greenDescription = 'Успешный трейдер не следит за трендами 24/7, а получает помощь экспертов. Подпишитесь на СМС-сигналы и открывайте еще больше прибыльных сделок!';
const greenTextTopButton = 'Подписаться';
const greenTextBottomButton = 'Спасибо, не интересует';
const greenTopButtonBackground = '#0AC481';
const greenBottomButtonBackground = '#81C6AD';
const greenTopButtonHref = 'https://r.umarkets.com/?linkid=oth-sat-sms-signals-popup-um-ru&sky='+locationHref;
popupWrapper.style.position = 'absolute';
popupWrapper.style.top = '50%';
popupWrapper.style.left = '50%';
popupWrapper.style.marginRight = '-50%';
const hidePopup = (element) => {
  element.style.display = 'none';
};
const showPopup = (element) => {
  element.style.display = 'flex';
};
const createPopup = (background, textParagraph, textDesription, textTopButton, textBottomButton, topButtonBackground, bottomButtonBackground, topButtonHref, containerDisplay) => {
  let popupContainer = document.createElement('div');
  let popupClose = document.createElement('button');
  let popupHeading = document.createElement('p');
  let popupDescription = document.createElement('p');
  let popupTopButton = document.createElement('a');
  let popupBottomButton = document.createElement('a');
  popupContainer.className = 'popup-container';
  popupClose.className = 'popup-close';
  popupHeading.className = 'popup-heading';
  popupDescription.className = 'popup-description';
  popupTopButton.className = 'popup-top-button';
  popupBottomButton.className = 'popup-bottom-button';
  popupHeading.innerText = textParagraph;
  popupDescription.innerText = textDesription;
  popupTopButton.innerHTML = textTopButton;
  popupBottomButton.innerHTML = textBottomButton;
  popupTopButton.href = 'https://protate.live/www/delivery/ck.php?oaparams=2__bannerid=285__zoneid=11__source=https%3A%2F%2Fmaximarkets.group__cb=a012f45d2e__oadest=' + topButtonHref;
  popupContainer.style.width = '100%';
  popupContainer.style.maxWidth = '345px';
  popupContainer.style.paddingBottom = '50px';
  popupContainer.style.position = 'fixed';
  popupContainer.style.zIndex = '99990';
  popupContainer.style.left = '44%';
  popupContainer.style.marginLeft = '-150px';
  popupContainer.style.background = background;
  popupContainer.style.backgroundSize = 'cover';
  popupContainer.style.top = '10%';
  popupContainer.style.display = containerDisplay;
  popupContainer.style.flexDirection = 'column';
  popupContainer.style.textTransform = 'none';
  popupClose.style.width = '20px';
  popupClose.style.height = '20px';
  popupClose.style.marginLeft = 'auto';
  popupClose.style.background = 'url(https://cdn.backyard.ltd/popups/group.png) no-repeat, center center';
  popupClose.style.border = 'none';
  popupClose.style.position = 'absolute';
  popupClose.style.top = '20px';
  popupClose.style.right = '10px';
  popupClose.style.outline = '0';
  popupClose.style.boxShadow = 'unset';
  popupHeading.style.marginTop = '176px';
  popupHeading.style.textAlign = 'center';
  popupHeading.style.fontFamily = '"Roboto", sans-serif';
  popupHeading.style.fontStyle = 'normal';
  popupHeading.style.fontWeight = '900';
  popupHeading.style.fontSize = '21px';
  popupHeading.style.lineHeight = '26px';
  popupHeading.style.color = '#232323';
  popupHeading.style.letterSpacing = '0.2px';
  popupDescription.style.margin = '0 auto';
  popupDescription.style.width = '100%';
  popupDescription.style.maxWidth = '298px';
  popupDescription.style.height = '64px';
  popupDescription.style.textAlign = 'center';
  popupDescription.style.fontFamily = '"Roboto", sans-serif';
  popupDescription.style.fontStyle = 'normal';
  popupDescription.style.fontWeight = '400';
  popupDescription.style.fontSize = '14px';
  popupDescription.style.lineHeight = '16px';
  popupDescription.style.color = '#000000';
  popupDescription.style.paddingTop = '20px';
  popupTopButton.style.width = '305px';
  popupTopButton.style.height = '59px';
  popupTopButton.style.background = topButtonBackground;
  popupTopButton.style.border = 'none';
  popupTopButton.style.fontFamily = '"Roboto", sans-serif';
  popupTopButton.style.fontStyle = 'normal';
  popupTopButton.style.fontWeight = '500';
  popupTopButton.style.fontSize = '16px';
  popupTopButton.style.lineHeight = '59px';
  popupTopButton.style.textAlign = 'center';
  popupTopButton.style.color = '#FFFFFF';
  popupTopButton.style.margin = '0 auto';
  popupTopButton.style.marginTop = '40px';
  popupTopButton.style.display = 'flex';
  popupTopButton.style.alignItems = 'center';
  popupTopButton.style.justifyContent = 'center';
  popupBottomButton.style.width = '305px';
  popupBottomButton.style.height = '59px';
  popupBottomButton.style.background = bottomButtonBackground;
  popupBottomButton.style.border = 'none';
  popupBottomButton.style.fontFamily = '"Roboto", sans-serif';
  popupBottomButton.style.fontStyle = 'normal';
  popupBottomButton.style.fontWeight = '300';
  popupBottomButton.style.fontSize = '16px';
  popupBottomButton.style.lineHeight = '59px';
  popupBottomButton.style.textAlign = 'center';
  popupBottomButton.style.color = '#FFFFFF';
  popupBottomButton.style.margin = '0 auto';
  popupBottomButton.style.marginTop = '10px';
  popupBottomButton.style.display = 'flex';
  popupBottomButton.style.alignItems = 'center';
  popupBottomButton.style.justifyContent = 'center';
  popupContainer.appendChild(popupClose);
  popupContainer.appendChild(popupHeading);
  popupContainer.appendChild(popupDescription);
  popupContainer.appendChild(popupTopButton);
  popupContainer.appendChild(popupBottomButton);
  popupWrapper.appendChild(popupContainer);
  container.appendChild(popupWrapper);
}
createPopup(orangeBackground, orangeParagraph, orangeDescription, orangeTextTopButton, orangeTextBottomButton, orangeTopButtonBackground, orangeBottomButtonBackground, orangeTopButtonHref, 'none');
createPopup(redBackground, redParagraph, redDescription, redTextTopButton, redTextBottomButton, redTopButtonBackground, redBottomButtonBackground, redTopButtonHref, 'none');
createPopup(blueBackground, blueParagraph, blueDescription, blueTextTopButton, blueTextBottomButton, blueTopButtonBackground, blueBottomButtonBackground, blueTopButtonHref, 'none');
createPopup(greenBackground, greenParagraph, greenDescription, greenTextTopButton, greenTextBottomButton, greenTopButtonBackground, greenBottomButtonBackground, greenTopButtonHref, 'none');
const popupQuantity = document.querySelectorAll('.popup-container').length;
let previosNumber;
let flag = true;
let popupContainer = document.querySelectorAll('.popup-container');
let interval;
if (interval) clearInterval(interval);
let randomNumber = () => {
  let number = Math.floor(Math.random() * popupQuantity);
  if (number === previosNumber) {
    return randomNumber();
  } else {
    previosNumber = number;
    return number;
  }
}
const hideAllPopups = (popupContainer) => {
  popupContainer.forEach((el) => {
    hidePopup(el);
  });
}
//set timer on localstorage for showing popups
const setTimerLS = () => {
  function resetStartTime() {
    startTime = new Date();
    window.localStorage.setItem('startTime', startTime);
    return startTime;
  }
// get timestamp
  startTime = new Date(window.localStorage.getItem('startTime') || resetStartTime());
// start timer 600 sec
  interval = window.setInterval(function () {
    let secsDiff = new Date().getTime() - startTime.getTime();
    if (Math.floor(secsDiff / 1000) % 600 === 0) {
      hideAllPopups(popupContainer);
      popupContainer[randomNumber()].style.display = 'flex';
      sendStatistic();
    }
  }, 1000);
}
const sendStatistic = () => {
  new Image().src = "//counter.yadro.ru/hit?r"+
    escape(document.referrer)+((typeof(screen)=="undefined")?"":
      ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
      screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
    ";h"+escape(document.title.substring(0,150))+
    ";"+Math.random();
}
//scroll starts popup
const scrollTrigger = () => {
  let scrollValue = window.pageYOffset;
  if ( scrollValue > 100 && flag && !localStorage.getItem('startTime') ) {
    popupContainer[randomNumber()].style.display = 'flex';
    sendStatistic();
    flag = false;
    setTimerLS();
  }
}
window.addEventListener('scroll', scrollTrigger);
let popupBottomButton = document.querySelectorAll('.popup-bottom-button');
let closeButton = document.querySelectorAll('.popup-close');
//close popup and start timer
popupBottomButton.forEach((el) => {
  el.addEventListener('click', (e) => {
    clearInterval(interval);
    e.preventDefault();
    const parentWrap = el.closest(".popup-container");
    hidePopup(parentWrap);
    setTimerLS()
  })
});
closeButton.forEach((el) => {
  el.addEventListener('click', (e) => {
    clearInterval(interval);
    e.preventDefault();
    const parentWrap = el.closest(".popup-container");
    hidePopup(parentWrap);
    setTimerLS()
  })
});
//check after page refresh if scroll create timerLS
localStorage.getItem('startTime') ? setTimerLS() : null;

// popups end