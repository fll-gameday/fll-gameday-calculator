import type { Year } from '../interfaces/ChallengeYear';

const data: Year = {
  meta: {
    year: 2025,
    slug: 'unearthed',
    title: 'UNEARTHED',
    hashtag: '#UNEARTHED',
    logo: '2025/logo.png',
    field: '2025/field.jpg',
    colors: {
      main: '#e5ae32',
      missions: '#ef4b2d',
      scoring: '#598382',
      penalties: '#000',
    },
    no_equipment_constraint_icon: '2025/equipment-constraint.svg',
  },
  warnings: {
    m01_bonus_requirement_not_met: {
      mission: 1,
      en: 'Both options must be selected to score the bonus on mission 1',
      fr: 'Les 2 options doivent être sélectionnées pour marquer le bonus de la mission 1',
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
        top: 71,
        left: 24,
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
                '2025/m00.png',
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
        en: 'Surface Brushing',
        fr: 'Brossage de surface',
      },
      position: {
        top: 52,
        left: 14,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Soil deposits are completely cleared, touching the mat',
                fr: 'Les dépôts de sol sont complètement nettoyés, en contact avec le tapis',
              },
              handle: 'm01_soil',
              type: 'number',
              max: 2,
              points: 10,
              images: [
                '2025/m01.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Archaeologist\'s brush is not touching the dig site',
                fr: 'La brosse de l\'archéologue ne touche pas le site de fouille',
              },
              handle: 'm01_brush',
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
        en: 'Map Reveal',
        fr: 'Révélation de la carte',
      },
      position: {
        top: 20,
        left: 19,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Topsoil sections are completely cleared',
                fr: 'Les sections de terre arable sont complètement nettoyées',
              },
              handle: 'm02_cleared',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m02.jpg',
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
        en: 'Mineshaft Explorer',
        fr: 'Explorateur de puits de mine',
      },
      position: {
        top: 21,
        left: 35,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Team\'s minecart is on the opposing team\'s field.',
                fr: 'Le chariot de mine de l\'équipe est sur le terrain de l\'équipe adverse.',
              },
              handle: 'm03_cart',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m03.jpg',
              ],
            },
            {
              title: {
                en: 'Bonus: and the opposing team\'s minecart is on this team\'s field',
                fr: 'Bonus: et le chariot de mine de l\'équipe adverse est sur le terrain de votre équipe',
              },
              handle: 'm03_opposing_cart',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'The team\'s minecart must pass completely through the mineshaft entry to score points for this mission. It is not possible to earn the bonus if there is no opposing team or in remote competitions.',
          fr: 'Le chariot de mine de l\'équipe doit passer complètement par l\'entrée du puits de mine pour marquer des points pour cette mission. Il n\'est pas possible de gagner le bonus s\'il n\'y a pas d\'équipe adverse ou dans les compétitions à distance.',
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 4,
      title: {
        en: 'Careful Recovery',
        fr: 'Récupération minutieuse',
      },
      position: {
        top: 40,
        left: 14,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Precious artifact is not touching the mine',
                fr: 'L\'artefact précieux ne touche pas la mine',
              },
              handle: 'm04_artifact',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m04.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Both support structures are standing',
                fr: 'Les deux structures de support sont debout',
              },
              handle: 'm04_supports',
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
      number: 5,
      title: {
        en: 'Who Lived Here?',
        fr: 'Qui vivait ici?',
      },
      position: {
        top: 49,
        left: 50,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Structure floor is completely upright',
                fr: 'Le plancher de la structure est complètement droit',
              },
              handle: 'm05_upright',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m05.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 6,
      title: {
        en: 'Forge',
        fr: 'Fonderie',
      },
      position: {
        top: 41,
        left: 39,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Ore blocks are not touching the forge',
                fr: 'Les blocs de minerai ne touchent pas la fonderie',
              },
              handle: 'm06_blocks',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m06.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Technicians may open ore blocks by hand to reveal the fossilized artifact when completely in home (see Mission 14)',
          fr: 'Les techniciens peuvent ouvrir les blocs de minerai à la main pour révéler l\'artefact fossile lorsqu\'ils sont complètement à la maison (voir Mission 14)',
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 7,
      title: {
        en: 'Heavy Lifting',
        fr: 'Levage lourd',
      },
      position: {
        top: 54,
        left: 37,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Millstone is no longer touching its base',
                fr: 'La meule ne touche plus sa base',
              },
              handle: 'm07_millstone',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m07.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: false,
    },
    {
      number: 8,
      title: {
        en: 'Silo',
        fr: 'Silo',
      },
      position: {
        top: 78,
        left: 58,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Preserved pieces are outside the silo',
                fr: 'Les pièces préservées sont en dehors du silo',
              },
              handle: 'm08_pieces',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m08.jpg',
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
        en: 'What\'s on Sale?',
        fr: 'Rencontre inattendue',
      },
      position: {
        top: 60,
        left: 60,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Roof is completely raised',
                fr: 'Le toit est complètement relevé',
              },
              handle: 'm09_roof',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m09.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Market wares are raised',
                fr: 'Les marchandises du marché sont levées',
              },
              handle: 'm09_wares',
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
        en: 'Tip the Scales',
        fr: 'Faire pencher la balance',
      },
      position: {
        top: 19,
        left: 55,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Scale is tipped and touching the mat',
                fr: 'La balance est penchée et touche le tapis',
              },
              handle: 'm10_tipped',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m10.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Scale pan is completely removed',
                fr: 'Le plateau de la balance est complètement retiré',
              },
              handle: 'm10_removed',
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
      number: 11,
      title: {
        en: 'Angler Artifacts',
        fr: 'Artefacts de la pêche à la ligne',
      },
      position: {
        top: 25,
        left: 68,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Artifacts are raised above the ground layer',
                fr: 'Artefacts révélés au-dessus de la couche de sol',
              },
              handle: 'm11_raised',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m11.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Bonus: and the crane flag is at least partly lowered.',
                fr: 'Bonus: et le drapeau de la grue est au moins partiellement abaissé.',
              },
              handle: 'm11_flag',
              points: 10,
              type: 'boolean',
              images: [],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 12,
      title: {
        en: 'Salvage Operation',
        fr: 'Opération de sauvetage',
      },
      position: {
        top: 20,
        left: 85,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Sand is completely cleared',
                fr: 'Le sable est complètement dégagé',
              },
              handle: 'm12_sand',
              type: 'boolean',
              points: 20,
              images: [
                '2025/m12.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Ship is completely raised',
                fr: 'Le navire est complètement soulevé',
              },
              handle: 'm12_ship',
              type: 'boolean',
              points: 10,
              images: [],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Sand is considered completely cleared when the pull activator is past the line on the mat',
          fr: 'Le sable est considéré comme complètement dégagé lorsque l\'activateur de traction dépasse la ligne sur le tapis',
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 13,
      title: {
        en: 'Statue Rebuild',
        fr: 'Reconstruction de la statue',
      },
      position: {
        top: 48,
        left: 81,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Statue is completely raised',
                fr: 'La statue est complètement reconstruite',
              },
              handle: 'm13_statue',
              type: 'boolean',
              points: 30,
              images: [
                '2025/m13.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 14,
      title: {
        en: 'Forum',
        fr: 'Forum',
      },
      position: {
        top: 22,
        left: 47,
      },
      description: {
        en: 'Artifacts are touching the mat and at least partly in the forum',
        fr: 'Les artefacts touchent le tapis et sont au moins en partie dans le forum',
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Brush',
                fr: 'Brosse',
              },
              handle: 'm14_brush',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_brush.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Opposing Team\'s Minecart',
                fr: 'Chariot de mine de l\'équipe adverse',
              },
              handle: 'm14_minecart',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_minecart.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Scale Pan',
                fr: 'Plateau de balance',
              },
              handle: 'm14_scale_pan',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_scale_pan.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Topsoil',
                fr: 'Terreau',
              },
              handle: 'm14_topsoil',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_topsoil.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Precious Artifact',
                fr: 'Artefact précieux',
              },
              handle: 'm14_artifact',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_artifact.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Ore with Fossilized Artifact',
                fr: 'Minerai avec artefact fossile',
              },
              handle: 'm14_ore',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m14_ore.jpg',
              ],
            },
          ],
        },
        {
          options: [
            {
              title: {
                en: 'Millstone',
                fr: 'Meule',
              },
              handle: 'm14_millstone',
              type: 'boolean',
              points: 5,
              images: [
                '2025/m07.jpg',
              ],
            },
          ],
        },
      ],
      no_equipment_constraint: true,
    },
    {
      number: 15,
      title: {
        en: 'Site Marking',
        fr: 'Marquage du site',
      },
      description: {
        en: 'Any of the following are at least partly in the research vessel\'s cargo area',
        fr: 'L\'un des éléments suivants se trouve au moins en partie dans la zone de cargaison du navire de recherche',
      },
      position: {
        top: 82,
        left: 35,
      },
      tasks: [
        {
          options: [
            {
              title: {
                en: 'Sites with a flag at least partly inside and touching the mat',
                fr: 'Sites avec un drapeau au moins en partie à l\'intérieur et touchant le tapis',
              },
              handle: 'm15_flags',
              type: 'number',
              max: 3,
              points: 10,
              images: [
                '2025/m15.jpg',
              ],
            },
          ],
        },
      ],
      constraints: [
        {
          en: 'Sites are outlined on the mat wireframe',
          fr: 'Sites sont délimités sur le filaire du tapis',
        }
      ],
      no_equipment_constraint: false,
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
                '2025/precision.jpg',
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
