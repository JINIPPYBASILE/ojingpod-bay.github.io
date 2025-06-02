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
  let prompts = await charadex.initialize.page(null, charadex.page.world.prompts, (arr) => {

      // Splice the silly little array
      let sliceAmount = charadex.page.world.prompts.amount || 4;
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
  let staff = await charadex.initialize.page(null, charadex.page.world.staff, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.staff.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Designs
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.world.designs, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.designs.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  
  /* traits
  ===================================================================== */
  let traits = await charadex.initialize.page(null, charadex.page.world.traits, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.traits.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* traits
  ===================================================================== */
  let worlds = await charadex.initialize.page(null, charadex.page.world.worlds, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.worlds.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


    /* traits
  ===================================================================== */
  let items = await charadex.initialize.page(null, charadex.page.world.items, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.items.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });

  
    /* species
  ===================================================================== */
  let species = await charadex.initialize.page(null, charadex.page.world.species, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.species.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


    /* heritage
  ===================================================================== */
  let heritage = await charadex.initialize.page(null, charadex.page.world.heritage, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.heritage.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


    /* heritage
  ===================================================================== */
  let rarity = await charadex.initialize.page(null, charadex.page.world.rarity, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.rarity.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


    /* heritage
  ===================================================================== */
  let transformations = await charadex.initialize.page(null, charadex.page.world.transformations, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.world.transformations.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });



  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});