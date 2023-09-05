// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// saving data in an array at the local storage
document.addEventListener("DOMContentLoaded", function () {
    const expertscards = JSON.parse(localStorage.getItem("arr")) || [
        {
            id: 0,
            title: "فرح حميدي",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
            
        },
        {
            id: 1,
            title: "لمى الداود",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
            
        },
        
    ];
    // this element is a div created at the HTML file
    const container = document.getElementById("experts-cards-container");
    // "expertscards" is the name of the array and the function"expert" is applied on every element in the array
    expertscards.forEach(expert => {
        const cardsElement = document.createElement("div");
        cardsElement.id= "contentcard"
        cardsElement.classList.add("expert");

        cardsElement.innerHTML = `
        

            <img src="${expert.imgurl}" alt="${expert.title}" class="img"><br><br>
            
               
            
            <h2 class="name">${expert.title}</h2>
            <p class="experties">${expert.head}</p>
            <li class="expertieslist">${expert.description1}</li>
            <li class="expertieslist">${expert.description2}</li><br>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

             
            <a href="" class="knowmore">تعرف اكثر</a>
        `;

        container.appendChild(cardsElement);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const expertscards2 = JSON.parse(localStorage.getItem("arr2")) || [
     
        {
            id: 0,
            title: "جمانة العشيوان",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
            
        },
        {
            id: 1,
            title: "الهنوف العريني",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
        }
    ];
    // this element is a div created at the HTML file
    const container = document.getElementById("experts-cards-container2");
    // "expertscards" is the name of the array and the function"expert" is applied on every element in the array
    expertscards2.forEach(expert => {
        const cardsElement = document.createElement("div");
        cardsElement.id= "contentcard"
        cardsElement.classList.add("expert");

        cardsElement.innerHTML = `
        

            <img src="${expert.imgurl}" alt="${expert.title}" class="img"><br><br>
            
               
            
            <h2 class="name">${expert.title}</h2>
            <p class="experties">${expert.head}</p>
            <li class="expertieslist">${expert.description1}</li>
            <li class="expertieslist">${expert.description2}</li><br>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

             
            <a href="" class="knowmore">تعرف اكثر</a>
        `;

        container.appendChild(cardsElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const expertscards3 = JSON.parse(localStorage.getItem("arr3")) || [
     
        {
            id: 0,
            title: "سماح النجدي",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
            
        },
        {
            id: 1,
            title: "علي ابراهيم",
            imgurl: "../media/userimg2.png",
            head: "الخبرات",
            description1:"المجال",
            description2:"عدد سنوات الخبره",
        }
    ];


const addbutton =document.getElementsByClassName(loadMorebtn);
addbutton.addEventListener("click",function(){
    
        // this element is a div created at the HTML file
        const container = document.getElementById("experts-cards-container3");
        // "expertscards" is the name of the array and the function"expert" is applied on every element in the array
        expertscards3.forEach(expert => {
            const cardsElement = document.createElement("div");
            cardsElement.id= "contentcard"
            cardsElement.classList.add("expert");
    
            cardsElement.innerHTML = `
            
    
                <img src="${expert.imgurl}" alt="${expert.title}" class="img"><br><br>
                
                   
                
                <h2 class="name">${expert.title}</h2>
                <p class="experties">${expert.head}</p>
                <li class="expertieslist">${expert.description1}</li>
                <li class="expertieslist">${expert.description2}</li><br>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
    
                 
                <a href="" class="knowmore">تعرف اكثر</a>
            `;
            
            container.appendChild(cardsElement);
            
        });
       
    });
})