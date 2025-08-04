const swiper = new Swiper('.swiper', {
    loop:true,
    
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
})
let goods = document.querySelector('.goods img')
let catsBucket = document.querySelectorAll('.add-to-bucket')
let catsBucket2 = document.querySelectorAll('.add-to-bucket2')
let catsBucket3 = document.querySelectorAll('.add-to-bucket3')
let catsBucket4 = document.querySelectorAll('.add-to-bucket4')
let price = document.querySelector('.goods-price')
let count = document.querySelector('.count-span')
let a = document.querySelectorAll('nav a')

for (let i = 0; i<catsBucket.length; i+=1){
    catsBucket[i].addEventListener('click',function(){
        count.innerHTML = +count.innerHTML + 1
        price.innerHTML = +price.innerHTML + 1000
    })
}
for (let i = 0; i<catsBucket2.length; i+=1){
    catsBucket2[i].addEventListener('click',function(){
        count.innerHTML = +count.innerHTML + 1
        price.innerHTML = +price.innerHTML + 500
    })
}
for (let i = 0; i<catsBucket3.length; i+=1){
    catsBucket3[i].addEventListener('click',function(){
        count.innerHTML = +count.innerHTML + 1
        price.innerHTML = +price.innerHTML + 700
    })
}
for (let i = 0; i<catsBucket4.length; i+=1){
    catsBucket4[i].addEventListener('click',function(){
        count.innerHTML = +count.innerHTML + 1
        price.innerHTML = +price.innerHTML + 200
    })
}

const st = SplitText.create(".dop", { type: "chars" });

gsap.timeline()
  .set(".dop", { opacity: 1 })
  .set(st.chars, { yPercent: -60 })
  .to(st.chars, {
    duration: 1.4,
    ease: "power1.inOut",
    yPercent: 60,
    rotate: () => "random(-5,5)",
    stagger: {
      amount: 1.2,
      repeat: -1,
      repeatRefresh: true,
      yoyo: true
    },
    "text-shadow": "2px -6px 0 red, 4px -12px 0 orange, 6px -18px 0 yellow, 8px -24px 0 black"
  })
  .seek(99);

