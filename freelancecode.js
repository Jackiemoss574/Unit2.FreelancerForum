const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 },
    { name: 'Carol', occupation: 'Programmer', price: 70 },
    { name: 'David', occupation: 'Graphic Designer', price: 45 },
    { name: 'Emily', occupation: 'Web Developer', price: 60 },
    { name: 'Frank', occupation: 'Digital Marketer', price: 55 },
    { name: 'Georgia', occupation: 'Photographer', price: 40 },
    { name: 'Henry', occupation: 'SEO Specialist', price: 50 },
    { name: 'Isabel', occupation: 'Translator', price: 35 },
    { name: 'Jack', occupation: 'Video Editor', price: 65 },
    { name: 'Karen', occupation: 'UI/UX Designer', price: 60 },
    { name: 'Leo', occupation: 'Copywriter', price: 45 },
    { name: 'Mia', occupation: 'Social Media Manager', price: 50 },
    { name: 'Noah', occupation: 'Project Manager', price: 70 },
    { name: 'Olivia', occupation: 'Content Strategist', price: 55 },
    { name: 'Patrick', occupation: 'Illustrator', price: 40 },
    { name: 'Quinn', occupation: 'Brand Consultant', price: 65 },
    { name: 'Rachel', occupation: 'Data Analyst', price: 60 },
    { name: 'Sam', occupation: '3D Artist', price: 75 },
    { name: 'Tara', occupation: 'Voice Over Artist', price: 50 }
];


let currentIndex = 0;

function updateAveragePrice() {
    let total = 0;
    let count = currentIndex > 0 ? currentIndex : 3;
    for (let i = 0; i < count; i++) {
        total += freelancers[i].price;
    }
    const average = total / count;
    document.getElementById('avg-price-value').textContent = `Average Price: $${average.toFixed(2)}`;
}

function addFreelancerPeriodically() {
    if (currentIndex < freelancers.length) {
        const list = document.getElementById('freelancer-list').getElementsByTagName('ol')[0];
        const freelancer = freelancers[currentIndex];
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        list.appendChild(listItem);
        currentIndex++;
        updateAveragePrice();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(addFreelancerPeriodically, 5000);
    updateAveragePrice();
});