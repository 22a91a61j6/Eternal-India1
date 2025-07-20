document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const state = params.get('state');

    // Example data for various states
    const temples = {
        AndhraPradesh: {
            heading: 'Tirumala',
            images: ['t1_image1.jpg', 't1_image2.jpg'],
            sections: {
                history: {
                    title: 'Historical Background',
                    content: `
                        <ul>
                            <li>
                                <b>Ancient Origin:</b><br>
                                Tirumala's ancient origins and establishment as a sacred site are deeply rooted in Hindu mythology and early dynastic patronage. 
                                Recognized for its spiritual significance due to its association with Lord Venkateswara, the site has been revered for centuries.
                            </li>
                            <li>
                                <b>Establishment:</b><br>
                                The early development of Tirumala as a religious site began under South Indian dynasties like the Pallavas and Cholas. 
                                These rulers recognized its sacredness and built the initial temple structures, supporting religious activities there.
                            </li>
                        </ul>
                    `
                },
                architecture: {
                    title: 'Architectural Features',
                    content: `
                        <ul>
                            <li>
                                <b>Ananda Nilayam Vimanam:</b><br>
                                The golden tower above the sanctum sanctorum is known as the Ananda Nilayam. This structure is covered in gold plates and is a symbol 
                                of the temple's opulence and spiritual significance.
                            </li>
                            <li>
                                <b>Gopurams (Temple Towers):</b><br>
                                Raja Gopuram: The main entrance tower, which is a striking example of Dravidian architecture, adorned with intricate carvings and sculptures
                                depicting various deities and mythological scenes.
                            </li>
                        </ul>
                    `
                },
                significance: {
                    title: 'Religious Significance',
                    content: `
                        <ul>
                            <li>
                                <b>Brahmotsavam:</b><br>
                                The most significant festival, celebrated annually, attracting millions of devotees. It is marked by elaborate processions, 
                                chariot rides of the deity, and numerous rituals.
                            </li>
                            <li>
                                <b>Daily Rituals:</b><br>
                                The temple follows a rigorous schedule of rituals starting from Suprabhatam (early morning prayer) to Ekanta Seva (night service). 
                                These rituals are performed with great devotion and precision, attracting thousands of devotees daily.
                            </li>
                        </ul>
                    `
                },
                food: {
                    title: 'Food Practices',
                    content: `
                        <ul>
                            <li>
                                <b>Prasad Distribution:</b><br>
                                Laddu Prasadam: The most famous prasadam (sacred offering) of Tirumala is the Tirupati Laddu. This sweet is distributed to pilgrims 
                                as a blessed food item after offering it to the deity. The laddu is known for its unique taste and is considered highly auspicious.
                            </li>
                            <li>
                                <b>Annaprasadam:</b><br>
                                One of the most notable food practices is the distribution of free meals to pilgrims. The temple provides Annaprasadam (sacred food) 
                                daily to thousands of devotees, ensuring that everyone who visits is fed.
                            </li>
                        </ul>
                    `
                }
            }
        },
        Srisailam: {
            heading: 'Srisailam',
            images: ['srisailam_image1.jpg', 'srisailam_image2.jpg'],
            sections: {
                history: {
                    title: 'Historical Background',
                    content: `
                        <p>Srisailam is known for its historical and religious significance, dating back to ancient times...</p>
                    `
                },
                architecture: {
                    title: 'Architectural Features',
                    content: `
                        <p>The temple features classic Dravidian architecture with elaborate gopurams and intricately carved sculptures...</p>
                    `
                },
                significance: {
                    title: 'Religious Significance',
                    content: `
                        <p>Srisailam is a prominent Jyotirlinga and Shakti Peetha, attracting thousands of devotees...</p>
                    `
                },
                food: {
                    title: 'Food Practices',
                    content: `
                        <p>Prasadam and Annaprasadam are distributed to devotees...</p>
                    `
                }
            }
        },
        Annavaram: {
            heading: 'Annavaram',
            images: ['annavaram_image1.jpg', 'annavaram_image2.jpg'],
            sections: {
                history: {
                    title: 'Historical Background',
                    content: `
                        <p>Annavaram's temple history dates back to...</p>
                    `
                },
                architecture: {
                    title: 'Architectural Features',
                    content: `
                        <p>The temple architecture reflects...</p>
                    `
                },
                significance: {
                    title: 'Religious Significance',
                    content: `
                        <p>Annavaram is significant due to...</p>
                    `
                },
                food: {
                    title: 'Food Practices',
                    content: `
                        <p>Special prasadam and food practices include...</p>
                    `
                }
            }
        }
        // Add more states here...
    };

    const templeData = temples["AndhraPradesh"];
    console.log(templeData)

    if (templeData) {
        document.querySelector('.Temple_heading').textContent = templeData.heading;

        // Populate temple images
        const imageContainer = document.querySelector('.t1_Photo');
        templeData.images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = `../images/${image}`;
            imgElement.alt = `${templeData.heading} Image ${index + 1}`;
            imageContainer.appendChild(imgElement);
        });

        // Populate sections
        Object.keys(templeData.sections).forEach(section => {
            const sectionData = templeData.sections[section];
            const sectionElement = document.createElement('div');
            sectionElement.classList.add('box1');
            sectionElement.innerHTML = `
                <div class="hist"><u>${sectionData.title}:</u></div>
                <div class="t1_Matter">${sectionData.content}</div>
            `;
            document.querySelector('.t1_content').appendChild(sectionElement);
        });
    } else {
        document.querySelector('.Temple_heading').textContent = 'Temple information not found';
    }
});
