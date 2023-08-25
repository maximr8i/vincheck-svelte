export default {
  ru: {
    mainPage: {
      search: {
        title: ['Проверьте ваш автомобиль по ', ' перед покупкой.'],
        subtitle: 'Мы сохраняем историю данных с аукционов США Copart и IAAI',
        placeholder: '"введите VIN состоящий из 17 символов"',
        button: 'Поиск'
      },
      services: {
        subtitle: 'Как это работает',
        title: 'Мы предоставляем',
        items: [
          { title: 'Большая база VIN номеров', text: 'Мы собираем базу с аукционов США' },
          { title: 'В любое время', text: 'Никаких ограничений по количеству проверок' },
          { title: 'Большая база фотографий авто', text: 'Проверьте начальное состояние вашего авто' }
        ]
      },
      advantage: {
        subtitle: 'Получите доступ к истории вашего авто',
        title: 'Если вы давно хотели купить авто из США',
        items: [
          { firstText: 'Стоит проверить его еще до осмотра', secondText: 'Кто знает по какой причине он был продан?' },
          { firstText: 'Получите данные о пробеге', secondText: 'Кто знает о настоящих цифрах?' },
          { firstText: 'Узнайте степень повреждения авто', secondText: 'Будьте готовы' },
          { firstText: 'Достаточно большая информация по авто', secondText: 'Собираем самое важное' }
        ]
      }
    },
    header: {
      title: 'Каталог'
    },
    catalogPage: {
      title: 'Каталог аукционных ',
      subtitle: 'автомобилей'
    },
    cardPage: {
      carDetail: {
        title: 'Описание автомобиля',
        year: 'Год выпуска',
        odometer: 'Пробег',
        engine: 'Двигатель',
        gearbox: 'Коробка передач',
        drive: 'Привод'
      },
      sellDetail: {
        title: 'Детали продажи автомобиля',
        auction: 'Дата аукциона',
        sale: 'Тип продажи',
        damage: 'Повреждения'
      }
    },
    error: {
      title: 'Ошибочка вышла. Вот ссылочка на ',
      subtitle: 'главную страницу ',
      subsubtitle: 'чтобы не теряться :-)'
    },
    errorText: {
      first: 'Упс, возможно в нашей базе нет вашего автомобиля',
      second: 'Упс, возможно вы допустили ошибку. Vin должен содержать 17 символов!'
    }
  },
  en: {
    mainPage: {
      search: {
        title: ['Check your car ', ' before buying.'],
        subtitle: 'We keep history data from Copart and IAAI US auctions',
        placeholder: '"enter VIN consisting of 17 characters"',
        button: 'Search'
      },
      services: {
        subtitle: 'How it works',
        title: 'We provide',
        items: [
          { title: 'Large database of VIN numbers', text: 'We collect the database from US auctions' },
          { title: 'Anytime', text: 'No limits on the number of checks' },
          { title: 'Large database of car photos', text: 'Check the initial state of your car' }
        ]
      },
      advantage: {
        subtitle: 'Get access to the history of your car',
        title: 'If you have long wanted to buy a car from the USA',
        items: [
          { firstText: "It's worth checking it out before checking it out.", secondText: 'Does anyone know why it was sold?' },
          { firstText: 'Get mileage data', secondText: 'Who knows about the real numbers?' },
          { firstText: 'Find out the extent of damage to the car', secondText: 'be ready' },
          { firstText: 'Quite a lot of information on the car', secondText: 'We collect the most important' }
        ]
      }
    },
    header: {
      title: 'Catalog'
    },
    catalogPage: {
      title: 'Auction catalog ',
      subtitle: 'cars'
    },
    cardPage: {
      carDetail: {
        title: 'Car Detail',
        year: 'Year of manufacture',
        odometer: 'Odometer',
        engine: 'Engine',
        gearbox: 'Gearbox',
        drive: 'Drive'
      },
      sellDetail: {
        title: 'Sell detail',
        auction: 'Auction date',
        sale: 'Sale type',
        damage: 'Damage'
      }
    },
    error: {
      title: 'The error came out. Here is a link ',
      subtitle: 'to the main page ',
      subsubtitle: "so you don't get lost :-)"
    },
    errorText: {
      first: 'Oops, maybe your car is not in our database',
      second: 'Oops, you may have made a mistake. Vin must contain 17 characters!'
    }
  }
}
