import {AbstractScorer, MissionObject, Year} from './interfaces/ChallengeYear';

const texts = {
  locales: {
    en: 'English',
    fr: 'Français',
  },
  strings: {
    prev: {
      en: 'Previous',
      fr: 'Précédent',
    },
    next: {
      en: 'Next',
      fr: 'Suivant',
    },
    close: {
      en: 'Close',
      fr: 'Fermer',
    },
    launch_wizard: {
      en: 'Launch Wizard',
      fr: 'Lancer l\'assistant',
    },
    about: {
      en: 'The FLL Gameday calculator is an unofficial Robot Game calculator for the FIRST LEGO League',
      fr: 'Le Scoreboard Robots-JU est un tableau de score non officiel pour le Robot-Game de la FIRST LEGO League #IntoOrbit',
    },
    reset: {
      en: 'Reset Score',
      fr: 'Remettre à zéro',
    },
    yes: {
      en: 'Yes',
      fr: 'Oui',
    },
    grid_mode: {
      en: 'Switch to list mode',
      fr: 'Passer en mode liste',
    },
    map_mode: {
      en: 'Switch to field mode',
      fr: 'Passer en mode tapis',
    },
    unknown_warning: {
      en: 'The calculator returned an unknown warning: %warning%',
      fr: 'Le calculateur a retourné un avertissement non géré: %warning%',
    },
  },
};

interface YearLink {
  scorer: AbstractScorer<MissionObject, any>
  data: Year
}

const years: YearLink[] = [
  {
    scorer: new (require('./2023/scorer').FllScorer),
    data: require('./2023/missions').data,
  },
  {
    scorer: new (require('./2022/scorer').FllScorer),
    data: require('./2022/missions').data,
  },
  {
    scorer: new (require('./2021/scorer').FllScorer),
    data: require('./2021/missions').data,
  },
  {
    scorer: new (require('./2020/scorer').FllScorer),
    data: require('./2020/missions').data,
  },
  {
    scorer: new (require('./2019/scorer').FllScorer),
    data: require('./2019/missions').data,
  },
  {
    scorer: new (require('./2018/scorer').FllScorer),
    data: require('./2018/missions').data,
  },
  {
    scorer: new (require('./2017/scorer').FllScorer),
    data: require('./2017/missions').data,
  },
  {
    scorer: new (require('./2016/scorer').FllScorer),
    data: require('./2016/missions').data,
  },
];

export {
  texts,
  years,
};
