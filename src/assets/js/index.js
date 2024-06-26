const Main = {
  generate: function () {
    generateName().then((firstTime) => {
      generateTitle(firstTime).then((argument) => {
        if(argument[1]){
          checkBrowser();
          argument[1] = false;
          setTimeout( function() {
            deleteTitle(argument[0]);
          },4000)
        }
      })
    });
  },
  scrolling(from,to) {
    scrollTo(from,to);
  },
  generateSecondPage()  {
    const app = document.querySelector(".app");
    const wrapper = document.querySelector("#wrapper2");
    const text = document.querySelector("#projectTitle");
    const carousel = document.querySelector(".carousel");
    const contacts = document.querySelectorAll(".contact");
    const top = document.querySelector(".top");
    const options = {
      root: app,
      threshold: 0.25
    };
    const callback = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setTimeout(function () {            
            top.classList.add("fadeInBottom");
          },300)
          generateProjectTitle().then(
            setTimeout(function () {
              generateCarousel(carousel).then(
                contacts.forEach((contact) => {
                  setTimeout(function () {
                    generateContact(contact)
                  },500)
                })
              )
            },2000)
          );
        }
        else if(entry.boundingClientRect.y > 0){
          text.innerHTML = "";
          text.dataset.text = "";
          carousel.classList.remove("zoomIn");
          top.classList.remove("fadeInBottom");
          contacts.forEach((contact) => {
            contact.classList.remove("fadeInBottom");
          })
        }
      })
    };
    const observer = new IntersectionObserver(callback,options);
    observer.observe(wrapper);
  }
}
export default Main

function generateName() {
  return new Promise((resolve) => {    
    let html = document.getElementById('name');
    html.innerText = '';
    var textTitle = 'Bayu Novaldi';
    var firstTime = true;
    randomizeTitle(html,textTitle,2,resolve,firstTime);
  })
}

function scrollTo(from,to) {
  let scrollToBottom = document.querySelector(`${from}`);
  let pageBottom = document.querySelector(`${to}`);

  scrollToBottom.addEventListener('click', function () {
    
    pageBottom.scrollIntoView();
  })
}

function randomizeTitle(html,textTitle,type,resolve,firstTime) {
  setTimeout( function() {
    var textRandom = '';  
    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    for( var i=0; i < textTitle.length+1; i++ ) {
      if(type == 1) {
        textRandom = textTitle.substr(0, textTitle.length - i);
        for( var k=i; k < i + 1; k++ ) { 
          if(i < textTitle.length) textRandom += possible.charAt(Math.floor(Math.random() * possible.length));
          else textRandom = '';
        }
      } else {
        textRandom = textTitle.substr(0, i);
        for( var j=i; j < textTitle.length; j++ ) { 
          textRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
      }
      generateText(html, i, textRandom, type, resolve,firstTime);
      textRandom = '';
    }
  }, 500 );  
}

function generateText(html, i, textRandom, type, resolve,firstTime) {
  setTimeout( function() {
    html.innerText = textRandom;
    html.dataset.text = textRandom;
    if(resolve != null) {
      if(type == 3) resolve();
      else if(i == textRandom.length)
      {
        if(type == 0) resolve([textRandom,firstTime]);
        else resolve([firstTime]);
      }
    }
  }, i*80 );
}

function generateTitle(firstTime) {
  return new Promise((resolve) => {
    let html = document.getElementById('title');
    html.innerText = '';
    var textTitles = [
      "I'm android developer",
      "I'm programmer",
      "I'm web developer"
    ];
    var randomTitles = Math.floor(Math.random() * textTitles.length);
    randomizeTitle(html,textTitles[randomTitles],0,resolve,firstTime);
  })
}

function deleteTitle(textTitle) {
  let html = document.getElementById('title');
  randomizeTitle(html,textTitle,1,null,false);
  setTimeout( function() {
    generateTitle(false).then((argument) => {
      setTimeout( function() {
        deleteTitle(argument[0]);
      },4000)
    });
  },2000)
}

function checkBrowser() {
  return new Promise((resolve) => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var html = document.getElementById('start');
      var text = "Tap to Scroll";
      var i = 0;
      typing(text,html,i,resolve);
    } else {
      var htmls = document.getElementById('start');
      var texts = "Click to Scroll";
      var j = 0;
      typing(texts,htmls,j,resolve);
    }
  })
}

function typing(text,html,i,resolve) {
  var check = typeof(text);
  var textTemp = ''
  if(check == "string"){
    for (i = 0; i < text.length + 1; i++) {
      textTemp = text.substr(0,i); 
      generateText(html,i,textTemp,4,resolve,true);
    }
  }
}

function generateProjectTitle() {
  return new Promise((resolve) => {    
    let html = document.getElementById('projectTitle');
    html.innerText = '';
    var textTitle = 'Project Showcase';
    randomizeTitle(html,textTitle,2,resolve,false);
  })
}

function generateCarousel(html) {
  return new Promise((resolve) => {    
    html.classList.add("zoomIn");
    resolve();
  })
}

function generateContact(html) {
  return new Promise((resolve) => {    
    html.classList.add("fadeInBottom");
    resolve();
  })
}
