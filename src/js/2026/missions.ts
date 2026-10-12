import type { Year } from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2026,
    slug: 'bioglow',
    title: 'BIOGLOW',
    hashtag: '#BIOGLOW',
    logo: '2026/logo.png',
    field: '2026/field.jpg',
    colors: {
      main: '#c6de94',
      missions: '#70a334',
      scoring: '#22d8c2',
      penalties: '#000',
      main_text: '#1a1a1a',
      scoring_text: '#1a1a1a',
      main_accent: '#2c5535',
    },
    no_equipment_constraint_icon: '2026/equipment-constraint.svg',
  },
  warnings: {
    m01_bonus_requirement_not_met: {
      mission: 1,
      en: 'The drone must be off the mat to score the bonus on mission 1',
      fr: 'Le drone doit ne plus toucher le tapis pour marquer le bonus de la mission 1',
    },
    m02_max_3_seeds: {
      mission: 2,
      en: 'A maximum of 3 seeds can score on mission 2',
      fr: 'Un maximum de 3 graines peut marquer des points à la mission 2',
    },
    m03_bonus_requirement_not_met: {
      mission: 3,
      en: 'The research flag must be down to score the bonus on mission 3',
      fr: 'Le drapeau de recherche doit être abaissé pour marquer le bonus de la mission 3',
    },
    m04_bonus_requirement_not_met: {
      mission: 4,
      en: 'The first leaf must be removed to score the bonus on mission 4',
      fr: 'La première feuille doit être retirée pour marquer le bonus de la mission 4',
    },
    m06_max_4_fragments: {
      mission: 6,
      en: 'A maximum of 4 leaf fragments can score on mission 6',
      fr: 'Un maximum de 4 fragments de feuille peut marquer des points à la mission 6',
    },
    m07_bonus_requirement_not_met: {
      mission: 7,
      en: 'The mycelium must be completely extended to score the bonuses on mission 7',
      fr: 'Le mycélium doit être complètement étendu pour marquer les bonus de la mission 7',
    },
    m14_max_3_seeds: {
      mission: 14,
      en: 'A maximum of 3 seeds can score on mission 14',
      fr: 'Un maximum de 3 graines peut marquer des points à la mission 14',
    },
    m14_bonus_requirement_not_met: {
      mission: 14,
      en: 'Seeds touching the mat must also be contained within the replantation station on mission 14',
      fr: 'Les graines touchant le tapis doivent aussi être contenues dans la station de replantation à la mission 14',
    },
    m15_bonus_requirement_not_met: {
      mission: 15,
      en: 'The environmental bonus requires the matching feature of the model to be completed on mission 15',
      fr: 'Le bonus environnemental exige que l\'élément correspondant du modèle soit réalisé à la mission 15',
    },
  },
  missions: [
    {
      number: 0,
      title: {
        en: 'Equipment Inspection',
        fr: 'Inspection de l\'équipement',
      },
      position: {
        top: 68,
        left: 17,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your robot and all your equipment fit completely in one launch area and are under a height limit of 12 inches (305 mm)',
                fr: 'Votre robot et tout votre équipement tiennent complètement dans une seule zone de lancement et leur hauteur est inférieure à la limite de 305 mm',
              },
              handle: 'm00_small_inspection_area',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m00.png',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'During the pre-match inspection.',
          fr: 'Au cours de l\'inspection d\'avant-match.',
        },
      ],
    },
    {
      number: 1,
      title: {
        en: 'Drone Survey',
        fr: 'Relevé par drone',
      },
      position: {
        top: 89,
        left: 46,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Drone is no longer touching the mat',
                fr: 'Le drone ne touche plus le tapis',
              },
              handle: 'm01_drone',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m01.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the LiDAR map is completely flipped over, with the scan marker at least partly in the survey area',
                fr: 'Bonus: et la carte LiDAR est complètement retournée, avec le marqueur de balayage au moins en partie dans la zone de relevé',
              },
              handle: 'm01_lidar',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 2,
      title: {
        en: 'Exploding Seeds',
        fr: 'Graines explosives',
      },
      position: {
        top: 53,
        left: 36,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Seeds are no longer touching the stalk',
                fr: 'Les graines ne touchent plus la tige',
              },
              handle: 'm02_seeds',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2026/m02.png',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 3,
      title: {
        en: 'Flip the Rock',
        fr: 'Retourner le rocher',
      },
      position: {
        top: 42,
        left: 15,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The research flag is down',
                fr: 'Le drapeau de recherche est abaissé',
              },
              handle: 'm03_flag',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m03.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the rock has been returned to its original starting position',
                fr: 'Bonus: et le rocher a été remis dans sa position de départ d\'origine',
              },
              handle: 'm03_rock',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 4,
      title: {
        en: 'Lucky Leaves',
        fr: 'Feuilles porte-bonheur',
      },
      position: {
        top: 19,
        left: 18,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'One leaf is completely removed, no longer touching the nest',
                fr: 'Une feuille est complètement retirée et ne touche plus le nid',
              },
              handle: 'm04_leaf',
              type: 'boolean',
              points: 10,
              images: [
                '2026/m04.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the second leaf is completely removed, no longer touching the nest, with the katydid in its original starting position',
                fr: 'Bonus: et la deuxième feuille est complètement retirée, ne touche plus le nid, avec la sauterelle dans sa position de départ d\'origine',
              },
              handle: 'm04_second_leaf',
              type: 'boolean',
              points: 20,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'If the katydid is completely removed from the nest at any time, the bonus is no longer available. If the katydid is outside the leaf habitat at the end of the match, even partly, the team scores zero points for this mission. The leaf habitat includes the nest and the marked area on the mat surrounding it.',
          fr: 'Si la sauterelle est complètement retirée du nid à un moment quelconque, le bonus n\'est plus disponible. Si la sauterelle est à l\'extérieur de l\'habitat des feuilles à la fin du match, même en partie, l\'équipe marque zéro point pour cette mission. L\'habitat des feuilles comprend le nid et la zone marquée sur le tapis qui l\'entoure.',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 5,
      title: {
        en: 'Reaching Roots',
        fr: 'Racines qui s\'étendent',
      },
      position: {
        top: 13,
        left: 27,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The plant root is partially extended',
                fr: 'La racine de la plante est partiellement étendue',
              },
              handle: 'm05_partial',
              type: 'boolean',
              points: 10,
              images: [
                '2026/m05.png',
              ],
            },
            {
              title: {
                en: 'The plant root is completely extended',
                fr: 'La racine de la plante est complètement étendue',
              },
              handle: 'm05_complete',
              type: 'boolean',
              points: 20,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Only one scoring condition is possible for this mission.',
          fr: 'Une seule condition de pointage est possible pour cette mission.',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 6,
      title: {
        en: 'Leafcutter Frenzy',
        fr: 'Frénésie des fourmis coupeuses de feuilles',
      },
      position: {
        top: 13,
        left: 70,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The ant is touching the nest, and the leaf fragments are contained within the nest',
                fr: 'La fourmi touche le nid et les fragments de feuille sont contenus dans le nid',
              },
              handle: 'm06_fragments',
              type: 'number',
              max: 4,
              points: 10,
              images: [
                '2026/m06.png',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 7,
      title: {
        en: 'Humongous Fungus',
        fr: 'Champignon gigantesque',
      },
      position: {
        top: 13,
        left: 75,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The mycelium is completely extended',
                fr: 'Le mycélium est complètement étendu',
              },
              handle: 'm07_mycelium',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m07.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and a connection is formed between one team\'s extended mycelium and the opposing team\'s fully extended plant root',
                fr: 'Bonus: et une connexion est formée entre le mycélium étendu d\'une équipe et la racine de plante complètement étendue de l\'équipe adverse',
              },
              handle: 'm07_connections',
              type: 'number',
              max: 2,
              points: 10,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Two bonuses are possible: if each team\'s mycelium and plant root are fully extended, both teams earn the bonus. The mycelium and plant root do not need to touch to form a connection. It is not possible to earn the bonus in remote competitions or if there is no opposing team.',
          fr: 'Deux bonus sont possibles: si le mycélium et la racine de plante de chaque équipe sont complètement étendus, les deux équipes gagnent le bonus. Le mycélium et la racine de plante n\'ont pas besoin de se toucher pour former une connexion. Il n\'est pas possible de gagner le bonus dans les compétitions à distance ou s\'il n\'y a pas d\'équipe adverse.',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 8,
      title: {
        en: 'Tangled',
        fr: 'Enchevêtrement',
      },
      position: {
        top: 13,
        left: 33,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The vine is touching the mat',
                fr: 'La liane touche le tapis',
              },
              handle: 'm08_vine',
              type: 'boolean',
              points: 30,
              images: [
                '2026/m08.png',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 9,
      title: {
        en: 'Research Platform',
        fr: 'Plateforme de recherche',
      },
      position: {
        top: 13,
        left: 37,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The research platform is raised',
                fr: 'La plateforme de recherche est relevée',
              },
              handle: 'm09_platform',
              type: 'boolean',
              points: 10,
              images: [
                '2026/m09.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The camera trap is deployed',
                fr: 'Le piège photographique est déployé',
              },
              handle: 'm09_camera',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The seed is no longer touching the tree',
                fr: 'La graine ne touche plus l\'arbre',
              },
              handle: 'm09_seed',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 10,
      title: {
        en: 'Fragile Microhabitats',
        fr: 'Microhabitats fragiles',
      },
      position: {
        top: 36,
        left: 54,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The spider habitat is in its original starting position',
                fr: 'L\'habitat de l\'araignée est dans sa position de départ d\'origine',
              },
              handle: 'm10_spider',
              type: 'boolean',
              points: 10,
              images: [
                '2026/m10.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The snail habitat is in its original starting position',
                fr: 'L\'habitat de l\'escargot est dans sa position de départ d\'origine',
              },
              handle: 'm10_snail',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 11,
      title: {
        en: 'Window to the Past',
        fr: 'Fenêtre sur le passé',
      },
      position: {
        top: 49,
        left: 65,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The root cover is down, touching the mat',
                fr: 'Le couvercle de racines est abaissé et touche le tapis',
              },
              handle: 'm11_root_cover',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m11.png',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 12,
      title: {
        en: 'Forest Elder',
        fr: 'Ancien de la forêt',
      },
      position: {
        top: 36,
        left: 85,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The cane is completely raised, touching the tree',
                fr: 'La canne est complètement relevée et touche l\'arbre',
              },
              handle: 'm12_cane',
              type: 'boolean',
              points: 20,
              images: [
                '2026/m12.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The support tie is around the post',
                fr: 'L\'attache de soutien est autour du poteau',
              },
              handle: 'm12_tie',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 13,
      title: {
        en: 'Keystone Species',
        fr: 'Espèce clé de voûte',
      },
      position: {
        top: 15,
        left: 85,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Your team\'s keystone species is on the restoration platform, and the young trees are raised',
                fr: 'L\'espèce clé de voûte de votre équipe est sur la plateforme de restauration et les jeunes arbres sont relevés',
              },
              handle: 'm13_keystone',
              type: 'boolean',
              points: 30,
              images: [
                '2026/m13.png',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Your keystone species model is built from the bricks in bag 20. It counts as equipment and is included in the pre-match inspection.',
          fr: 'Votre modèle d\'espèce clé de voûte est construit avec les briques du sac 20. Il compte comme équipement et est inclus dans l\'inspection d\'avant-match.',
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 14,
      title: {
        en: 'Seeds of Renewal',
        fr: 'Graines du renouveau',
      },
      position: {
        top: 46,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Seeds are contained within the replantation station',
                fr: 'Les graines sont contenues dans la station de replantation',
              },
              handle: 'm14_seeds',
              type: 'number',
              max: 3,
              points: 5,
              images: [
                '2026/m14.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and are touching the mat',
                fr: 'Bonus: et touchent le tapis',
              },
              handle: 'm14_seeds_on_mat',
              type: 'number',
              max: 3,
              points: 5,
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 15,
      title: {
        en: 'Biocentric Architecture',
        fr: 'Architecture biocentrique',
      },
      position: {
        top: 88,
        left: 61,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'The nesting canopy is raised',
                fr: 'La canopée de nidification est relevée',
              },
              handle: 'm15_canopy',
              type: 'boolean',
              points: 10,
              images: [
                '2026/m15.png',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The garden skylight is completely in',
                fr: 'La lucarne de jardin est complètement enfoncée',
              },
              handle: 'm15_skylight',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'The compost hatch is completely opened, touching the mat',
                fr: 'La trappe à compost est complètement ouverte et touche le tapis',
              },
              handle: 'm15_hatch',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Environmental Bonus: the model is on the mine dock and the nesting canopy is completed',
                fr: 'Bonus environnemental: le modèle est sur le quai de la mine et la canopée de nidification est réalisée',
              },
              handle: 'm15_bonus_mine',
              type: 'boolean',
              points: 10,
              images: [],
            },
            {
              title: {
                en: 'Environmental Bonus: the model is on the city dock and the garden skylight is completed',
                fr: 'Bonus environnemental: le modèle est sur le quai de la ville et la lucarne de jardin est réalisée',
              },
              handle: 'm15_bonus_city',
              type: 'boolean',
              points: 10,
              images: [],
            },
            {
              title: {
                en: 'Environmental Bonus: the model is on the farm dock and the compost hatch is completed',
                fr: 'Bonus environnemental: le modèle est sur le quai de la ferme et la trappe à compost est réalisée',
              },
              handle: 'm15_bonus_farm',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Only one environmental bonus is possible. The model can be placed on any of the three interchangeable docks.',
          fr: 'Un seul bonus environnemental est possible. Le modèle peut être placé sur l\'un des trois quais interchangeables.',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 16,
      title: {
        en: 'Precision Tokens',
        fr: 'Jetons de précision',
      },
      position: {
        top: 85,
        left: 93,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Precision Tokens left',
                fr: 'Jetons de précision restants',
              },
              handle: 'm16_precision_tokens',
              type: 'number',
              max: 6,
              points_list: [
                10,
                15,
                25,
                35,
                50,
                50,
              ],
              images: [
                '2026/precision.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'You can lose one precision token without it affecting your score.',
          fr: 'Vous pouvez perdre un jeton de précision sans que cela nuise à votre score.',
        },
      ],
    },
    {
      number: 'GP',
      title: {
        en: 'Gracious Professionalism®',
        fr: 'Gracious Professionalism',
      },
      position: {
        top: 85,
        left: 93,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Gracious Professionalism® displayed at the robot game table',
                fr: 'Gracious Professionalism® displayed at the robot game table',
              },
              handle: 'm17_gracious_professionalism',
              type: 'number',
              max: 4,
              min: 2,
              points: 0,
              labels: [
                '',
                '2 Developing',
                '3 Accomplished',
                '4 Exceeds',
              ],
              images: [],
            },
          ],
        },
      ],
    },
  ],
};

export {data};
