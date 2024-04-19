ymaps.ready(init);

function init () {

var myMap1 = new ymaps.Map("map", {
                center: [57.759641,40.94239],
                zoom: 11,
				controls: ['zoomControl']
            }); 


var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.761303,40.949451],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">Костромская филармония</div>
						<div class="balloon__address">ул. Советская, 58</div>
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
        
        myGeoObjects[1] = new ymaps.Placemark([57.761269,40.937359],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Музей истории Костромского края</div>
				<div class="balloon__address">ул. Дзержинского, 9б</div>
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

        myGeoObjects[2] = new ymaps.Placemark([57.762364,40.944977],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Компьютерный клуб «CyberX»</div>
				<div class="balloon__address">ул. Лермонтова, 1А</div>
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
		
		myGeoObjects[3] = new ymaps.Placemark([57.763732,40.940971],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">КотоКафе «Мао»</div>
					<div class="balloon__address">ул. Советская, 45А</div>
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

		myGeoObjects[4] = new ymaps.Placemark([57.763621,40.943567],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Экзотариум</div>
					<div class="balloon__address">ул. Советская, 53Б</div>
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

		myGeoObjects[5] = new ymaps.Placemark([57.764711,40.941069],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Клуб виртуальной реальности «Vr Клуб City17»</div>
					<div class="balloon__address">ул. Смоленская, 33</div>
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

		myGeoObjects[6] = new ymaps.Placemark([57.752938,40.962108],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Пейнтбольный клуб «Снайпер»</div>
					<div class="balloon__address">Петрковский б-р, 64</div>
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

		myGeoObjects[7] = new ymaps.Placemark([57.764183,40.935958],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Фабрика современных прикладных искусств «ХЛЕБЪ»</div>
					<div class="balloon__address">ул. Горная, 3</div>
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

		myGeoObjects[8] = new ymaps.Placemark([57.768566,40.945965],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Художественная студия «АртДом»</div>
					<div class="balloon__address">ул. Мясницкая, 19а</div>
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

		myGeoObjects[9] = new ymaps.Placemark([57.753865,40.993567],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Учебный центр «Не школа барабанов»</div>
					<div class="balloon__address">Кинешемское шоссе, 21/1</div>
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

		myGeoObjects[10] = new ymaps.Placemark([57.734113,40.999532],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Гончарная мастерская «ДоброРум»</div>
					<div class="balloon__address">ул. Давыдовская, 17</div>
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

		myGeoObjects[11] = new ymaps.Placemark([57.74472,41.013689],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Кинотеатр «Пять звёзд» </div>
					<div class="balloon__address">Красносельское шоссе, 1, ТРЦ «Коллаж»</div>
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
myMap1.geoObjects.add(clusterer);
}

