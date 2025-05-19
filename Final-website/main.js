/* =================typing animation==================== */
var typed = new Typed(".typing", {
    strings:["","Web Designer","UI/UX Designer","Photographer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})
/* =================ASIDE==================== */
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
        {
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function()
            {
                    removeBackSection();
                    for(let j=0; j < totalNavList; j++)
                    {
                        if(navList[j].querySelector("a").classList.contains("Active"))
                        {
                            addBackSection(j);
                            //allSection[j].classList.add("back-section");
                        }
                        navList[j].querySelector("a").classList.remove("Active");
                    }
                    this.classList.add("Active")
                    showSection(this);
                    if(window.innerWidth < 1200)
                    {
                        asideSectionTogglerBtn();
                    }
                })
            }
            function removeBackSection()
            {
               for(let i=0; i<totalSection; i++) 
               {
                allSection[i].classList.remove("back-section");
               }
            }
            function addBackSection(num)
            {
                allSection[num].classList.add("back-section");
            }
            function showSection(element)
            {
                for(let i= 0; i<totalSection; i++)
                {
                    allSection[i].classList.remove("Active");
                }
                const target = element.getAttribute("href").split("#")[1];
                document.querySelector("#" + target).classList.add("Active")
            }
            function updateNav(element)
            {
                for(let i=0; i <totalNavList; i++)
                {
                    navList[i].querySelector("a").classList.remove("Active");
                    const target = element.getAttribute("href").split("#")[1];
                    if(target ===navList[i].querySelector("a").getAttribute("href").split("#")[1])
                    {
                        navList[i].querySelector("a").classList.add("Active");
                    }

                }  
            }
            document.querySelector(".hire-me").addEventListener("click", function()
            {
                const sectionIndex = this.getAttribute("data-section-index");
                //console.log(sectionIndex);
                showSection(this);
                updateNav(this);
                removeBackSection();
                addBackSection(sectionIndex);

            });
            const navTogglerBtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navTogglerBtn.addEventListener("click", () =>
                {
                   asideSectionTogglerBtn(); 
                })
                function asideSectionTogglerBtn()
                {
                    aside.classList.toggle("open");
                    navTogglerBtn.classList.toggle("open");
                    for(let i=0; i <totalSection; i++)
                    {
                        allSection[i].classList.toggle("open");
                    }
                }
/*=========================rating ======================== */

    document.addEventListener('DOMContentLoaded', function() {
    // Handle star rating selection
    document.querySelectorAll('input[name="rate"]').forEach(radio => {
        radio.addEventListener('change', () => {
            document.getElementById('rating-value').value = radio.id.split('-')[1];
        });
    });
});

// In your displayReviews function
    const avatar = document.createElement('div');
    avatar.className = 'review-avatar';
    // Add this line for random colors
    avatar.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;

        document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.querySelector('.review-comment');
    
        function displayReviews(reviews) {
            reviewContainer.innerHTML = '';
            reviews.reverse().forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review-item';
                
                // Create avatar
                const avatar = document.createElement('div');
                avatar.className = 'review-avatar';
                const initials = review.name ? review.name.charAt(0).toUpperCase() : 'A';
                avatar.textContent = initials;

                // Create stars
                const stars = document.createElement('div');
                stars.className = 'review-stars';
                for (let i = 1; i <= 5; i++) {
                    const star = document.createElement('i');
                    star.className = `fas fa-star ${i <= review.rating ? 'filled' : ''}`;
                    stars.appendChild(star);
                }

                // Create review content
                const contentDiv = document.createElement('div');
                contentDiv.className = 'review-content';
                contentDiv.innerHTML = `
                    <div class="review-header">
                        <h3 class="review-name">${review.name || 'Anonymous'}</h3>
                        <div class="review-rating"></div>
                    </div>
                    <p class="review-text">${review.Comment}</p>
                `;
                // In your avatar creation code
                avatar.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
                
                contentDiv.querySelector('.review-rating').appendChild(stars);
                reviewDiv.appendChild(avatar);
                reviewDiv.appendChild(contentDiv);
                reviewContainer.appendChild(reviewDiv);
            });
        }                 

    // Fetch reviews from server
    fetch('/post')
        .then(response => response.json())
        .then(data => displayReviews(data))
        .catch(error => console.error('Error:', error));
});
   

    /*allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i=0; i <totalNavList; i++)
    {
    
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
            {
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                    console.log(navList[i].querySelector("a"))
                    } 
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
            })
    }
    function showSection(element)
    {
        for(let i = 0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1]; 
        document.querySelector("#" + target).classList.add("active")
    } */
       