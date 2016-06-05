window.onload=function(){
//globale Variablen
	var Status;     	//Var --> speichert Gesprдchsfortschritt
	var Name;		//Var --> speichert den Namen des Nutzers
	var Alter;		//Var --> speichert das Alter des Nutzers
	var Beruf;		//Var --> speichert den Beruf des Nutzers
    var ErsterAufruf;
	//Button aufruf
	document.getElementById("StartButton").onclick = function() {first();};
	document.getElementById("SendeButton").onclick = function() {main();};
	//Funktionen
	function first()			//wird aufgerufen, wenn der Start Button gedrьckt wird
	  {
		//alles in Ausgabefeld lцschen
		remove();
		//Deklaration und Implementation
		var Ausgabe;
		Status = 0;	
		//Programm Ablauf
		Ausgabe = 'Wie hei\u00dft du?';
		Output("AusgabeFeld", Ausgabe, 'PC');
        SpeechOut(Ausgabe);
        ErsterAufruf = 1;
		return 0;
	  }
	function main()				//wird aufgerufen, wenn der Sende Button gedrьckt wird
	  {
  		if (ErsterAufruf != 1)
          {
            remove();
            var Ausgabe;
            Ausgabe = 'Bitte starte zuerst den Chatbot!';
            Output("AusgabeFeld", Ausgabe, 'PC');
            SpeechOut(Ausgabe);
          }
        else if (Status != -2)
  		  {
			//Eingabefeld scannen und inChat fenster ьbernehmen
			var Eingabe = getText("EingabeFeld");
			Output("AusgabeFeld", Eingabe, 'USER');  
			switch(Status)
			  {
        			case -1: ENDE(); break;
        			case 0: Ebene0(); break;
        			case 1: Ebene1(); break;
        			case 2: Ebene2(); break;
        			case 3: Ebene3(); break;
        			case 4: Ebene4(); break;
        			case 5: Ebene5(); break;
        			case 6: Ebene6(); break;
        			case 7: Ebene7(); break;
        			case 8: Ebene8(); break;
        			case 9: Ebene9(); break;
        			case 10: Ebene10(); break;
        			case 11: Ebene11(); break;
        			case 12: Ebene12(); break;
        			default: ENDE(); break;
			  }
  		  }
		return 0;
	  }
	function Ebene0()
	  {
		//Deklaration und Implementation
		var Ausgabe;
		Name = getText("EingabeFeld");
		Ausgabe = 'Hallo ' + Name + ', m\u00f6chtest du an einer kurzen Umfrage teilnehmen?';
		SpeechOut(Ausgabe);
        Output("AusgabeFeld", Ausgabe, 'PC');
    	Status = 1;
    	return 0;
	  }
	function Ebene1()
	  {
		var Eingabe;
		var Ausgabe;
    		Eingabe = getYesNo("EingabeFeld");
    		if (Eingabe == 'Ja')
      		  {
        		Ausgabe = 'Sch\u00f6n, dass du dir die Zeit nimmst.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Wie alt bist du?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 2;
      		  }
    		else if (Eingabe == 'Nein')
      		  {
       			Ausgabe = 'Schade, vielleicht findest du ein anderes mal Zeit!';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = -1;
      		  }
    		else
      		  {
        		SpeechOut(Ausgabe);
                Output("AusgabeFeld", Eingabe, 'PC');
      		  }
  
		return 0;
	  }
	function Ebene2()
	  {
    		var Ausgabe;   
    		Alter = getText("EingabeFeld");
    		if (Alter <= 18)
      		  {
        		Ausgabe = 'Witzig. Genau, wie mein Sohn.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Gehst du noch zur Schule?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 3;
      		  }
    		else if ((Alter > 18) && (Alter < 40))
      		  {
        		Ausgabe = 'Witzig. Genauso alt, wie mein Nachbar.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Bist du zur Zeit berufst\u00e4tig?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 4;    
      		  }
    		else if ((Alter >= 40) && (Alter < 100))
      		  {
        		Ausgabe = 'Witzig. Genauso alt, wie mein Vater.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Bist du zur Zeit berufst\u00e4tig?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 4;
      		  }
    		else if (Alter >= 100)
      		  {
        		Ausgabe = 'Das erscheint mir sehr unwahrscheinlich.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Bist du zur Zeit berufst\u00e4tig?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 4;
      		  }
  
    		return 0;
	  }
	function Ebene3()
	  {
  		var Eingabe;
  		var Ausgabe;
  		Eingabe = getYesNo("EingabeFeld");
  		if (Eingabe == 'Ja')
      		  {
        		Ebene8();
        		Status = 9;
      		  }
    		else if (Eingabe == 'Nein')
      		  {
        		Ausgabe = 'Bist du gerade auf der Suche nach einer Arbeit?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Mit ' + Alter + ' Jahren findet man doch bestimmt leicht eine Stelle?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 6;
      		  }
    		else
      		  {
        		SpeechOut(Ausgabe);
                Output("AusgabeFeld", Eingabe, 'PC');
      		  }
  
  		return 0;
	  }
	function Ebene4()
	  {
  		var Eingabe;
  		var Ausgabe;
  		Eingabe = getYesNo("EingabeFeld");
  		if (Eingabe == 'Ja')
      		  {
        		Ausgabe = 'Arbeitest du in Vollzeit oder Teilzeit?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 7;
      		  }
    		else if (Eingabe == 'Nein')
      		  {
        		Ausgabe = 'Dann befindest du dich bestimmt gerade in einer Ausbildung?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Oder studierst du momentan?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
	    		Status = 8;
      		  }
   		else
     		  {
        		SpeechOut(Ausgabe);
                Output("AusgabeFeld", Eingabe, 'PC');
    		  }
  
  		return 0;
	  }
	function Ebene5()
	  {
		var Eingabe;
		var Ausgabe;
		Eingabe = getYesNo("EingabeFeld");
		if (Eingabe == 'Ja')
      		  {
        		Ausgabe = 'Ich freue mich, dass du mit deinen Lehrern zufrieden bist. Ich hoffe es bleibt so.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = -1;
      		  }
    		else if (Eingabe == 'Nein')
      		  {
        		Ausgabe = 'Schade, vielleicht solltest du mal mit einer Person deines Vertrauens dar\u00fcber reden.';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Ausgabe = 'Ich hoffe es wird besser.';
        		Output("AusgabeFeld", Ausgabe, 'PC');
			Status = -1;
      		  }
    		else
      		  {
        		SpeechOut(Ausgabe);
                Output("AusgabeFeld", Eingabe, 'PC');
      		  }
  
		return 0;
	  }
	function Ebene6()
	  {
  		var Ausgabe;
  		Ausgabe = 'Ich hoffe du findest bald das Richtige fьr dich.';
        SpeechOut(Ausgabe);
  		Output("AusgabeFeld", Ausgabe, 'PC');
  		Status = -1;
  		return 0;
	  }
	function Ebene7()
	  {
  		var J = false;
  		var N = false;
  		var Eingabe;
  		var Ausgabe;
  		Eingabe = getText("EingabeFeld");
  		//Eingabe Auswerten
  		Eingabe = Eingabe.toUpperCase();                         	//alles in GroЯbuchstaben umwandeln
  		//Eingabe Verarbeiten
  		if (Eingabe.indexOf('VOLLZEIT') != -1)    //String enthдlt Vollzeit
      		  {
			Ausgabe = 'Toll! Ich momentan auch.';
                SpeechOut(Ausgabe);
			Output("AusgabeFeld", Ausgabe, 'PC');
			Ausgabe = 'Was bist du denn hauptberuflich?';
                SpeechOut(Ausgabe);
 			Output("AusgabeFeld", Ausgabe, 'PC');
			J = true;
			Status = 10;
      		  }
  		if (Eingabe.indexOf('TEILZEIT') != -1)    //String enthдlt Teilzeit
      		  {
			Ausgabe = 'Toll! Ich momentan auch.';
                SpeechOut(Ausgabe);
			Output("AusgabeFeld", Ausgabe, 'PC');
			Ausgabe = 'Hast du noch einen Nebenjob?';
                SpeechOut(Ausgabe);
  			Output("AusgabeFeld", Ausgabe, 'PC');
			N = true;
			Status = 11;
      		  }
  		if (( (Eingabe.indexOf('VOLLZEIT') == -1) && (Eingabe.indexOf('TEILZEIT') == -1) ) || ( (J === true) && (N === true) ))    //String ist unverstдndlich
      		  {
         	  	Ausgabe = 'Ich glaube ich habe das nicht genau verstanden! Kannst du das bitte nocheinmal wiederholen';
                SpeechOut(Ausgabe);
         		Output("AusgabeFeld", Ausgabe, 'PC');
      		  }
  		return 0;
	  }
	function Ebene8()
	  {
  		var Ausgabe;
  		Ausgabe = 'Was lernst du denn gerade?';
        SpeechOut(Ausgabe);
  		Output("AusgabeFeld", Ausgabe, 'PC');
  		Status = 9;
  		return 0;
	  }
	function Ebene9()
	  {
  		var Ausgabe;
		Ausgabe = 'Das klingt ziemlich kompliziert.';
        SpeechOut(Ausgabe);
		Output("AusgabeFeld", Ausgabe, 'PC');
		Ausgabe = 'In soetwas war ich noch nie besonders gut.';
        SpeechOut(Ausgabe);
		Output("AusgabeFeld", Ausgabe, 'PC');
		Ausgabe = 'Bist du mit deinen Lehrern zufrieden?';
        SpeechOut(Ausgabe);
		Output("AusgabeFeld", Ausgabe, 'PC');
		Status = 5;
  		return 0;
	  }
	function Ebene10()
	  { 
  		var Ausgabe;  
  		Beruf = getText("EingabeFeld");
  		Ausgabe = 'Was verdienst du als ' + Beruf + ' ?';
        SpeechOut(Ausgabe);
  		Output("AusgabeFeld", Ausgabe, 'PC');
  		Status = 12;
  		return 0;
	  }
	function Ebene11()
	  { 
  		var Ausgabe;
		var Eingabe;
		Eingabe = getYesNo("EingabeFeld");
		if (Eingabe == 'Ja')
      		  {
        		Ausgabe = 'Was ist dein Nebenjob?';
                SpeechOut(Ausgabe);
        		Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 10;
      		  }
   		else if (Eingabe == 'Nein')
     		  {
        		Ausgabe = 'Was bist du denn hauptberuflich?';
                SpeechOut(Ausgabe);
 			Output("AusgabeFeld", Ausgabe, 'PC');
        		Status = 10;
      		  }
    		else
      		  {
        		SpeechOut(Ausgabe);
                Output("AusgabeFeld", Eingabe, 'PC');
     		  }
  		return 0;
	  }
	function Ebene12()
	  {
  		var Ausgabe;
  		Ausgabe = 'Das klingt ziemlich gut.';
        SpeechOut(Ausgabe);
  		Output("AusgabeFeld", Ausgabe, 'PC');
  		Status = -1;
  		return 0;
	  }
	function ENDE()
	  {
    		var Ausgabe;  
    		Ausgabe = 'Danke, dass du dir die Zeit genommen hast. Ich hoffe wir sprechen uns bald wieder.';
        SpeechOut(Ausgabe);
    		Output("AusgabeFeld", Ausgabe, 'PC');
    		Status = -2;
  
    		return 0;
	  }
	function getText (ID)  					//fьr Text Eingaben
	  {
		//Deklaration und Initalisierung      	
		var Eingabe;                    //String in dem die Eingabe gespeichert wird
		//Eingabe lesen
		Eingabe = document.getElementById(ID).value;    	//ID: Input fьr Eingabefeld
  
		return Eingabe;
	  }
	function getYesNo (ID)					//fьr Entscheidungsfragen
	  {
		//Deklaration und Initalisierung
      		var Eingabe;
      		var J = false;
      		var N = false;
		var Entscheidung;
		//Eingabe lesen
      		Eingabe = document.getElementById(ID).value;    		//ID: Input fьr Eingabefeld
		//Eingabe Auswerten
    		Eingabe = Eingabe.toUpperCase();                         	//alles in GroЯbuchstaben umwandeln
		//Eingabe Verarbeiten
      		if (Eingabe.indexOf('JA') != -1)    //String enthдlt JA
      		  {
            		Entscheidung = 'Ja';
            		J = true;
      		  }
      		if (Eingabe.indexOf('NEIN') != -1)    //String enthдlt NEIN
      		  {
            		Entscheidung = 'Nein';
            		N = true;
      		  }
      		if (( (Eingabe.indexOf('JA') == -1) && (Eingabe.indexOf('NEIN') == -1) ) || ( (J === true) && (N === true) )) //String ist unverstдndlich
      		  {
            		Entscheidung = 'Ich glaube ich habe das nicht genau verstanden! Antworte bitte mit Ja oder Nein';
      		  }
		return Entscheidung;
	  }
	function Output (ID, Text, Who)				//Zur Text Ausgabe
	  {
  		var tbl = document.getElementById(ID);
  		var lastRow = tbl.rows.length;
  		var row = tbl.insertRow(lastRow);
  		// Zeile hinzufьgen
  		var cellLeft = row.insertCell(0);
  		var textNode = document.createTextNode(Who + ': ' + Text);
  		cellLeft.appendChild(textNode);	
  		return 0;
	  }
    function SpeechOut(Ausgabe)
      {
	    var msg=new SpeechSynthesisUtterance(Ausgabe);
	    msg.lang = 'de-DE';
	    msg.volume = 1; // 0 to 1
	    msg.rate = 0.7; // 0.1 to 10
	    msg.pitch = 1; //0 to 2
	    window.speechSynthesis.speak(msg);
      }
	function remove()
	  {
  		var tbl = document.getElementById('AusgabeFeld');
  		var lastRow = tbl.rows.length;
  		while (lastRow >= 1)
    		  {
      			tbl.deleteRow(lastRow-1);
      			lastRow = lastRow - 1;
    		  }
  		return 0;
	  }
}