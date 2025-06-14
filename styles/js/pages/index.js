/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* Prompts
  ===================================================================== */
  let prompts = await charadex.initialize.page(null, charadex.page.index.prompts, (arr) => {

      // Splice the silly little array
      let sliceAmount = charadex.page.index.prompts.amount || 4;
      arr.splice(sliceAmount, arr.length);

    }, (data) => {

      // Add the silly little prompt stuff here too
      $('.cd-prompt-background').each(function(i) {
        const element = $(this);
        const image = data.array[i]?.image;
        element.attr('style', `background-image: url(${image})`);
      });
      
    }
    
  );


  /* Staff
  ===================================================================== */
  let staff = await charadex.initialize.page(null, charadex.page.index.staff, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.staff.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });

   /* Staff
  ===================================================================== */
  let carouselone = await charadex.initialize.page(null, charadex.page.index.carouselone, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.carouselone.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


   /* Staff
  ===================================================================== */
  let carouseltwo = await charadex.initialize.page(null, charadex.page.index.carouseltwo, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.carouseltwo.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


   /* Staff
  ===================================================================== */
  let carouselthree = await charadex.initialize.page(null, charadex.page.index.carouselthree, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.carouselthree.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });



  /* Designs
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.designs.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  
  /* news
  ===================================================================== */
  let news = await charadex.initialize.page(null, charadex.page.index.news, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.news.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });



    
  /* Designs
  ===================================================================== */
  let featured = await charadex.initialize.page(null, charadex.page.index.featured, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.featured.amount || 6;
    arr.splice(sliceAmount, arr.length);

  })


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});