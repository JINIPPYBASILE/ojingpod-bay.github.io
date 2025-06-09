/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Charadex",
  url: "https://jinippybasile.github.io/ojingpod-bay.github.io",
  description: `A tool for organizing small ARPGs and species.`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1zctidTUBexHDpHM7atXkVWqoZa7FK9lRi3aBNUS7WU4",

  pages: {
    masterlist:    "masterlist",
    masterlistLog: "masterlist log",
    imageGallery:  "image gallery",
    inventory:     "inventory",
    inventoryLog:  "inventory log",
    items:         "items",
    traits:        "traits",
    prompts:       "prompts",
       news:       "news",
    faq:           "faq",
    staff:         "mods",
       worlds:         "worlds", 
        species:         "species",
           heritage:         "heritage",
             rarity:         "rarity", 
             transformations: "transformations", 
             carouselone: "carouselone", 
              carouseltwo: "carouseltwo", 
               carouselthree: "carouselthree", 
               featured: "featured"
             
  },

  options: {

    designTypes: ['All', 'Official Design', 'Guest Design', 'MYO Slot', 'MYO Design'],
    statuses: ['All', 'Resell', 'Trade', 'Gift', 'Voided', 'For Sale', 'Purchased'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'],
    species: ['All', 'Dog', 'Cat', 'Bunny'],
    itemTypes: ['All', 'Currency', 'MYO Slot', 'Pet', 'Trait', 'Misc'],
    traitTypes: ['All', 'Ears', 'Eyes', 'Body', 'Limbs', 'Tails', 'Misc', 'Mutations']

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'charadex',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.traits = {

  sheetPage: charadex.sheet.pages.traits,
  sitePage: 'traits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* news
/* --------------------------------------------------------------- */
charadex.page.news = {

  sheetPage: charadex.sheet.pages.news,
  sitePage: 'news',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};

/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* carouselone
/* --------------------------------------------------------------- */
charadex.page.carouselone = {

  sheetPage: charadex.sheet.pages.carouselone,
  sitePage: 'carouselone',
  dexSelector: 'charadex',
  profileProperty: 'carouselone',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Carouselone']
  },

  prevNext: {
    toggle: false,
  },

};


/* featured
/* --------------------------------------------------------------- */
charadex.page.featured = {

  sheetPage: charadex.sheet.pages.featured,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['design']
  },

  prevNext: {
    toggle: false,
  },

};


/* carouseltwo
/* --------------------------------------------------------------- */
charadex.page.carouseltwo = {

  sheetPage: charadex.sheet.pages.carouseltwo,
  sitePage: 'carouseltwo',
  dexSelector: 'charadex',
  profileProperty: 'carouseltwo',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['carouseltwo']
  },

  prevNext: {
    toggle: false,
  },

};


/* carouselthree
/* --------------------------------------------------------------- */
charadex.page.carouselthree = {

  sheetPage: charadex.sheet.pages.carouselthree,
  sitePage: 'carouselthree',
  dexSelector: 'charadex',
  profileProperty: 'carouselthree',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};

/* species
/* --------------------------------------------------------------- */
charadex.page.species = {

  sheetPage: charadex.sheet.pages.species,
  sitePage: 'species',
  dexSelector: 'charadex',
  profileProperty: 'species',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: false,
    filterToggle: false,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};


/* transformations
/* --------------------------------------------------------------- */
charadex.page.transformations = {

  sheetPage: charadex.sheet.pages.transformations,
  sitePage: 'transformations',
  dexSelector: 'charadex',
  profileProperty: 'transformation',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: false,
    filterToggle: false,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};


/* rarity
/* --------------------------------------------------------------- */
charadex.page.rarity = {

  sheetPage: charadex.sheet.pages.rarity,
  sitePage: 'rarity',
  dexSelector: 'charadex',
  profileProperty: 'rarity',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: false,
    filterToggle: false,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};


/* heritage
/* --------------------------------------------------------------- */
charadex.page.heritage = {

  sheetPage: charadex.sheet.pages.heritage,
  sitePage: 'heritage',
  dexSelector: 'charadex',
  profileProperty: 'heritage',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: false,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};



/* worlds
/* --------------------------------------------------------------- */
charadex.page.worlds = {

  sheetPage: charadex.sheet.pages.worlds,
  sitePage: 'worlds',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};



/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}


/* Image Gallery
/* --------------------------------------------------------------- */
charadex.page.imageGallery = {

  sheetPage: charadex.sheet.pages.imageGallery,
  sitePage: 'gallery',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Designs', 'Artist', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

};



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Species',
    parameters: charadex.sheet.options.species,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.masterlistLog]: {

      sheetPage: charadex.sheet.pages.masterlistLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

    [charadex.sheet.pages.imageGallery]: {

      ... charadex.page.imageGallery,

      sheetPage: charadex.sheet.pages.imageGallery,
      primaryProperty: 'design',
      relatedProperty: 'designs',
      dexSelector: 'gallery',
      profileProperty: 'id',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "id",
        order: "asc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: true,
        amount: 12,
      },

    }

  }

};




/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 3,
  },

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'design',
    amount: 1,
  }, 

    carouselone: {
    ... charadex.page.carouselone,
    dexSelector: 'carouselone',
    amount: 4,
  }, 
    carouseltwo: {
    ... charadex.page.carouseltwo,
    dexSelector: 'carouseltwo',
    amount: 4,
  }
,

  carouselthree: {
    ... charadex.page.carouselthree,
    dexSelector: 'carouselthree',
    amount: 4,
  },

   news: {
    ... charadex.page.news,
    dexSelector: 'news',
    amount: 3,
  }, 
  featured: {
    ... charadex.page.featured,
    dexSelector: 'featured',
    amount: 3,
  }
};


/* world
/* --------------------------------------------------------------- */
charadex.page.world = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 3,
  },

  items: {
    ... charadex.page.items,
    dexSelector: 'item',
    amount: 6,
  },

  traits: {
    ... charadex.page.traits,
    dexSelector: 'trait',
    amount: 4,
  },

   worlds: {
    ... charadex.page.worlds,
    dexSelector: 'worlds',
    amount: 1,
  },

  
   species: {
    ... charadex.page.species,
    dexSelector: 'species',
    amount: 10,
  }, 

    
   heritage: {
    ... charadex.page.heritage,
    dexSelector: 'heritage',
    amount: 10,
  }, 

   
   rarity: {
    ... charadex.page.rarity,
    dexSelector: 'rarity',
    amount: 10,
  },
 
   transformations: {
    ... charadex.page.transformations,
    dexSelector: 'transformation',
    amount: 10,
  }
 

};



export { charadex };