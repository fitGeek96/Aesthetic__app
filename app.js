//jshint esversion:6
const hamburgerBarEl = document.querySelector(".hamburger");
const menuEl = document.querySelector(".navbar");
const containerEl = document.querySelector(".container");
const contentEl = document.querySelector(".content");
const imageEl = document.querySelector(".bg__img");
const bigContainerEl = document.querySelector(".big__container");

const homeItemEl = document.querySelector(".menu__items").firstElementChild;
const productItemEl = homeItemEl.nextElementSibling;
const blogItemEl = productItemEl.nextElementSibling;
const faqItemEl = blogItemEl.nextElementSibling;

const modalEl_1 = document.querySelector(".modal_1");
const modalEl_2 = document.querySelector(".modal_2");
const modalEl_3 = document.querySelector(".modal_3");
const modalEl_5 = document.querySelector(".modal_5");
const modalEl_6 = document.querySelector(".modal_6");
const modalEl_7 = document.querySelector(".modal_7");

const closeModalTriggerEl = document.querySelectorAll(".close");

const slideMenuNavBar = () => {
  hamburgerBarEl.addEventListener("click", function () {
    bigContainerEl.classList.toggle("bg__color");
    this.classList.toggle("shift");
    this.firstElementChild.classList.toggle("change");
    this.firstElementChild.nextElementSibling.classList.toggle("change");
    this.lastElementChild.classList.toggle("change");
    menuEl.classList.toggle("open");
    containerEl.classList.toggle("shift");
    contentEl.classList.toggle("fade-in");
    imageEl.firstElementChild.classList.toggle("hide");
    imageEl.firstElementChild.classList.toggle("puff-in-center");
    imageEl.lastElementChild.classList.toggle("puff-in-center");
    imageEl.lastElementChild.classList.toggle("hide");
    imageEl.lastElementChild.classList.toggle("shift__img");
  });
};

const homeBtn = () => {
  homeItemEl.addEventListener("click", () => {
    imageEl.style.display = "block";
    imageEl.lastElementChild.classList.toggle("puff-in-center");
    contentEl.innerHTML = ` <header class="title">
    <h1>Because You’re Beautiful</h1>
</header>
<div class="content__body">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat aspernatur dolorem qui a
    aliquam veritatis earum alias neque, voluptatibus quod quam obcaecati corporis? Error necessitatibus
    quasi dolorem. Delectus commodi officia nobis pariatur. Placeat consectetur mollitia officiis cumque
    minima reiciendis sunt amet accusamus optio veritatis in assumenda, est error quas.
</div>`;
  });
};

const productBtn = () => {
  productItemEl.addEventListener("click", () => {
    imageEl.lastElementChild.classList.remove("puff-in-center");
    imageEl.style.display = "none";
    contentEl.innerHTML = ` <header class="title">
    <h1>Our Products</h1>
</header>
<div class="content__body">
    <div class="products fade-in">
        <img src="images/p5.png" alt="" class="p5">
        <img src="images/p3.png" alt="" class="p3">
        <img src="images/p2.png" alt="" class="p2">
    </div>
    <div class="products fade-in">
        <img src="images/p1.png" alt="" class="p1">
        <img src="images/p6.png" alt="" class="p6">
        <img src="images/p7.png" alt="" class="p7">
    </div>
</div>`;
  });
};

const productInfo = () => {
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("p5")) {
      modalEl_5.classList.add("open");
    } else if (event.target.classList.contains("p3")) {
      modalEl_3.classList.add("open");
    } else if (event.target.classList.contains("p2")) {
      modalEl_2.classList.add("open");
    } else if (event.target.classList.contains("p1")) {
      modalEl_1.classList.add("open");
    } else if (event.target.classList.contains("p6")) {
      modalEl_6.classList.add("open");
    } else if (event.target.classList.contains("p7")) {
      modalEl_7.classList.add("open");
    }

    closeModalTriggerEl[0].addEventListener("click", function (event) {
      modalEl_5.classList.remove("open");
    });
    closeModalTriggerEl[1].addEventListener("click", function (event) {
      modalEl_3.classList.remove("open");
    });
    closeModalTriggerEl[2].addEventListener("click", function (event) {
      modalEl_2.classList.remove("open");
    });
    closeModalTriggerEl[3].addEventListener("click", function (event) {
      modalEl_1.classList.remove("open");
    });
    closeModalTriggerEl[4].addEventListener("click", function (event) {
      modalEl_6.classList.remove("open");
    });
    closeModalTriggerEl[5].addEventListener("click", function (event) {
      modalEl_7.classList.remove("open");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modalEl_5) {
        modalEl_5.classList.remove("open");
      } else if (event.target === modalEl_3) {
        modalEl_3.classList.remove("open");
      } else if (event.target === modalEl_2) {
        modalEl_2.classList.remove("open");
      } else if (event.target === modalEl_1) {
        modalEl_1.classList.remove("open");
      } else if (event.target === modalEl_6) {
        modalEl_6.classList.remove("open");
      } else if (event.target === modalEl_7) {
        modalEl_7.classList.remove("open");
      }
    });
  });
};

