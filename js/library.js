ymaps.ready(init);

function init () {

var myMap2 = new ymaps.Map("map6", {
                center: [57.767707,40.91721],
                zoom: 11,
				controls: ['zoomControl']
            }); 


var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.766939,40.918692],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">корпус А1</div>
						<div class="balloon__address">ул. 1 Мая, 14</div>
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
        
        myGeoObjects[1] = new ymaps.Placemark([57.761514146797495,40.93975341362639],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">корпус Б1</div>
				<div class="balloon__address">Ивановская улица, 24А</div>
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

        myGeoObjects[2] = new ymaps.Placemark([57.767707,40.91721],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">корпус В1</div>
				<div class="balloon__address">ул. 1 Мая, 14А</div>
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
		
		myGeoObjects[3] = new ymaps.Placemark([57.800459,41.003619],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">корпус ИПП</div>
					<div class="balloon__address">посёлок Новый, 1</div>
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

