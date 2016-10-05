export const menuItems = [
  {
    title: 'Candidat',
    icon: 'ion-grid',
    component: 'GraphMilitant',
    selected: false,
    expanded: false,
    order: 20
  },
  {
    title: 'Militant',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  },
  
  {
    title: 'Questionnaire',
     icon: 'ion-compose',
    component: 'Sondage',
    selected: false,
    expanded: false,
    order: 100
  },
   {
    title: 'Liste electorale',
    icon: 'ion-grid',
    component: 'TableEnquete',
    selected: false,
    expanded: false,
    order: 150
  },
   //{
    //title: 'Carte',
    //icon: 'ion-grid',
    //component: 'Carto',
    //selected: false,
    //expanded: false,
    //order: 150
  //},
   {
    title: 'Elections',
    icon: 'ion-grid',
    component: 'Graph',
    selected: false,
    expanded: false,
    order: 150
  },
   
      {      title: 'Carte intéractive',
            url: 'http://election.pavillon30.com/map.html',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
      }
];
