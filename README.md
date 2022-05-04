# Prüfungsaufgaben
### Beschreibt ein konkretes Anwendungsszenario für den entwickelten Service und schildert (in wenigen Worten) eine mögliche Gesamt-Architektur in welcher sich dieser befinden könnte.

Unser Service kann für jeden der gerne zockt verwendet werden. Der Service ermöglicht dem Nutzer momentane kostenlose Spiele in die Datenbank einzupflegen, sie abzurufen, zu ändern und wieder zu löschen. 

Ein weiterer Punkt sind die bald verfügbaren Spiele. Diese zeigt die kommenden kostenlosen Spiele. Diese können aufgerufen, gelöscht und verändert werden. 

Die letzte Funktion bietet eine Freundesfunktion. In dieser wird ein Überblick über die Freunde gegeben, sowie der Benutzername, Onlinestatus, Alter, Geschlecht sowie eine Kurzbeschreibung. 

Hier liegt eine Schichtenarchitektur im Sinne von drei Schichten: 

Die erste Schicht ist die Darstellungsschicht, welche die Darstellung der Webseite, sprich des Frontends, ermöglicht. 
Die zweite Schicht ist die Business-Logik-Schicht, damit gemeint ist das Backend, welche die ganze Logik und Funktion des Systems aufweist.
Die dritte und letzte Schicht ist die Datenschicht, also das Speichern und Ändern der Daten in einer Datenbank, in dem Fall MongoDB.

### Welche Probleme können entstehen, wenn der entwickelte Service von mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie mögliche Lösungen.

Problem: Durch eine Vielzahl an Anfragen könnte das System überlasten und abstürzen. 
Lösung: Durch Anwendung einer Queue können Aufrufe nicht direkt an diesen übermittelt werden, sondern werden in einer Warteschlange zwischengespeichert.
Durch diese Art von Speicherung kann der Ausfall des Services vermieden werden. Die Queue arbeitet im Prinzip wie ein Buffer der automatisch befüllt wird, bis die gewünschte Anzahl paralleler Requests erreicht wird.  

Problem: Ein weiteres Problem könnten gleichzeitige Zugriffe zweier Personen auf das gleiche Dokument sein. Sollten beide Parteien in dieser Situation Änderungen am Dokument vornehmen, würde die Änderung der ersten Person durch die Änderung der zweiten Person überschrieben werden, ohne, dass die erste Person dies unmittelbar mitbekommt.
Lösung: Gelöst werden könnte dieses Problem, indem das passende Datenbank-Isolationslevel und Locks genutzt werden, die verhindern, dass an durch Zugriffe gesperrte Dokumente Änderungen vorgenommen werden können.

### Was ist abseits der reinen Programmierung für die Produktivsetzung des entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und führe diese in ein paar Sätzen aus.

Abseits der reinen Programmierung gilt Wartung, Testen, Planung und Durchführung zu beachten. Besonders zu beachten gilt, ob die Anbindung an das Frontend und die Datenbank funktioniert. 
Durch GET, POST, PUT, DELETE Abfragen wäre eine Überprüfung möglich und somit wäre gewährleistet, dass eine Anbindung stattgefunden hat. 

Ein weiterer Aspekt ist die Benutzeroberfläche (UI), da dies die einzige Berührungsstelle zwischen Anwender und Software ist. Daher ist auch die Gestaltung sorgfältig zu planen. Dies kann über ein Blatt Papier und Stift oder PowerPoint erfolgen. Bevor eine UI programmiert wird, sollte feststehen, wie dieser auszusehen hat. 