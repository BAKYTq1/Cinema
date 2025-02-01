export const Cinema = [
    {   id:1,
        name: 'Интерстеллар',
        rating: 8.6,
        duration: 169,
        genre: 'фантастика, драма, приключения',
        director: 'Кристофер Нолан',
        year: 2014,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/b/bc/Interstellar_2014.jpg',
        trailer: 'https://www.youtube.com/watch?v=2LqzF5WauAw',
        fullMovie: 'https://example.com/full/interstellar',
        info: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису...",
        cast: [
            { name: 'Мэттью МакКонахи', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Matthew_McConaughey_2019.jpg' },
            { name: 'Энн Хэтэуэй', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Anne_Hathaway_at_MIFF_%28cropped%29.jpg' },
            { name: 'Джессика Честейн', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Jessica_Chastain_Cannes_2017_%28cropped%29.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/interstellar1.jpg',
            'https://example.com/trailer/interstellar2.jpg',
            'https://example.com/trailer/interstellar3.jpg'
        ]
    },
    {
        id:2,
        name: 'Джон Уик',
        rating: 7.4,
        duration: 101,
        genre: 'боевик, триллер, криминал',
        director: 'Чад Стахелски',
        year: 2014,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/3/3b/John_Wick_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=C0BMx-qxsP4',
        fullMovie: 'https://example.com/full/johnwick',
        info: "Бывший наемный убийца Джон Уик выходит из отставки, чтобы отомстить за убийство своей собаки...",
        cast: [
            { name: 'Киану Ривз', photo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Keanu_Reeves_2014.jpg' },
            { name: 'Уиллем Дефо', photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Willem_Dafoe_Cannes_2014.jpg' },
            { name: 'Альфи Аллен', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Alfie_Allen_%282019%29.jpg' },
            { name: 'Иэн МакШейн', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Ian_McShane_%282019%29.jpg' },
            { name: 'Лэнс Реддик', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Lance_Reddick_by_Gage_Skidmore.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/johnwick1.jpg',
            'https://example.com/trailer/johnwick2.jpg',
            'https://example.com/trailer/johnwick3.jpg'
        ]
    },
    {
        name: 'Оппенгеймер',
        rating: 8.5,
        duration: 180,
        genre: 'драма, биография, исторический',
        director: 'Кристофер Нолан',
        year: 2023,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/c/c4/Oppenheimer_poster_2023.jpg',
        trailer: 'https://www.youtube.com/watch?v=bK6ldnjE3Y0',
        fullMovie: 'https://example.com/full/oppenheimer',
        info: "История американского физика-теоретика Роберта Оппенгеймера, сыгравшего ключевую роль в создании первой атомной бомбы.",
        cast: [
            { name: 'Киллиан Мёрфи', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Cillian_Murphy_by_Gage_Skidmore.jpg' },
            { name: 'Эмили Блант', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Emily_Blunt_2019.jpg' },
            { name: 'Мэтт Дэймон', photo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matt_Damon_TIFF_2023.jpg' },
            { name: 'Роберт Дауни мл.', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg' },
            { name: 'Флоренс Пью', photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Florence_Pugh_by_Gage_Skidmore.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/oppenheimer1.jpg',
            'https://example.com/trailer/oppenheimer2.jpg',
            'https://example.com/trailer/oppenheimer3.jpg'
        ]
    },
    {
        name: 'Сент-Омер',
        rating: 7.1,
        duration: 122,
        genre: 'драма, судебный процесс',
        director: 'Алис Диоп',
        year: 2022,
        poster: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Saint-Omer_poster.png',
        trailer: 'https://www.youtube.com/watch?v=9RbpTQpbx2U',
        fullMovie: 'https://example.com/full/saintomer',
        info: "Журналистка Рама посещает судебное разбирательство в небольшом городке Сент-Омер...",
        cast: [
            { name: 'Кейджи Кагаме', photo: 'https://example.com/photos/kagame.jpg' },
            { name: 'Гуслагие Маланда', photo: 'https://example.com/photos/malanda.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/saintomer1.jpg',
            'https://example.com/trailer/saintomer2.jpg',
            'https://example.com/trailer/saintomer3.jpg'
        ]
    },
    {
        name: 'Земля Бога',
        rating: 7.7,
        duration: 104,
        genre: 'драма, романтика',
        director: 'Фрэнсис Ли',
        year: 2017,
        poster: 'https://upload.wikimedia.org/wikipedia/en/6/64/God%27s_Own_Country_%282017_film%29.png',
        trailer: 'https://www.youtube.com/watch?v=hz6KP9ahUuE',
        fullMovie: 'https://example.com/full/godsowncountry',
        info: "Фермер Джон Сакли живет на севере Англии, ухаживая за фермой своих родителей...",
        cast: [
            { name: 'Джош О’Коннор', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Josh_O%27Connor_2020.jpg' },
            { name: 'Алек Секэряну', photo: 'https://example.com/photos/secarianu.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/godsowncountry1.jpg',
            'https://example.com/trailer/godsowncountry2.jpg',
            'https://example.com/trailer/godsowncountry3.jpg'
        ]
    },
    {
        name: 'Человек-Паук: Возвращение домой',
        rating: 7.4,
        duration: 133,
        genre: 'боевик, приключения, фантастика',
        director: 'Джон Уоттс',
        year: 2017,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/3/32/Spider-Man_Homecoming_%28poster%29.jpg',
        trailer: 'https://www.youtube.com/watch?v=5oFJ1qF6OLg',
        fullMovie: 'https://example.com/full/spidermanhomecoming',
        info: "Человек-Паук, снова вернувшись домой, должен столкнуться с новыми угрозами и стать героем для своей команды.",
        cast: [
            { name: 'Том Холланд', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Tom_Holland_2017.jpg' },
            { name: 'Майкл Китон', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Michael_Keaton_2014.jpg' },
            { name: 'Зендая', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Zendaya_2019_by_Gage_Skidmore.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/spiderman1.jpg',
            'https://example.com/trailer/spiderman2.jpg',
            'https://example.com/trailer/spiderman3.jpg'
        ]
    },
    {
        name: 'Мстители',
        rating: 8.0,
        duration: 143,
        genre: 'боевик, приключения, фантастика',
        director: 'Джосс Уидон',
        year: 2012,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/f/f3/The_Avengers_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
        fullMovie: 'https://example.com/full/avengers',
        info: "Когда Земля сталкивается с угрозой захвата мира, группа героев объединяется, чтобы противостоять пришельцам и спасти планету.",
        cast: [
            { name: 'Роберт Дауни мл.', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg' },
            { name: 'Крис Эванс', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chris_Evans_2019.jpg' },
            { name: 'Крис Хемсворт', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chris_Hemsworth_2019.jpg' },
            { name: 'Скарлетт Йоханссон', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Scarlett_Johansson_2019.jpg' },
            { name: 'Том Хиддлстон', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Tom_Hiddleston_2017.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/avengers1.jpg',
            'https://example.com/trailer/avengers2.jpg',
            'https://example.com/trailer/avengers3.jpg'
        ]
    },
    {
        name: 'Мстители: Война бесконечности',
        rating: 8.4,
        duration: 149,
        genre: 'боевик, приключения, фантастика',
        director: 'Энтони и Джо Руссо',
        year: 2018,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/0/05/Avengers_Infinity_War_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
        fullMovie: 'https://example.com/full/avengersinfinitywar',
        info: "Мстители и их союзники должны противостоять Таносу, который стремится собрать все Камни Бесконечности, чтобы уничтожить половину жизни во Вселенной.",
        cast: [
            { name: 'Роберт Дауни мл.', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg' },
            { name: 'Крис Эванс', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chris_Evans_2019.jpg' },
            { name: 'Крис Хемсворт', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chris_Hemsworth_2019.jpg' },
            { name: 'Скарлетт Йоханссон', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Scarlett_Johansson_2019.jpg' },
            { name: 'Том Холланд', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Tom_Holland_2017.jpg' },
            { name: 'Чедвик Боузман', photo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Chadwick_Boseman_2018.jpg' },
            { name: 'Джош Бролин', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Josh_Brolin_2017.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/avengersinfinitywar1.jpg',
            'https://example.com/trailer/avengersinfinitywar2.jpg',
            'https://example.com/trailer/avengersinfinitywar3.jpg'
        ]
    },
    {
        name: 'Человек из стали',
        rating: 7.0,
        duration: 143,
        genre: 'боевик, приключения, фантастика',
        director: 'Зак Снайдер',
        year: 2013,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/4/42/Man_of_Steel_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=T6DJcgm3wNY',
        fullMovie: 'https://example.com/full/manofsteel',
        info: "Молодой Кларк Кент должен понять, кто он и чему он предназначен, когда на Землю прибывает инопланетная угроза, и ему предстоит стать героем человечества.",
        cast: [
            { name: 'Генри Кавилл', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Henry_Cavill_2018.jpg' },
            { name: 'Эми Адамс', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Emily_Adams_2017.jpg' },
            { name: 'Майкл Шеннон', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Michael_Shannon_2011.jpg' },
            { name: 'Лоренс Фишбёрн', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Laurence_Fishburne_2013.jpg' },
            { name: 'Дайан Лэйн', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Diane_Lane_2016.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/manofsteel1.jpg',
            'https://example.com/trailer/manofsteel2.jpg',
            'https://example.com/trailer/manofsteel3.jpg'
        ]
    },
    {
        name: 'Бетмен против Супермена: На заре справедливости',
        rating: 6.4,
        duration: 151,
        genre: 'боевик, приключения, фантастика',
        director: 'Зак Снайдер',
        year: 2016,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/2/28/Batman_v_Superman_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=0WWzgGyAH6Y',
        fullMovie: 'https://example.com/full/bvs',
        info: "После событий 'Человека из стали' Бэтмен начинает бороться с Суперменом, считая его угрозой человечеству. Между героями возникает жестокая битва, в то время как новая угроза в лице Думсдея и Лекс Лютор объединяет их против общего врага.",
        cast: [
            { name: 'Бен Аффлек', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ben_Affleck_2016.jpg' },
            { name: 'Генри Кавилл', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Henry_Cavill_2018.jpg' },
            { name: 'Галь Гадот', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Gal_Gadot_2018.jpg' },
            { name: 'Джесси Айзенберг', photo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Jesse_Eisenberg_by_Gage_Skidmore.jpg' },
            { name: 'Лоуренс Фишбёрн', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Laurence_Fishburne_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/bvs1.jpg',
            'https://example.com/trailer/bvs2.jpg',
            'https://example.com/trailer/bvs3.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и философский камень',
        rating: 7.6,
        duration: 152,
        genre: 'приключения, фэнтези',
        director: 'Крис Коламбус',
        year: 2001,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/a/a0/Harry_Potter_and_the_Sorcerer%27s_Stone_movie_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
        fullMovie: 'https://example.com/full/harrypotter1',
        info: "Мальчик-сирота Гарри Поттер обнаруживает, что он волшебник и отправляется в Хогвартс, чтобы изучать магию. Он вскоре встречает новых друзей и сталкивается с темной магией.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter1a.jpg',
            'https://example.com/trailer/harrypotter1b.jpg',
            'https://example.com/trailer/harrypotter1c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Тайная комната',
        rating: 7.4,
        duration: 161,
        genre: 'приключения, фэнтези',
        director: 'Крис Коламбус',
        year: 2002,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/0/0f/Harry_Potter_and_the_Chamber_of_Secrets_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=1bq0qff4iF8',
        fullMovie: 'https://example.com/full/harrypotter2',
        info: "Гарри возвращается в Хогвартс и сталкивается с мистической угрозой, которая затрагивает всех учеников. Тайная комната скрывает много тайн, которые Гарри и его друзья должны разгадать.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter2a.jpg',
            'https://example.com/trailer/harrypotter2b.jpg',
            'https://example.com/trailer/harrypotter2c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и узник Азкабана',
        rating: 7.9,
        duration: 142,
        genre: 'приключения, фэнтези',
        director: 'Альфонсо Куарон',
        year: 2004,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/7/76/Harry_Potter_and_the_Prisoner_of_Azkaban_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=1O-cKp6_5d8',
        fullMovie: 'https://example.com/full/harrypotter3',
        info: "Гарри снова возвращается в Хогвартс, где ему предстоит разгадать тайну заключенного узника Азкабана, который якобы был связан с его прошлым.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter3a.jpg',
            'https://example.com/trailer/harrypotter3b.jpg',
            'https://example.com/trailer/harrypotter3c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Кубок огня',
        rating: 7.7,
        duration: 157,
        genre: 'приключения, фэнтези',
        director: 'Майк Ньюэлл',
        year: 2005,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/9/9b/Harry_Potter_and_the_Goblet_of_Fire_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=4Ox2K_UyQdI',
        fullMovie: 'https://example.com/full/harrypotter4',
        info: "Гарри участвует в Тримагическом турнире и сталкивается с великими испытаниями, которые приведут его к столкновению с Темным Лордом.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter4a.jpg',
            'https://example.com/trailer/harrypotter4b.jpg',
            'https://example.com/trailer/harrypotter4c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Орден Феникса',
        rating: 7.5,
        duration: 138,
        genre: 'приключения, фэнтези',
        director: 'Дэвид Ейтс',
        year: 2007,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/7/7d/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=Uy8A53V7bZA',
        fullMovie: 'https://example.com/full/harrypotter5',
        info: "Гарри и его друзья противостоят власти Министерства магии, которое не верит в возвращение Волдеморта. Он формирует Орден Феникса, чтобы бороться с темной силой.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter5a.jpg',
            'https://example.com/trailer/harrypotter5b.jpg',
            'https://example.com/trailer/harrypotter5c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Принц-полукровка',
        rating: 7.6,
        duration: 153,
        genre: 'приключения, фэнтези',
        director: 'Дэвид Ейтс',
        year: 2009,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Harry_Potter_and_the_Half-Blood_Prince.jpg',
        trailer: 'https://www.youtube.com/watch?v=4z5tQW0ON7o',
        fullMovie: 'https://example.com/full/harrypotter6',
        info: "Гарри продолжает учёбу в Хогвартсе и расследует прошлое Волдеморта. Он узнает важную тайну, которая поможет победить тёмного волшебника.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter6a.jpg',
            'https://example.com/trailer/harrypotter6b.jpg',
            'https://example.com/trailer/harrypotter6c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Дары Смерти: Часть 1',
        rating: 7.7,
        duration: 146,
        genre: 'приключения, фэнтези',
        director: 'Дэвид Ейтс',
        year: 2010,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/a/ae/Harry_Potter_and_the_Deathly_Hallows_Part_1_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=EHp3ExfR5nQ',
        fullMovie: 'https://example.com/full/harrypotter7-1',
        info: "Гарри и его друзья решают уничтожить последние части Души Волдеморта, чтобы окончательно победить его.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter7-1a.jpg',
            'https://example.com/trailer/harrypotter7-1b.jpg',
            'https://example.com/trailer/harrypotter7-1c.jpg'
        ]
    },
    {
        name: 'Гарри Поттер и Дары Смерти: Часть 2',
        rating: 8.1,
        duration: 130,
        genre: 'приключения, фэнтези',
        director: 'Дэвид Ейтс',
        year: 2011,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/5/53/Harry_Potter_and_the_Deathly_Hallows_Part_2_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=Qbq2CU1yOas',
        fullMovie: 'https://example.com/full/harrypotter7-2',
        info: "Гарри, Рон и Гермиона продолжают своё путешествие, чтобы уничтожить последние части Волдеморта. В финальной битве решается судьба магического мира.",
        cast: [
            { name: 'Дэниел Рэдклифф', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Daniel_Radcliffe_2012.jpg' },
            { name: 'Эмма Уотсон', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Emma_Watson_2013.jpg' },
            { name: 'Руперт Гринт', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rupert_Grint_2013.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/harrypotter7-2a.jpg',
            'https://example.com/trailer/harrypotter7-2b.jpg',
            'https://example.com/trailer/harrypotter7-2c.jpg'
        ]
    },
    {
        name: 'Властелин колец: Братство кольца',
        rating: 8.8,
        duration: 178,
        genre: 'приключения, фэнтези',
        director: 'Питер Джексон',
        year: 2001,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/5/5b/Lord_of_the_Rings_-_The_Fellowship_of_the_Ring.jpg',
        trailer: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
        fullMovie: 'https://example.com/full/lordoftherings1',
        info: "Фродо Бэггинс, хоббит из Шира, получает опасную миссию: уничтожить кольцо, которое может угрожать всему миру. Он становится частью братства, включающего людей, эльфов и гномов.",
        cast: [
            { name: 'Элайджа Вуд', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Elijah_Wood_2012.jpg' },
            { name: 'Иэн Маккеллен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ian_McKellen_2012.jpg' },
            { name: 'Вигго Мортенсен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Viggo_Mortensen_2013.jpg' },
            { name: 'Лив Тайлер', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Liv_Tyler_2016.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/lotr1a.jpg',
            'https://example.com/trailer/lotr1b.jpg',
            'https://example.com/trailer/lotr1c.jpg'
        ]
    },
    {
        name: 'Властелин колец: Две крепости',
        rating: 8.7,
        duration: 179,
        genre: 'приключения, фэнтези',
        director: 'Питер Джексон',
        year: 2002,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/c/c6/The_Lord_of_the_Rings_-_The_Two_Towers.jpg',
        trailer: 'https://www.youtube.com/watch?v=R1QXYzBBrRI',
        fullMovie: 'https://example.com/full/lordoftherings2',
        info: "Вторая часть эпопеи рассказывает о том, как герои пытаются защитить королевство Рохан от наступающих сил Саурона. Фродо и Сэм продолжают свой путь в Мордоре.",
        cast: [
            { name: 'Элайджа Вуд', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Elijah_Wood_2012.jpg' },
            { name: 'Иэн Маккеллен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ian_McKellen_2012.jpg' },
            { name: 'Вигго Мортенсен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Viggo_Mortensen_2013.jpg' },
            { name: 'Лив Тайлер', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Liv_Tyler_2016.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/lotr2a.jpg',
            'https://example.com/trailer/lotr2b.jpg',
            'https://example.com/trailer/lotr2c.jpg'
        ]
    },
    {
        name: 'Властелин колец: Возвращение короля',
        rating: 8.9,
        duration: 201,
        genre: 'приключения, фэнтези',
        director: 'Питер Джексон',
        year: 2003,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/5/5b/The_Lord_of_the_Rings_-_The_Return_of_the_King.jpg',
        trailer: 'https://www.youtube.com/watch?v=Q0hLJdyXbX4',
        fullMovie: 'https://example.com/full/lordoftherings3',
        info: "В заключительной части трилогии Фродо и его спутники приближаются к Мордору. В то же время, битва за Средиземье достигает кульминации, и армии добрых и злобных сил встречаются в последней решающей битве.",
        cast: [
            { name: 'Элайджа Вуд', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Elijah_Wood_2012.jpg' },
            { name: 'Иэн Маккеллен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ian_McKellen_2012.jpg' },
            { name: 'Вигго Мортенсен', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Viggo_Mortensen_2013.jpg' },
            { name: 'Лив Тайлер', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Liv_Tyler_2016.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/lotr3a.jpg',
            'https://example.com/trailer/lotr3b.jpg',
            'https://example.com/trailer/lotr3c.jpg'
        ]
    },
    {
        name: 'Мстители: Финал',
        rating: 8.4,
        duration: 181,
        genre: 'экшн, фантастика, приключения',
        director: 'Энтони Руссо, Джо Руссо',
        year: 2019,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/7/74/Avengers_Endgame_poster.jpg',
        trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
        fullMovie: 'https://example.com/full/avengersendgame',
        info: "После того как Танос использует Перчатку Бесконечности для уничтожения половины жизни во Вселенной, оставшиеся Мстители пытаются найти способ вернуть все назад и остановить Таноса навсегда.",
        cast: [
            { name: 'Роберт Дауни мл.', photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Robert_Downey_Jr_2014.jpg' },
            { name: 'Крис Эванс', photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Chris_Evans_2014.jpg' },
            { name: 'Скарлетт Йоханссон', photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Scarlett_Johansson_2019.jpg' },
            { name: 'Марк Руффало', photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Mark_Ruffalo_2010.jpg' },
            { name: 'Крис Хемсворт', photo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Chris_Hemsworth_2012.jpg' },
            { name: 'Дон Чидл', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Don_Cheadle_2011.jpg' }
        ],
        screenshots: [
            'https://example.com/trailer/endgame1.jpg',
            'https://example.com/trailer/endgame2.jpg',
            'https://example.com/trailer/endgame3.jpg'
        ]
    },
];
