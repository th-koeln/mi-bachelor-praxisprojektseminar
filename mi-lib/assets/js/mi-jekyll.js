document.querySelector('.nav-toggle').addEventListener('click', function () {
  var activeClass = 'is-active';
  document.querySelector('.nav-menu').classList.toggle(activeClass);
});


var tabs = {};
tabs.elements = {};
tabs.func = (function () {

  var exports = {};

  exports.init = function () {

    // Tab Navi aktivieren
    var tabNavigations = document.querySelectorAll('.is-tab-navigation');

    for (i = 0; i < tabNavigations.length; i++) {
      var tabNavigation = tabNavigations[i];
      var htmltabs = tabNavigation.querySelectorAll('.tab-item');
      htmltabs[0].classList.add('is-active');
      selectTab(htmltabs[0]);

      for (i = 0; i < htmltabs.length; i++) {
        var htmltab = htmltabs[i];

        htmltab.onclick = function () {
          selectTab(this);
        }
      }

    }
  }

  selectTab = function (ele) {

    var target_id = ele.getAttribute('data-tab');
    var targets = document.querySelectorAll('.is-' + target_id);

    // Content ausblenden
    var items = document.querySelectorAll('.is-tab-content');

    for (i = 0; i < items.length; i++) {
      var item = items[i];
      item.classList.add('is-hidden');
    }

    // gewählten Content einblenden
    var targets = document.querySelectorAll('.is-' + target_id);

    // Content einblenden
    for (i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.classList.remove('is-hidden');
    }

    // Aktiven Navipunkt markieren
    var elements = ele.parentElement.querySelectorAll('.tab-item');
    for (i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.classList.remove('is-active');
    }
    ele.classList.add('is-active');

  }


  return exports;
})();

var more = {};
more.elements = {};
more.func = (function () {

  var exports = {};

  exports.init = function () {

    var elements = document.querySelectorAll('[data-target]');

    for (i = 0; i < elements.length; i++) {

      var ele = elements[i];

      var item = document.createElement("i");
      item.classList.add("fa");
      item.classList.add("fa-angle-down");
      item.classList.add("fa-lg");
      item.classList.add("more-button");

      item.onclick = function () {

        if (this.classList.contains("active")) {
          var target = this.parentElement.getAttribute("data-target");
          this.classList.remove("active");
          document.getElementById(target).classList.add('is-hidden');

        } else {
          var target = this.parentElement.getAttribute("data-target");
          this.classList.add("active");
          document.getElementById(target).classList.remove('is-hidden');
        }


      }
      ele.appendChild(item);
    }
  }


  return exports;
})();


var panelTabs = {};
panelTabs.elements = {};
panelTabs.func = (function () {

  var exports = {};

  exports.init = function () {

    // Tab Navi aktivieren
    var tabNavigations = document.querySelectorAll('.panel');

    for (i = 0; i < tabNavigations.length; i++) {
      var tabNavigation = tabNavigations[i];
      var htmltabs = tabNavigation.querySelectorAll('.panel-block');
      htmltabs[0].classList.add('is-active');
      selectPanelTab(htmltabs[0]);

      for (i = 0; i < htmltabs.length; i++) {
        var htmltab = htmltabs[i];

        htmltab.onclick = function () {
          selectPanelTab(this);
        }
      }

    }
  }

  selectPanelTab = function (ele) {

    var target_id = ele.getAttribute('data-tab');
    var targets = document.querySelectorAll('.is-' + target_id);

    // Content ausblenden
    var items = document.querySelectorAll('.is-tab-content');

    for (i = 0; i < items.length; i++) {
      var item = items[i];
      item.classList.add('is-hidden');
    }

    // gewählten Content einblenden
    var targets = document.querySelectorAll('.is-' + target_id);

    // Content einblenden
    for (i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.classList.remove('is-hidden');
    }

    // Aktiven Navipunkt markieren
    var elements = ele.parentElement.querySelectorAll('.panel-block');
    for (i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.classList.remove('is-active');
    }
    ele.classList.add('is-active');

  }


  return exports;
})();



