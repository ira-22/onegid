ymaps.ready(init);

function init () {

var myMap3 = new ymaps.Map("map3", {
                center: [57.800459,41.003619],
                zoom: 11,
				controls: ['zoomControl']
            }); 


var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.800301,40.95352],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">Зоопарк</div>
						<div class="balloon__address">ул. Ленина, 175</div>
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
        
        myGeoObjects[1] = new ymaps.Placemark([57.796349,40.953843],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Берендеевка</div>
				<div class="balloon__address">ул. Ленина, 150</div>
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

        myGeoObjects[2] = new ymaps.Placemark([57.820511,40.972564],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Дендропарк</div>
				<div class="balloon__address">конец улицы Ленина</div>
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
myMap3.geoObjects.add(clusterer);
}

