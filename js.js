
		// Generator kolorów
		
		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split(''); // konwersja sting na array
			var color = "#";
			for (var i=0; i<6; i++) {
				color += letters[Math.round(Math.random() * 15)];	
				// 15 oznacza mieszanie kolorów ze wszystkich eleemntów macierzy 
				// bierzemy string i dodajemy kolejne wygenerowane znaki  
			}
			return color;
		}

		// ustalanie przypadkowej pozycji kwadratu
		function pickPos(){
			return Math.floor((Math.random()*1300)+50) + "px";
		}

		// ustalanie przypadkowej wialkosci kwadratu	
		function size(){
			return Math.floor((Math.random()*100)+110) + "px";
		}

		// tworzenie nowego kwadraru
		function addSquare(){
			
			// czas w jakim beda sie pojawiac kolejne kwadraty
			var time=Math.random();
				
			time=8000*time;
			
			setTimeout(function() {
				
				// utworzenie elementu div
				var div = document.createElement("div");
				
				// efekt zanikania kwadratu
				$(div).fadeTo( "slow", Math.random() );
				
				// przypisanie koloru tła kwadraru
				div.style.background = getRandomColor();
				
				// zaokrąglenie rogów kwadratu
				$("div").css( { borderRadius: "15px" } );
				
				// przypisanie przypadkowej pozycji kwadraru
				div.style.left=pickPos();
				div.style.top=pickPos();
				div.style.bottom=pickPos();
				div.style.right=pickPos();
				
				//przypisanie przypadkowej wielkości kwadraru
				div.style.height=size();
				div.style.width=size();
				
				// wklejenie zawartości div w body
				$("body").append(div);
				
				//uruchomienie zegara
			}, time);	
		}
		
			// uruchomienie funkcji addSquare(); po całkowitym załadowaniu się strony
			window.onload = function(){
				
					// pętla for urzyta w celu automatycznego wygenerowania 349 kwadratów
					for (var i=0; i<350; i++) {							
																	
					addSquare();
					document.getElementById("i").innerHTML=i;
					}		
					
			}