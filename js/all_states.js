var states = [
    { name: 'ANDHRA PRADESH', image: '../images/states_images/andhra_pradesh.png' },
    { name: 'ARUNACHAL PRADESH', image: '../images/states_images/arunachal_pradesh.png' },
    { name: 'ASSAM', image: '../images/states_images/assam.png' },
    { name: 'BIHAR', image: '../images/states_images/bihar.png' },
    { name: 'CHATTISGARH', image: '../images/states_images/chattishgarh.png' },
    { name: 'GOA', image: '../images/states_images/goa.png' },
    { name: 'GUJARAT', image: '../images/states_images/gujarat.png' },
    { name: 'HARYANA', image: '../images/states_images/haryana.png' },
    { name: 'HIMACHAL PRADESH', image: '../images/states_images/himachal pradesh.png' },
    { name: 'JHARKHAND', image: '../images/states_images/jharkhand.png' },
    { name: 'KARNATAKA', image: '../images/states_images/karnataka.png' },
    { name: 'KERALA', image: '../images/states_images/kerala.png' },
    { name: 'MADHYA PRADESH', image: '../images/states_images/madhya_pradesh.png' },
    { name: 'MAHARASHTRA', image: '../images/states_images/maharashtra.png' },
    { name: 'MANIPUR', image: '../images/states_images/manipur.png' },
    { name: 'MEGHALAYA', image: '../images/states_images/meghalaya.png' },
    { name: 'MIZORAM', image: '../images/states_images/mizoram.png' },
    { name: 'NAGALAND', image: '../images/states_images/nagaland.png' },
    { name: 'ODISHA', image: '../images/states_images/orrisa.png' },
    { name: 'PUNJAB', image: '../images/states_images/punjab.png' },
    { name: 'RAJASTHAN', image: '../images/states_images/rajasthan.png' },
    { name: 'SIKKIM', image: '../images/states_images/sikkim.png' },
    { name: 'TAMIL NADU', image: '../images/states_images/tamil_nadu.png' },
    { name: 'TELANGANA', image: '../images/states_images/telangana.png' },
    { name: 'TRIPURA', image: '../images/states_images/tripura.png' },
    { name: 'UTTAR PRADESH', image: '../images/states_images/uttar pradesh.png' },
    { name: 'UTTARAKHAND', image: '../images/states_images/uttarakhand.png' },
    { name: 'WEST BENGAL', image: '../images/states_images/west-bengal.png' }
];


document.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById('states-container');
    container.innerHTML = '';

    states.forEach(state => {
        const stateDiv = document.createElement('a');
        stateDiv.href = `../html/state.html?state=${(state.name)}`;
        stateDiv.classList.add('state_div');
        
        const img = document.createElement('img');
        img.src = state.image;
        img.alt = state.name;

        const p = document.createElement('p');
        p.classList.add('state_name');
        p.textContent = state.name;

        stateDiv.appendChild(img);
        stateDiv.appendChild(p);
        container.appendChild(stateDiv);
    });
});
