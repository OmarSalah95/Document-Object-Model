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
logo.setAttribute('src', siteContent.nav["img-src"])

// Select anchor tags in nav and convert to array.
const navAnchor = Array.from(document.getElementsByTagName('a'));
// Run for each to map anchors to nav-items via textContent
navAnchor.forEach((anchor, i)=>(anchor.textContent = siteContent.nav[`nav-item-${i + 1}`], (anchor.style.color = "green")));

// Create the new HTML Elements and their content
const prependNav = document.createElement("a");
prependNav.innerHTML = '<a href="#" style="color: green">Prepend</a>';

const appendNav = document.createElement("a");
appendNav.innerHTML = '<a href="#" style="color: green">Append</a>';


// Create new nav selector To append.
const nav = document.querySelector("nav");
// Append and prepend nav selector.
nav.prepend(prependNav);
// nav.append(appendNav);
nav.appendChild(appendNav);

// Select CTA H1 
const ctaH1 = document.querySelector(".cta-text h1");
//Apply text content
ctaH1.innerHTML = '<h1>DOM<br>Is<br>Awesome<h1>';

//Select CTA Button
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

//Select CTA IMG
document.getElementById("cta-img").src = siteContent.cta["img-src"];

// Main content selectors
// Select Main H4
const mainH4 = Array.from(document.getElementsByTagName('h4'));

// Apply textContent
mainH4[0].textContent = siteContent["main-content"]['features-h4'];
mainH4[1].textContent = siteContent["main-content"]['about-h4'];
mainH4[2].textContent = siteContent["main-content"]['services-h4'];
mainH4[3].textContent = siteContent["main-content"]['product-h4'];
mainH4[4].textContent = siteContent["main-content"]['vision-h4']

// Select Main P
const mainP = Array.from(document.getElementsByTagName('P'));

// Apply textContent
mainP[0].textContent = siteContent["main-content"]['features-content'];
mainP[1].textContent = siteContent["main-content"]['about-content'];
mainP[2].textContent = siteContent["main-content"]['services-content'];
mainP[3].textContent = siteContent["main-content"]['Product-content'];
mainP[4].textContent = siteContent["main-content"]['vision-content']

// Target main-content IMG
const mainIMG = document.getElementById("middle-img");
mainIMG.src = siteContent["main-content"]["middle-img-src"];

// Contact Header setting
document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];

// Contact P Targeting and setting
const contactPTags = Array.from(document.querySelectorAll('.contact p'))
contactPTags[0].innerHTML = "<p>123 Way 456 Street<br>Somewhere, USA</p>";
contactPTags[1].textContent = siteContent.contact.phone;
contactPTags[2].textContent = siteContent.contact.email;

// Footer targeting and setting
document.querySelector("footer p").textContent = siteContent.footer.copyright;