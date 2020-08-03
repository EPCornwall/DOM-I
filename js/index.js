const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const links = document.querySelectorAll('a')
links[0].textContent = 'Services'
links[1].textContent = 'Product'
links[2].textContent = 'Vison'
links[3].textContent = 'Features'
links[4].textContent = 'About'
links[5].textContent = 'Contact'

//add h1 text dom is awesome
const banner = document.querySelector('.cta-text h1')
banner.innerHTML='DOM <br> IS <br> AWESOME'
const startButt = document.querySelector('.cta button')
startButt.textContent= 'Get Started'
//add circle image
const circImg = document.querySelector('#cta-img')
circImg.setAttribute('src', './img/header-img.png')

//Main content


const mainH4s = document.querySelectorAll('.main-content h4')
mainH4s[0].textContent=`${siteContent["main-content"]["features-h4"]}`
mainH4s[1].textContent=`${siteContent["main-content"]["about-h4"]}`
mainH4s[2].textContent=`${siteContent["main-content"]["services-h4"]}`
mainH4s[3].textContent=`${siteContent["main-content"]["product-h4"]}`
mainH4s[4].textContent=`${siteContent["main-content"]["vision-h4"]}`

const mainPs = document.querySelectorAll('.main-content p')
mainPs[0].textContent=`${siteContent["main-content"]["features-content"]}`
mainPs[1].textContent=`${siteContent["main-content"]["about-content"]}`
mainPs[2].textContent=`${siteContent["main-content"]["services-content"]}`
mainPs[3].textContent=`${siteContent["main-content"]["product-content"]}`
mainPs[4].textContent=`${siteContent["main-content"]["vision-content"]}`

const middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src',`${siteContent["main-content"]["middle-img-src"]}`)

const contactH4= document.querySelector('.contact h4')
contactH4.textContent='Contact'

const contactPs = document.querySelectorAll('.contact p')
contactPs[0].innerHTML= '123 Way 456 Street <br> Somewhere, USA'
contactPs[1].textContent=`${siteContent["contact"].phone}`
contactPs[2].textContent=`${siteContent["contact"].email}`

const copyright = document.querySelector('footer p')
copyright.textContent=`${siteContent["footer"].copyright}`