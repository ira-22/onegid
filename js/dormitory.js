ymaps.ready(init);

function init () {

var myMap = new ymaps.Map("map5", {
                center: [57.736553,40.9203],
                zoom: 11,
				controls: ['zoomControl']
            }); 

var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.754431,40.952182],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">Общежитие №1</div>
						<div class="balloon__address">Воскресенский переулок, 17</div>
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
        
        myGeoObjects[1] = new ymaps.Placemark([57.753951,40.954221],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Общежитие №2</div>
				<div class="balloon__address">Дальняя улица, 1</div>
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

        myGeoObjects[2] = new ymaps.Placemark([57.735521251418234,40.91972972579064],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Общежитие №3</div>
				<div class="balloon__address">Малышковская улица, 4</div>
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
		
		myGeoObjects[3] = new ymaps.Placemark([57.755065,40.955595],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Общежитие №4</div>
					<div class="balloon__address">Дальняя улица, 1Б</div>
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
        
        myGeoObjects[4] = new ymaps.Placemark([57.755272,40.954526],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Общежитие №5</div>
                    <div class="balloon__address">Лагерная улица, 15</div>
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

        myGeoObjects[5] = new ymaps.Placemark([57.768014,40.918827],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Общежитие №6</div>
                    <div class="balloon__address">улица Щемиловка, 21</div>
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
myMap.geoObjects.add(clusterer);
}