const Main = {
  generate: function () {
    generateName();
    generateTitle();
    checkBrowser();   
  },
  scrolling() {
    scrollBottom('#wrapper','#wrapper2');
    scrollBottom('#wrapper2','#wrapper');
  }  
}
export default Main

function generateName() {
  let html = document.getElementById('name');
  html.innerText = '';
  var textTitle = 'Bayu Novaldi';
  randomizeTitle(html,textTitle,0);
}

function scrollBottom(from,to) {
  console.log(from);
  let scrollToBottom = document.querySelector(`${from}`);
  let pageBottom = document.querySelector(`${to}`);

  scrollToBottom.addEventListener('click', function () {
    
    pageBottom.scrollIntoView();
  })
}

function randomizeTitle(html,textTitle,type) {
  setTimeout( function() {
    var textRandom = '';  
    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    for( var i=0; i < textTitle.length+1; i++ ) {
      if(type == 0) {
        textRandom = textTitle.substr(0, i);
        for( var j=i; j < textTitle.length; j++ ) { 
          textRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
      } else {
        textRandom = textTitle.substr(0, textTitle.length - i);
        for( var k=i; k < i + 1; k++ ) { 
          if(i < textTitle.length) textRandom += possible.charAt(Math.floor(Math.random() * possible.length));
          else textRandom = '';
        }
      }
      generateRandomTitle(html, i, textRandom);
      textRandom = '';
    }
  }, 500 );  
}

function generateRandomTitle(html, i, textRandom) {
  setTimeout( function() {
    html.innerText = textRandom;
    html.dataset.text = textRandom;
  }, i*80 );
}

function generateTitle() {
  let html = document.getElementById('title');
  html.innerText = '';
  var textTitles = [
    "I'm programmer",
    "I'm android developer"
  ];
  var randomTitles = Math.floor(Math.random() * textTitles.length);
  randomizeTitle(html,textTitles[randomTitles],0);
  setTimeout( function() {
    deleteTitle(textTitles[randomTitles]);
  },4000)
}

function deleteTitle(textTitle) {
  let html = document.getElementById('title');
  randomizeTitle(html,textTitle,1);
  setTimeout( function() {
    generateTitle();
  },2000)
}

function checkBrowser() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    setTimeout( function () {      
      let html = document.getElementById('start');
      html.innerText = "Tap to Scroll"; 
    },2000)
  } else {
    setTimeout( function () {      
      let html = document.getElementById('start');
      html.innerText = "Click to Scroll";  
    },2000)
  }
}