var urlParams = new URLSearchParams(window.location.search);
if (!urlParams.has('media')) {
  more.func.init();
  tabs.func.init();
  panelTabs.func.init();
}


/* Zwischenstand Video
------------------------------------------------------------------------------*/

var modal = function (modalId) {

  function setModalCookie(modalId) {
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000 * 24 * 365);
    document.cookie = modalId + "=watched; expires=" + now.toUTCString();
  }

  var modal = document.getElementById(modalId);

  /* Close Video */
  if (modal) {
    modal.querySelector("[aria-label=close]").addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.toggle("is-active");
      setModalCookie(modalId);
    }, false);
  }

  /* Trigger Video on start */
  var pairs = decodeURIComponent(document.cookie).split(";");
  var cookies = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    pair[0] = pair[0].replace(/[^0-9a-zA-Z]/g, "");
    cookies[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  var pageUrl = document.querySelector("[data-url]");

  if (pageUrl && modal && cookies[modalId] != "watched") {
    if (pageUrl.dataset.url == "/") {
      modal.classList.toggle("is-active");
    }
  }

  /* Trigger Modal via Button */
  var modalTrigger = document.querySelector("#zeige-" + modalId);
  if (modalTrigger && modal) {
    modalTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.toggle("is-active");
    }, false);
  }
}

modal("zwischenstand");
modal("psso");



/* Markdown Support
------------------------------------------------------------------------------*/

var markdown = {};
markdown.converter = new showdown.Converter();
markdown.convert = function (ele) {
  ele.innerHTML = markdown.converter.makeHtml(ele.innerHTML);
}
markdown.init = function () {
  document.querySelectorAll("[markdown]").forEach(function (ele) {
    console.log(ele);
    markdown.convert(ele);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  markdown.init();
});




/* Accordion
------------------------------------------------------------------------------*/
class Accordion {
  constructor(el) {
    // Store the <details> element
    this.el = el;
    // Store the <summary> element
    this.summary = el.querySelector('[data-js-accordion-summary]');
    // Store the <div class="content"> element
    this.content = el.querySelector('[data-js-accordion-content]');

    // Store the animation object (so we can cancel it if needed)
    this.animation = null;
    // Store if the element is closing
    this.isClosing = false;
    // Store if the element is expanding
    this.isExpanding = false;
    // Detect user clicks on the summary element

    if(this.content) {
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  }

  onClick(e) {
    // Stop default behaviour from the browser
    e.preventDefault();
    // Add an overflow on the <details> to avoid content overflowing
    this.el.style.overflow = 'hidden';
    // Check if the element is being closed or is already closed
    if (this.isClosing || !this.el.open) {
      this.open();
    // Check if the element is being openned or is already open
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    // Set the element as "being closed"
    this.isClosing = true;
    
    // Store the current height of the element
    const startHeight = `${this.el.offsetHeight}px`;
    // Calculate the height of the summary
    const endHeight = `${this.summary.offsetHeight}px`;
    
    // If there is already an animation running
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }
    
    // Start a WAAPI animation
    this.animation = this.el.animate({
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });
    
    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    // Apply a fixed height on the element
    this.el.style.height = `${this.el.offsetHeight}px`;
    // Force the [open] attribute on the details element
    this.el.open = true;
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    // Set the element as "being expanding"
    this.isExpanding = true;
    // Get the current fixed height of the element
    const startHeight = `${this.el.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
    
    // If there is already an animation running
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }
    
    // Start a WAAPI animation
    this.animation = this.el.animate({
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });
    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    // Set the open attribute based on the parameter
    this.el.open = open;
    // Clear the stored animation
    this.animation = null;
    // Reset isClosing & isExpanding
    this.isClosing = false;
    this.isExpanding = false;
    // Remove the overflow hidden and the fixed height
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('[data-js-accordion]').forEach((el) => {
  new Accordion(el);
});