ymaps.ready(init);

function init () {

var myMap2 = new ymaps.Map("map2", {
                center: [57.767707,40.91721],
                zoom: 11,
				controls: ['zoomControl']
            }); 


var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.770491,40.931359],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">Костромской государственный драматический театр им. А. Н. Островского </div>
						<div class="balloon__address">пр. Мира, 9</div>
					</div>
				`,
				//clusterCaption: 'Костромская филармония ', 
			//balloonContentBody: 'Текст в балуне',
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-20, -40]
				});
        
        myGeoObjects[1] = new ymaps.Placemark([57.772176,40.922896],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Камерный драматический театр под руководством Б.И. Голодницого</div>
				<div class="balloon__address">ул. Симановского, 11</div>
			</div>
		`,
				//clusterCaption: 'Костромская филармония ', 
			//balloonContentBody: 'Текст в балуне',
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-20, -40]
				});

        myGeoObjects[2] = new ymaps.Placemark([57.769934,40.930496],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Романовский музей</div>
				<div class="balloon__address">пр. Мира, 7</div>
			</div>
		`,
				//clusterCaption: 'Костромская филармония ', 
			//balloonContentBody: 'Текст в балуне',
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-40, -40]
				});
		
		myGeoObjects[3] = new ymaps.Placemark([57.773592,40.916581],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Учебный центр «Не школа гитары» </div>
					<div class="balloon__address">пр. Текстильщиков, 33</div>
				</div>
				`,
				//clusterCaption: 'Костромская филармония ', 
			//balloonContentBody: 'Текст в балуне',
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-40, -40]
				});

		myGeoObjects[4] = new ymaps.Placemark([57.78235,40.90908],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Арт-площадка «Станция»</div>
					<div class="balloon__address">ул. Ерохова, 3А</div>
				</div>
						`,
				//clusterCaption: 'Костромская филармония ', 
			//balloonContentBody: 'Текст в балуне',
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-40, -40]
				});

		myGeoObjects[5] = new ymaps.Placemark([57.775555,40.924469],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Клуб спортивного бального танца «Па»</div>
					<div class="balloon__address">ул. Козуева, 15</div>
				</div>
						`,
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-40, -40]
				});

		myGeoObjects[6] = new ymaps.Placemark([57.770597,40.933793],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Клуб метания топоров «Раскольников»</div>
					<div class="balloon__address">ул. Князева, 11А</div>
				</div>
						`,
				},{
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: './img/map/location-pin.svg',
				// Размеры метки.
				iconImageSize: [40, 40],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-40, -40]
				});

				var clusterIcons=[{
					href:'./img/map/location-pin.svg',
					size:[40,40],
					offset:[-20,-40]
			}];
					
			   var clusterer = new ymaps.Clusterer({
					clusterDisableClickZoom: false,
					clusterOpenBalloonOnClick: false,
					// Устанавливаем стандартный макет балуна кластера "Карусель".
					clusterBalloonContentLayout: 'cluster#balloonCarousel',
					// Устанавливаем собственный макет.
					   //clusterBalloonItemContentLayout: customItemContentLayout,
					// Устанавливаем режим открытия балуна. 
					// В данном примере балун никогда не будет открываться в режиме панели.
					clusterBalloonPanelMaxMapArea: 0,
					// Устанавливаем размеры макета контента балуна (в пикселях).
					clusterBalloonContentLayoutWidth: 300,
					clusterBalloonContentLayoutHeight: 200,
					// Устанавливаем максимальное количество элементов в нижней панели на одной странице
					clusterBalloonPagerSize: 5
					// Настройка внешего вида нижней панели.
					// Режим marker рекомендуется использовать с небольшим количеством элементов.
					// clusterBalloonPagerType: 'marker',
					// Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
					// clusterBalloonCycling: false,
					// Можно отключить отображение меню навигации.
					// clusterBalloonPagerVisible: false
				});
				
clusterer.add(myGeoObjects);
myMap2.geoObjects.add(clusterer);
}

