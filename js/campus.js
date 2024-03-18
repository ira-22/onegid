ymaps.ready(init);

function init () {

var myMap = new ymaps.Map("map4", {
                center: [57.736553,40.9203],
                zoom: 11,
				controls: ['zoomControl']
            }); 

var myGeoObjects = [];
        
        myGeoObjects[0] = new ymaps.Placemark([57.778156,40.913419],{
				balloonContent: `
					<div class="balloon">
						<div class="balloon__address">Спортивный корпус</div>
						<div class="balloon__address">ул. Симановского, 69А</div>
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
        
        myGeoObjects[1] = new ymaps.Placemark([57.800459,41.003619],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">ИПП</div>
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
				iconImageOffset: [-20, -40]
				});

        myGeoObjects[2] = new ymaps.Placemark([57.767318,40.917102],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Корпус Г1</div>
				<div class="balloon__address">ул. 1 Мая, 16</div>
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
		
		myGeoObjects[3] = new ymaps.Placemark([57.767707,40.91721],{
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Корпус В1</div>
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
        
        myGeoObjects[4] = new ymaps.Placemark([57.768681,40.916492],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ</div>
                    <div class="balloon__address">Пятницкая улица, 2/18</div>
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

        myGeoObjects[5] = new ymaps.Placemark([57.766939,40.918692],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ, учебно-лабораторный корпус</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[6] = new ymaps.Placemark([57.766939,40.918692],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус А1</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[7] = new ymaps.Placemark([57.760578,40.933407],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ, учебный корпус</div>
                    <div class="balloon__address">Лесная улица, 7</div>
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

        myGeoObjects[8] = new ymaps.Placemark([57.760611,40.932616],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус Ж</div>
                    <div class="balloon__address">ул. Лесная, 5</div>
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

        myGeoObjects[9] = new ymaps.Placemark([57.736553,40.9203],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус Е</div>
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

        myGeoObjects[10] = new ymaps.Placemark([57.761471,40.939659],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ, здание по художественной обработке металлов</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[11] = new ymaps.Placemark([57.76164603274719,40.94212448639434],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус Д</div>
                    <div class="balloon__address">ул. Ивановская, 24А</div>
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

        myGeoObjects[12] = new ymaps.Placemark([57.76154855154231,40.94133055252641],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус Г</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[13] = new ymaps.Placemark([57.76098659513362,40.94023621124907],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус В</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[14] = new ymaps.Placemark([57.761514146797495,40.93975341362639],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Корпус Б</div>
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
                iconImageOffset: [-40, -40]
                });

        myGeoObjects[15] = new ymaps.Placemark([57.765623,40.927864],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ доп. проф. образование</div>
                    <div class="balloon__address">Советская площадь, 2А</div>
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

        myGeoObjects[16] = new ymaps.Placemark([57.759641,40.94239],{
            balloonContent: `
            <div class="balloon">
                <div class="balloon__address">КГУ, главный корпус</div>
                    <div class="balloon__address">ул. Дзержинского, 17</div>
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