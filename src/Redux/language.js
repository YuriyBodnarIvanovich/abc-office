const CHANGE_INDEX_OF_LANGUAGE = 'CHANGE_INDEX_OF_LANGUAGE';

const initialData = {
    indexOfLanguage: 0,
    menu:{
        ProductCatalog:[
          'Каталог товаров',
            'Product catalog',
        ],
        Benefits:[
            'Преимущества',
            'Benefits',
        ],
        DeliveryAndPayment:[
            'Доставка и Оплата',
            'Delivery and Payment',
        ],
        Contacts:[
            'Контакты',
            'Contacts',
        ],
        Download:[
            'Скачать прайс',
            'Download',
        ]
    },
    slide:{
        title:[
            'Офисные доски и флипчарты АВС Office',
            'ABC Office whiteboards and flip charts',
        ],
        slide_one:[
            'Особенные по многим причинам',
            'Special in many ways reasons',
        ],
        slide_two:[
            'Лучшее решение для демонстрации идей',
            'Best solution for showcasing ideas'
        ],
        toOrder:[
            'Заказать',
            'To order',
        ],
        WatchVideo:[
            'Смотреть видео',
            'Watch the video',
        ],
    },
    advertising:{
        title:[
            'Продуманность и надежность в каждой детали',
            'Thoughtfulness and reliability in every detail',
        ],

        block_one:{
            title:[
                'Прижимная планка на пружине',
                'Spring loaded clamping bar',
            ],
            second_title:[
                'Бумага никогда не упадет',
                'The paper will never fall',
            ],
        },
        block_two:{
            title:[
                'Поверхность рисования от Arcelor',
                'Drawing surface from Arcelor',
            ],
            second_title:[
                'Долговечность и устойчивость к повреждениям',
                'Durability and resistance to damage',
            ],
        },
        block_three:{
            title:[
                'Передвижные держатели для блокнотов',
                'Movable Notebook Holders',
            ],
            second_title:[
                'Любая бумага будет висеть ровно',
                'Any paper will hang straight',
            ],
        },
        block_four:{
            title:[
                'Полка на всю ширину',
                'Full width shelf',
            ],
            second_title:[
                'Все поместится',
                'Everything fits',
            ],
        },
        block_five:{
            title:[
                'Дополнительные "крылья" в модели Standard',
                'Additional "wings" in the Standard model',
            ],
            second_title:[
                'Когда много информации',
                'When there is a lot of information',
            ],
        },
        block_six:{
            title:[
                'Никаких пластиковых элементов в конструкции треноги',
                'No plastic parts in the tripod design',
            ],
            second_title:[
                'Чрезвычайная мощь и устойчивость',
                'Extreme strength and stability',
            ],
        },
        block_seven:{
            title:[
                'Надежное крепление в 4 углах',
                'Secure attachment in 4 corners',
            ],
            second_title:[
                'Не требуется разметка для монтажа',
                'No marking required for installation',
            ],
        },
        block_eight:{
            title:[
                'Передвижная и съемная полка',
                'Movable and removable shelf',
            ],
            second_title:[
                'Позволяет повесить доску вертикально или горизонтально',
                'Allows you to hang your board vertically or horizontally',
            ],
        },
    },
    noticeOne:[
        'Выберите свою новую доску ABC Office',
        'Choose your new ABC Office board',
    ],
    Products:{
        Slide:{
            title:[
                'Суперцена',
                'Super price',
            ],
            action:[
                'Акция! Альбом 64х90 см, 20 листов в подарок!',
                'Stock! Album 64x90 cm, 20 sheets for free!',
            ],
            description:{
                first:[
                    'Размеры поверхности 70 x 100 см',
                    'Surface dimensions 70 x 100 cm',
                ],
                second:[
                    'Держатель для альбомов с прижимной планкой на пружине',
                    'Album holder with spring clamping bar',
                ],
                third:[
                    'Передвижные крючки для альбомов',
                    'Sliding Album Hooks',
                ],
                fourth:[
                    'Рама S-line',
                    'S-line frame',
                ],
                fifth:[
                    'Устойчивые профилированные ноги',
                    'Stable profiled legs',
                ],
                sixth:[
                    'Поверхность от Arcelor (Германия)',
                    'Surface from Arcelor (Germany)',
                ],
            },
        },
        Training:{
            title:[
                'Хит продаж',
                'Bestseller',
            ],
            action:[
                'Акция! Альбом 64х90 см, 20 листов в подарок!',
                'Stock! Album 64x90 cm, 20 sheets for free!',
            ],
            description:{
                first:[
                    'Размеры поверхности 70 x 100 см',
                    'Surface dimensions 70 x 100 cm',
                ],
                second:[
                    'Держатель для альбомов с прижимной планкой на пружине',
                    'Album holder with spring clamping bar',
                ],
                third:[
                    'Передвижные крючки для альбомов',
                    'Sliding Album Hooks',
                ],
                fourth:[
                    'Два дополнительных «крыла» для отдельных листов',
                    'Two additional "wings" for single sheets',
                ],
                fifth:[
                    'Устойчивые профилированные ноги',
                    'Stable profiled legs',
                ],
                sixth:[
                    'Рама S-line',
                    'S-line frame',
                ],
                seventh:[
                    'Поверхность от Arcelor (Германия)',
                    'Surface from Arcelor (Germany)',
                ],
            },
        },
        Standard:{
            title:[
                '',
                '',
            ],
            action:[
                'Акция! Альбом 64х90 см, 20 листов в подарок!',
                'Stock! Album 64x90 cm, 20 sheets for free!',
            ],
            description:{
                first:[
                    'Размеры поверхности 70 x 100 см',
                    'Surface dimensions 70 x 100 cm',
                ],
                second:[
                    'Устойчивые профилированные ноги',
                    'Stable profiled legs',
                ],
                third:[
                    'Стальная рама',
                    'Steel frame',
                ],
                fourth:[
                    'Поверхность от Arcelor (Германия)',
                    'Surface from Arcelor (Germany)',
                ],
                fifth:[
                    '',
                    '',
                ],
                sixth:[
                    '',
                    '',
                ],
            },
        },
        Mobile:{
            title:[
                '',
                '',
            ],
            action:[
                'Акция! Альбом 64х90 см, 20 листов в подарок!',
                'Stock! Album 64x90 cm, 20 sheets for free!',
            ],
            description:{
                first:[
                    'Размеры поверхности 70 x 100 см',
                    'Surface dimensions 70 x 100 cm',
                ],
                second:[
                    'Регулировка наклона поверхности',
                    'Surface slope adjustment',
                ],
                third:[
                    'Держатель для альбомов с прижимной планкой на пружине',
                    'Album holder with spring clamping bar',
                ],
                fourth:[
                    'Передвижные крючки для альбомов',
                    'Sliding Album Hooks',
                ],
                fifth:[
                    'Устойчиая опора имеет три колеса с тормозом',
                    'The stable support has three wheels with brake',
                ],
                sixth:[
                    'Рама S-line',
                    'S-line frame',
                ],
                seventh:[
                    'Поверхность от Arcelor (Германия)',
                    'Surface from Arcelor (Germany)',
                ],
            },
        },
        Double:{
            title:[
                '',
                '',
            ],
            action:[
                'Акция! Альбом 64х90 см, 20 листов в подарок!',
                'Stock! Album 64x90 cm, 20 sheets for free!',
            ],
            description:{
                first:[
                    'Размеры поверхности 100 x 150 см',
                    'Surface dimensions 100 x 150 cm',
                ],
                second:[
                    'Устойчивые профилированные четыри ноги',
                    'Stable, profiled four legs',
                ],
                third:[
                    'Передвижные крючки для альбомов',
                    'Sliding Album Hooks',
                ],
                fourth:[
                    'Рама S-line',
                    'S-line frame',
                ],
                fifth:[
                    'Поверхность от Arcelor (Германия)',
                    'Surface from Arcelor (Germany)',
                ],
                sixth:[
                    '',
                    '',
                ],
            },
        },

        product:{
            clickToPhoto:[
                'Нажмите на изображение для увеличени',
                'Click image for a larger view',
            ],
            ViewMore:[
                'Смотреть больше',
                'View more',
            ],
            order:[
                'Заказать',
                'To order',
            ]
        }
    },
    secondNotice:{
        firstNotice:{
            title:[
                'Покупая свою новою доску не забудьте о аксесуарах',
                'Don\'t forget about accessories when buying your new board',
            ],
            secondTitle:[
                'Аксесуары можна выбрать и заказать  дополнительно при подтверждении заказа',
                'Accessories can be selected and ordered additionally upon order confirmation',
            ]
        },
        secondNotice:{
            title:[
                'Доставка',
                'Delivery',
            ],
            address:[
                'Адресная доставка по Украине',
                'Address delivery across Ukraine',
            ],
            timeWork:[
                'Пн - Пт: с 9:00 до 14:00',
                'Mon - Fri: 09:00 to 14:00',
            ],
            DeliveryTime:{
                title:[
                    'Срок поставки:',
                    'Delivery time:',
                ],
                time:[
                    'Склад перевозчика - от 1 до 3 рабочих дней',
                    'Carrier\'s warehouse - from 1 to 3 working days',
                ],
                toDoor:[
                    'К двери - от 2 до 5 рабочих дней.',
                    'To the door - from 2 to 5 working days.',
                ],
            },
            newPost:[
                'Нова Пошта - из отделения, курьер Новая почта',
                'Nova Poshta - from the branch, courier Nova Poshta',
            ],
            getByYourSelf:{
                firstWord:[
                    'Самовывоз -',
                    'Pickup -',
                ],
                second:[
                    ' г. Киев, ул. Светлицкого 35, оф. 510',
                    '  Kyiv, st. Svetlitskogo 35, of. 510',
                ]
            },
        },
        thirdNotice:{
            title:[
                'Оплата',
                'Payment',
            ],
            firstTitle:{
                title:[
                    'Безналичный расчет',
                    'Non-cash payment',
                ],
                secondTitle:[
                    'Товар отгружается после поступления денег на расчетный счет.',
                    'The goods are shipped after the receipt of money on the current account.',
                ]
            },
            secondTitle:{
                title:[
                    'Наличный расчет',
                    'Cash payment',
                ],
                secondTitle:[
                    'Оплачиваете товар при получении на основании расходной накладной.',
                    'You pay for the goods upon receipt on the basis of the invoice.',
                ]
            },
            thirdTitle:{
                title:[
                    'Наложенным платежом ',
                    'Cash on delivery',
                ],
                secondTitle:[
                    'При доставке по Украине оплата производится наложенным платежом при получении товара у фирмы-перевозчика.',
                    'When delivered in Ukraine, payment is made by cash on delivery upon receipt of the goods from the carrier.',
                ]
            },
        }
    },
    footer:{
        DownloadPrice:{
            mainTitle:[
                'Актуальный прайс-лист',
                'Current price list',
            ],
            firstTitle:[
                ' Вы можете скачать прайс на весь ассортимент продукции ABC Office',
                ' You can download the price for the entire range of ABC Office products',
            ],
            button:[
                'Скачать прайс',
                'Download',
            ],
        },
    },
    modalProduct:{
        title:[
            'Заполните данные:',
            'Fill in the data:',
        ],
        name:[
            'Имя',
            'Name',
        ],
        number:[
            'Номер',
            'Number',
        ],
        submit:[
            'Подтвердить',
            'Confirm',
        ],
        err_name:[
            'Введите Ваше имя',
            'Enter your name',
        ],
        err_number:[
            'Введите Ваш номер',
            'Enter your number',
        ],
    },
    showSubmit:{
        title:[
            'Спасибо, Ваш заказ принят',
            'Thank you, your order has been accepted',
        ],
        secondTitle:[
            'Ожидайте сообщение в мессенджере, мы свяжемся с Вами в ближайшее время',
            'Wait for a message in the messenger, we will contact you soon',
        ]
    }
};


const LanguageReducer = (state = initialData,action) =>{
    switch (action.type){
        case CHANGE_INDEX_OF_LANGUAGE:{
            return {
                ...state,
                indexOfLanguage: action.index
            }
        }
        default:
            return state;
        }
    }


export default LanguageReducer;
