export interface ITakeAway {
  name: string;
  link: string;
}
export interface IRecipe {
  dish: string;
  veggo: boolean;
  link: string;
}

const oneCompany = () => {
  return TakeAway[Math.floor(Math.random() * TakeAway.length)];
};

export const anotherCompany = (companyName: string) => {
  let newCompany = oneCompany();

  if (companyName === '') {
    return newCompany;
  }
  while (newCompany.name === companyName) {
    newCompany = oneCompany();
  }

  return newCompany;
};

const oneRecipe = (vegetarian: boolean) => {
  if (vegetarian) {
    let onlyVeggo = FoodList.filter((filterFood: IRecipe) => {
      return filterFood.veggo;
    });
    return onlyVeggo[Math.floor(Math.random() * onlyVeggo.length)];
  } else {
    return FoodList[Math.floor(Math.random() * FoodList.length)];
  }
};

export const anotherRecipe = (recipeName: string, vegetarian: boolean) => {
  let newRecipe = oneRecipe(vegetarian);

  if (recipeName === '') {
    return newRecipe;
  }

  while (newRecipe.dish === recipeName) {
    newRecipe = oneRecipe(vegetarian);
  }

  return newRecipe;
};

export const TakeAway: ITakeAway[] = [
  {
    name: 'Foodora',
    link:
      'https://www.foodora.se/en/?r=1&gclid=EAIaIQobChMI2Kegs-CW7wIVB7wYCh0RiAiLEAAYASAAEgJbAvD_BwE',
  },
  {
    name: 'Uber Eats',
    link: 'https://www.ubereats.com/se-en',
  },
  {
    name: 'Wolt',
    link: 'https://www.wolt.se',
  },
];

// Replace with API perhaps?

export const FoodList: IRecipe[] = [
  {
    dish: 'Köttbullar med potatismos, gräddsås, lingon och stektlök',
    veggo: false,
    link: 'https://www.landleyskok.se/recept/hemlagade-kottbullar.html/',
  },
  {
    dish: 'Grillad kolbulle med lingonsylt.',
    veggo: false,
    link:
      'http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/',
  },
  {
    dish: 'Vårrulle med sötsursås',
    veggo: true,
    link:
      'http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/',
  },
  {
    dish: 'Haloumisallad',
    veggo: true,
    link: 'http://mittkok.expressen.se/recept/halloumisallad/',
  },
  {
    dish: 'Baconinlindad kycklingfile.',
    veggo: false,
    link: 'https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2',
  },
  {
    dish: 'Lasagne med köttfärssås',
    veggo: false,
    link: 'http://www.koket.se/lasagne-med-kottfarssas',
  },
  {
    dish: 'Majsplättar med avokadoröra',
    veggo: true,
    link:
      'https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri',
  },
  {
    dish: 'Grönkålssoppa med chorizo',
    veggo: false,
    link:
      'http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I',
  },
  {
    dish: 'Pastagratäng med rökt lax och spenat.',
    veggo: false,
    link:
      'http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/',
  },
  {
    dish: 'Thaigryta med kyckling',
    veggo: false,
    link: 'http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/',
  },
  {
    dish: 'Lax med nudelsallad',
    veggo: false,
    link:
      'https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander',
  },
  {
    dish: 'Lasagne med halloumi, spenat och pumpakärnor',
    veggo: true,
    link:
      'http://www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/',
  },
  {
    dish: 'Rödbetsrisotto med hyvlad halloumi och valnötter',
    veggo: true,
    link:
      'http://www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/',
  },
  {
    dish: 'Halstrad tonfisk med avokadohummus',
    veggo: false,
    link: 'http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/',
  },
  {
    dish: 'Viltskavsgryta med mandelpotatispuré & rårörda lingon',
    veggo: false,
    link:
      'https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon',
  },
  {
    dish: 'Coq Au Vin',
    veggo: false,
    link:
      'http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html',
  },
  {
    dish: 'Indisk linssoppa ”Mulligatawny”',
    veggo: true,
    link: 'http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/',
  },
  {
    dish: 'Falafel med hummus, yoghurtdressing och picklad rödlök',
    veggo: true,
    link:
      'http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/',
  },
  {
    dish: 'Vegetarisk pastagratäng',
    veggo: true,
    link: 'https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/',
  },
  {
    dish: 'Morotsbiffar',
    veggo: true,
    link: 'http://www.tasteline.com/recept/morotsbiffar-med-dragon/',
  },
  {
    dish: 'Biff Teriyaki',
    veggo: false,
    link: 'http://www.arla.se/recept/biff-teriyaki',
  },
  {
    dish: 'Korvstroganoff',
    veggo: false,
    link: 'http://www.ica.se/recept/korvstroganoff-med-ris-533512/',
  },
  {
    dish: 'Ugnssteks falukorv med rostade rotsaker',
    veggo: false,
    link:
      'http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/',
  },
  {
    dish: 'Vegetarisk Chipotle Chilipizza',
    veggo: true,
    link: 'http://www.koket.se/vegetariska-chipotle-chilipizzor',
  },
  {
    dish: 'Baconlindad köttfärslimpa',
    veggo: false,
    link: 'http://mittkok.expressen.se/recept/baconlindad-kottfarslimpa/',
  },
  {
    dish: 'Thai kyckling med paprika',
    veggo: false,
    link: 'https://www.ica.se/recept/thai-kyckling-med-paprika-727563/',
  },
  {
    dish: 'Fisk-ish pinnar med currysmetana',
    veggo: true,
    link: 'https://www.ica.se/recept/fisk-ish-pinnar-med-currysmetana-727567/',
  },
  {
    dish: 'Rostade rotfrukter med salsa verde och vita bönor',
    veggo: true,
    link:
      'https://www.ica.se/recept/rostade-rotfrukter-med-salsa-verde-och-vita-bonor-727004/',
  },
  {
    dish: 'Västerbottensostpaj grundrecept',
    veggo: true,
    link: 'https://www.coop.se/recept/vasterbottensostpaj-grundrecept',
  },
  {
    dish: 'Tofubowl',
    veggo: true,
    link: 'https://www.coop.se/recept/tofubowl',
  },
  {
    dish: 'Bowl med couscous och stekt ägg',
    veggo: true,
    link: 'https://www.coop.se/recept/bowl-med-couscous-och-stekt-agg',
  },
  {
    dish: 'Potatissallad med basilika och pinjenötter',
    veggo: true,
    link:
      'https://www.coop.se/recept/potatissallad-med-basilika-och-pinjenotter',
  },
  {
    dish: 'Piroger med pesto',
    veggo: true,
    link: 'https://www.coop.se/recept/piroger-med-pesto',
  },
  {
    dish: 'Nudelsallad med japansk omelett och kokosdressing',
    veggo: true,
    link:
      'https://www.coop.se/recept/nudelsallad-med-japansk-omelett-och-kokosdressing',
  },
  {
    dish: 'Grönkålssoppa med potatis',
    veggo: true,
    link: 'https://www.coop.se/recept/gronkalssoppa-med-potatis',
  },
  {
    dish: 'Tomatsoppa med tunnbrödsrulle med hummus och paprika',
    veggo: false,
    link:
      'https://www.ica.se/recept/tomatsoppa-med-tunnbrodsrulle-med-hummus-och-paprika-726631/',
  },
  {
    dish: 'Wok med kyckling och pak choi',
    veggo: false,
    link: 'https://www.ica.se/recept/wok-med-kyckling-och-pak-choi-727653/',
  },
];
