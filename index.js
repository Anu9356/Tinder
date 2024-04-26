let user=[
    {
        profilepic:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Displaypic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmassage:4,
        location:"delhi, india",
        name:"Riddhi",
        age:23,
        interests:[{
            icon:`<i class="ri-music-2-line"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-paint-fill"></i>`,
            interest:"Painting"
        }],
        bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequatur id aut porro error laborum. Voluptas veniam ratione officia illum, culpa ex minus obcaecati vero quibusdam voluptates mollitia magnam quaerat?",
        isfreinds:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Displaypic:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmassage:41,
        location:"mumbai, india",
        name:"pihu",
        age:20,
        interests:[{
            icon:`<i class="ri-music-2-line"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-paint-fill"></i>`,
            interest:"Painting"
        }],
        bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequatur id aut porro error laborum. Voluptas veniam ratione officia illum, culpa ex minus obcaecati vero quibusdam voluptates mollitia magnam quaerat?",
        isfreinds:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Displaypic:"https://images.unsplash.com/photo-1512646605205-78422b7c7896?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmassage:14,
        location:"banglore, india",
        name:"Khushi",
        age:21,
        interests:[{
            icon:`<i class="ri-music-2-line"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-paint-fill"></i>`,
            interest:"Painting"
        }],
        bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequatur id aut porro error laborum. Voluptas veniam ratione officia illum, culpa ex minus obcaecati vero quibusdam voluptates mollitia magnam quaerat?",
        isfreinds:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1557053908-4793c484d06f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Displaypic:"https://images.unsplash.com/photo-1516195851888-6f1a981a862e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmassage:45,
        location:"hydrabad, india",
        name:"swara",
        age:20,
        interests:[{
            icon:`<i class="ri-music-2-line"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-paint-fill"></i>`,
            interest:"Painting"
        }],
        bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore consequatur id aut porro error laborum. Voluptas veniam ratione officia illum, culpa ex minus obcaecati vero quibusdam voluptates mollitia magnam quaerat?",
        isfreinds:null
    },
];

function select(elem){
    return document.querySelector(elem);
}
let curr=0;
let isanimating =false;

function setData(index){
    select(".prflimg img").src=user[index].profilepic;
    select(".badge h5").textContent=user[index].pendingmassage;
    select(".location h3").textContent=user[index].location;
    select(".name h1:nth-child(1)").textContent=user[index].name;
    select(".name h1:nth-child(2)").textContent=user[index].age;
    
    let clutter=""
    user[index].interests.forEach(function(interests){
        clutter+=`<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interests.icon}
        <h3 class=" text-sm tracking-tight">${interests.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML=clutter;
    select(".bio p").textContent=user[index].bio;
}
(function setInitial(){
    document.querySelector(".maincontainer img").src=user[curr].Displaypic;
    document.querySelector(".secondmain img").src=user[curr+1]?.Displaypic;

    setData(curr);
    curr=2;
})();

function imagechange(){
    if(!isanimating){
        isanimating=true;
        let tl=gsap.timeline({
            onComplete: function(){
                isanimating=false;
                let main=select(".maincontainer");
                let incoming=select(".secondmain");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("secondmain");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
    
                
                
                
                
                
                
    
    
    
                if(curr===user.length)curr=0;
                select(".maincontainer img").src=user[curr].Displaypic;
                curr++;
                
                main.classList.remove("maincontainer");
                incoming.classList.add("maincontainer");
                
    
    
                
                main.classList.add("secondmain");
            }
        });
    
        tl.to(".maincontainer",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration:.9
        },"a")
        .from(".secondmain",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration:1.1
        },"a")
    }
    
}

let deny=select(".deny");
let accept=select(".accept");

deny.addEventListener("click",function(){
    imagechange();


    setData(curr-1);
gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.1,
    ease:Circ,
    duration:1
})
});



(function containerCreator(){
    document.querySelectorAll(".element")
    
    
    .forEach(function(element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,`overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

