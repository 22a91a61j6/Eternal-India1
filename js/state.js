document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const stateName = urlParams.get('state');


    const exploreMoreLink = document.getElementById("explore-more");

    exploreMoreLink.href = `../state_pages_inside/${stateName}/${stateName}.html`;

    if (!stateName) {
        console.error('State name is missing in the query parameter.');
        return;
    }

    // Update state name in the heading
    document.getElementById('stateName').textContent = stateName;

    const stateData = {
        'ANDHRA PRADESH': {
            temples: [
                { name: 'tirumala', image: '../state_pages/andhra/Tirumala1.jpg' },
                { name: 'alipiri', image: '../state_pages/andhra/alipiri1.jpg' },
                { name: 'annavaram', image: '../state_pages/andhra/annavaram1.jpeg' },
                { name: 'dwarapudi', image: '../state_pages/andhra/dwarapudi.jpg' },
                { name: 'srikalahasthi', image: '../state_pages/andhra/srikalahasthi1.jpg' },
                { name: 'srisailam', image: '../state_pages/andhra/srisailam1.jpg' },
                { name: 'vijayawada', image: '../state_pages/andhra/vijayawada2.jpg' },
            ]
        },
        'ARUNACHAL PRADESH': {
            temples: [
                { name: 'Akashaganga', image:"../state_pages/arunachalpradesh/Akashganaga2.jpeg"},
                { name: 'golden pagoda', image: "../state_pages/arunachalpradesh/golden-pagoda.jpg" },
                { name: 'gompa', image: "../state_pages/arunachalpradesh/gompa2.jpg" },
                { name: 'malinithan', image: "../state_pages/arunachalpradesh/malinithan1.jpg"},
                { name: 'parashuramkund', image: "../state_pages/arunachalpradesh/parshuramkund.jpg" },
            ]
        },
        'GUJARAT' : {
            temples: [
                { name: 'akshardham', image: "../state_pages_inside/Gujarat/akarshadham.jpg"},
                { name: 'somanath', image: "../state_pages_inside/Gujarat/sommanath1.jpg"},
                { name: 'dwaraka', image: "../state_pages/Gujarat/dwaraka11.jpeg"},
            ]
        },

        'PUNJAB' : {
            temples: [
                { name: 'durgiana', image: "../state_pages_inside/Punjab/durgiana_2.jpg"},
                { name: 'mata mansa devi', image: "../state_pages_inside/Punjab/mata_mansa_devi_temple_3.jpg"},
                { name: 'shri krishna mandir', image: "../state_pages_inside/Punjab/Shri_krishna_mandir_1.jpg"},
            ]
        }
        // Need to add more states data 
    };

    const data = stateData[stateName];

    if (data) {

        const templeContainer = document.getElementById('templeContainer');
        templeContainer.innerHTML = ''; 

        data.temples.forEach(temple => {
            const templeDiv = document.createElement('div');
            templeDiv.classList.add('temple-slide');

            const templeImage = document.createElement('img');
            templeImage.src = temple.image;
            templeImage.alt = temple.name;
            
            const templeName = document.createElement('p');
            templeName.innerHTML = `${temple.name}`;
            templeName.style.textTransform = "upperCase";

            templeDiv.appendChild(templeImage);
            templeDiv.appendChild(templeName);
            templeContainer.appendChild(templeDiv);
        });

        // Initialize Slick carousel
        $('.temple-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false, 
            dots: true,
            centerMode: true,
            centerPadding: "0px",
            responsive: [
                {
                    breakpoint: 1024, 
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true, 
                        centerPadding: '10px' 
                    }
                },
                {
                    breakpoint: 768, // For screens smaller than 768px
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false, // Disable center mode
                        centerPadding: '0px' // Remove padding
                    }
                },
                {
                    breakpoint: 480, // For screens smaller than 480px
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false, // Disable center mode
                        centerPadding: '0px' // Remove padding
                    }
                }
            ]
        });
    } else {
        console.error('No data available for this state.');
    }
});