const blogBtn = () => {
  blogItemEl.addEventListener("click", () => {
    imageEl.lastElementChild.classList.remove("puff-in-center");
    imageEl.style.display = "none";
    contentEl.innerHTML = ` <header class="title">
    <h1>Latest Beauty Articles</h1>
</header>
<div class="content__body">
    <div class="blogs">
        <div id="first_blog" class="fade-in">
            <header>
                <img src="images/woman-applying-mascara-2463027.jpg" alt="" class="blog_img">
                <h1 class="blog_title">5 Proven Methods to Get Longer Eyelashes, According to a
                    Dermatologist</h1>
            </header>
        </div>
        <div id="second_blog" class="fade-in">
            <header>
                <h1 class="blog_title">How to Ensure You Have the Perfect Hair Color for Your Wedding
                </h1>
                <img src="images/woman-flowers-standing-bouquet-3292699(1).jpg" alt="" class="blog_img">
            </header>
        </div>

    </div>
</div>`;
  });
};

const faqBtn = () => {
  faqItemEl.addEventListener("click", function () {
    imageEl.lastElementChild.classList.remove("puff-in-center");
    imageEl.style.display = "none";
    contentEl.innerHTML = `<div class="accordion fade-in">
    <header class="title">
      <h1>Frequently Asking Questions</h1>
    </header>
    <div class="content__body">
      <div class="questions">
        <header>
          <h3 class="faq__title">What is your Makeup routine?</h3>
          <span>+</span>
        </header>
        <div class="faq__answer">
          <p>
            As announced a few weeks ago on my Instagram account, I shot
            a Routine Makeup video which will be posted on my Youtube
            channel very soon with explanations, details and links to
            the products I use. A little patience ... Until my Tuto Wavy
            is online for a few days!
          </p>
        </div>
      </div>
      <div class="questions">
        <header>
          <h3 class="faq__title">
            What type of hair extensions do you have?
          </h3>
          <span>+</span>
        </header>
        <div class="faq__answer">
          <p>
            I only use extensions in adhesive strips. Having tested
            keratin extensions hot and cold, I can honestly say that it
            is the most respectful technique for hair. I have been
            laying it for over a year now, my hair is growing very well,
            does not break and the advantage is that you can put these
            same adhesive tapes back every 3 months (when they have come
            down with the growth of your hair) without having to buy new
            ones. I have my extensions installed at the Atypique
            Coiffure salon in Paris .
          </p>
        </div>
      </div>
      <div class="questions">
        <header>
          <h3 class="faq__title">
            What do you recommend in case of acne?
          </h3>
          <span>+</span>
        </header>
        <div class="faq__answer">
          <p>
            Depending on your type of acne, I would advise you to go to
            your gynecologist to rule out the track "ovarian cysts"
            which can be the cause of polycystic acne (which I have had
            for several years) . You should also check the care and
            make-up products you use (personally I saw a real difference
            in using Kiehls products and in stopping using MAC products
            for the complexion). You can also start a Flawless Skin
            Wandertea treatment ( preferably after summer) to purify and
            improve the condition of your skin (blemishes, redness,
            radiance, dark circles, etc.)
          </p>
        </div>
      </div>
      <div class="questions">
        <header>
          <h3 class="faq__title">
            What type of hair removal did you choose?
          </h3>
          <span>+</span>
        </header>
        <div class="faq__answer">
          <p>
            I have used the razor for a long time to destroy my hair,
            but I have moved, for a few months, to the electric epilator
            by becoming muse of the Braun brand . I was a little
            skeptical at first but after using their latest Sikl Epil 9
            epilator and the different tips to prepare the skin before
            and after hair removal, I quickly adopted my new anti-hair
            routine! People often think that waxing is more effective,
            but it is not. Not only does the epilator remove more hair,
            but the regrowth is also longer. In terms of pain, it is
            LARGELY bearable, especially since the new Braun epilator
            models are Waterproof and can therefore be used in the
            shower or in your bath in Relax mode!
          </p>
        </div>
      </div>
    </div>
  </div>`;

    var questionsEl = document.querySelectorAll(".questions");
    var accoridon = () => {
      for (const item of questionsEl) {
        let accHeader = item.firstElementChild;
        accHeader.addEventListener("click", function () {
          let accDetails = this.nextElementSibling;
          if (accDetails.style.maxHeight) {
            this.lastElementChild.innerHTML = "+";
            accDetails.style.maxHeight = null;
          } else {
            this.lastElementChild.innerHTML = "-";
            accDetails.style.maxHeight = accDetails.scrollHeight + "px";
          }
        });
      }
    };
    accoridon();
  });
};

slideMenuNavBar();
homeBtn();
productBtn();
productInfo();
blogBtn();
faqBtn();
/*   */
