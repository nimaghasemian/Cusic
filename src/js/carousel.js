setTimeout(() => {
  function carousel(ulclass,container,slidesclass,nextclass,prevclass){
    const carouselContainer = document.querySelector(ulclass);  
     const slides = document.querySelectorAll(slidesclass); 
     const next = document.querySelector(nextclass);  
     const prev = document.querySelector(prevclass);  
     const root = document.querySelector(container);
     let pointerend,size; 
     let counter = 0;
     let pointerstart = 0;
     if(window.innerWidth >= 1024){
        pointerend = 6; 
        size = root.clientWidth/7;
        if(ulclass == ".list3" || ulclass == ".list4"){
          pointerend = 1; 
          size = root.clientWidth/2;
        } 
        
        for (let index = 0; index < slides.length; index++) {
        slides[index].style.width = size + "px";
        } 
     }
 
    //  carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px'; 
     carouselContainer.style.width = slides.length*size + 'px'; 
     for (let index = pointerend+1; index < slides.length; index++) {
      slides[index].style.visibility = "hidden";
     } 
     next.addEventListener('click',()=>{ 
       if (slides[pointerend].classList.contains("lastslide"))return;  
       carouselContainer.style.transition = 'transform 0.4s ease-in-out';
       slides[pointerend+1].style.visibility = "visible"; 
       slides[pointerstart].style.visibility = "hidden";
       pointerend++;
       pointerstart++;
       counter++;
       carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';     
     });  
     prev.addEventListener('click',()=>{  
      if (slides[pointerstart].classList.contains("firstslide"))return;   
       carouselContainer.style.transition = 'transform 0.4s ease-in-out'; 
       slides[pointerend].style.visibility = "hidden"; 
       slides[pointerstart-1].style.visibility = "visible";
       pointerend--;
       pointerstart--; 
       counter--;  
       carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px';  
     });  
    }
    carousel(".list1",".container1",".slides1",".next1",".prev1");
    carousel(".list2",".container2",".slides2",".next2",".prev2");
    carousel(".list3",".container3",".slides3",".next3",".prev3");
    carousel(".list4",".container4",".slides4",".next4",".prev4");
    //  carouselContainer.addEventListener('transitionend',()=>{  
    //    console.log(slides[counter]);  
    //    if(slides[counter].id ==='lastslide'){  
    //    carouselContainer.style.transition = 'none';  
    //    counter = slides.length - 2;      
    //    carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
    //    }  
    //  });  
    //  carouselContainer.addEventListener('transitionend',()=>{  
    //    console.log(slides[counter]);  
    //    if(slides[counter].id ==='firstslide'){  
    //    carouselContainer.style.transition = 'none';  
    //    counter = slides.length - counter;      
    //    carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
    //    }
    //  });
},2000);
