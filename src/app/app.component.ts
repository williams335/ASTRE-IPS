import { Component } from '@angular/core';
import Chart from 'node_modules/chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  Questions: any[] = [
    {
      "Timestamp": "2020/10/16 2:37:13 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20173552,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "ENSIM'Elec",
      "5-Plutôt...": "Apple;Android",
      "6-Quel est ton personnage de fiction préféré ?": "TRUITEMan",
      "7-Que fais-tu de ton temps libre ?": "Musculation jeux vidéos ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Prison Break"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Php;Python;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:37:18 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20181588,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;ENSIM is running;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Dark Vador",
      "7-Que fais-tu de ton temps libre ?": "Conservatoire",
      "8-Quels sont tes films": {
        "séries préférées ?": "Avengers"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;HTML5 CSS;Php;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Jamais",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Régulièrement",
      "13-Que penses-tu de ? [Visual studio]": "Je suis fan",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Je n'aime pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Je n'aime pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "J'aime bien",
      "13-Que penses-tu de ? [Anaconda]": "Je suis fan",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:39:33 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20202834,
      "2-D'où viens tu ?": "Bretagne",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT;Licence",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;Abobinables",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Batman",
      "7-Que fais-tu de ton temps libre ?": "Je vois des potes",
      "8-Quels sont tes films": {
        "séries préférées ?": "Breaking bad"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Je n'aime pas",
      "13-Que penses-tu de ? [NotePad++]": "Je suis fan",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "J'aime bien",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Je n'aime pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:39:53 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20181973,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Infographie;ENSIM is running",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Thomas Shelby",
      "7-Que fais-tu de ton temps libre ?": "Se perdre sur youtube",
      "8-Quels sont tes films": {
        "séries préférées ?": "Peaky blinders, Breaking bad, Inception, interstellar"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome;Firefox;Edge",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:40:04 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 182457,
      "2-D'où viens tu ?": "France;Occitanie",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;Cultu;Infographie;MAO;ENSIMIEN;ENSIM is running;VASI;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Luffy",
      "7-Que fais-tu de ton temps libre ?": "Ne3ess",
      "8-Quels sont tes films": {
        "séries préférées ?": "Peaky Blinders, Got, les animes en general"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;C++;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu;Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas;J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je suis fan",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Je suis fan",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:40:23 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20173172,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "K'verne;Trublions du Plateau",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Le biberon des imbibés",
      "7-Que fais-tu de ton temps libre ?": "Je chill ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Rick et morty"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "J'aime bien",
      "13-Que penses-tu de ? [Anaconda]": "Je suis fan",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:40:30 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20182566,
      "2-D'où viens tu ?": "Maurice",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Infographie;ENSIMIEN",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Roland of Gilead",
      "7-Que fais-tu de ton temps libre ?": "Musique, ecriture, lecture... ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Peaky Blinders, Daredevil, inception"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Php;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Je n'aime pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Je n'aime pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:40:32 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205905,
      "2-D'où viens tu ?": "Maroc",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Licence",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Infographie;MAO",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Aucune idée ",
      "7-Que fais-tu de ton temps libre ?": "Jeux vidéos ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Prison break"
      },
      "9-Quel est ton navigateur préféré ?": "Opera",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:40:53 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20171421,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Trublions du Plateau",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Kirby",
      "7-Que fais-tu de ton temps libre ?": "Lecture",
      "8-Quels sont tes films": {
        "séries préférées ?": "Steven universe"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:41:13 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20183990,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDLC;Jensim;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Zeldo",
      "7-Que fais-tu de ton temps libre ?": "Je dors ",
      "8-Quels sont tes films": {
        "séries préférées ?": "En series stranger things et the oa"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Je n'aime pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:41:30 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20180975,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "ENSIM is running",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Link ",
      "7-Que fais-tu de ton temps libre ?": "Je joue et je programme ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Battle Royale , Star Wars , Marvel "
      },
      "9-Quel est ton navigateur préféré ?": "Opera;Opéra GX ( c pour les gamers ) ",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;C#;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Je suis fan",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Je suis fan",
      "13-Que penses-tu de ? [IntellJ]": "J'aime bien",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Je suis fan",
      "13-Que penses-tu de ? [UnrealEngine]": "Je n'aime pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Je suis fan",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:41:39 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20171166,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Oui;915",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;Trublions du Plateau;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Vivien Reid",
      "7-Que fais-tu de ton temps libre ?": "Magic // Ultimate frisbee",
      "8-Quels sont tes films": {
        "séries préférées ?": "Retour vers le futur / Hunger games / ..."
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:41:42 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 205196,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Trublions du Plateau;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Lucky Luke",
      "7-Que fais-tu de ton temps libre ?": "Des timelapses",
      "8-Quels sont tes films": {
        "séries préférées ?": "Rick et Morty"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;C#;HTML5 CSS;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "J'aime bien",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:43:08 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20181916,
      "2-D'où viens tu ?": "Sri Lanka",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;Infographie;MAO;KFET;Abobinables",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Diego de Umbrella Academy ",
      "7-Que fais-tu de ton temps libre ?": "Musique, Graphisme, Skate et sortir",
      "8-Quels sont tes films": {
        "séries préférées ?": "Umbrella Academy, End of the fucking World, Orphan Black Gatsby le magnifique "
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas;J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Je suis fan",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "J'aime bien"
    },
    {
      "Timestamp": "2020/10/16 2:45:32 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20202907,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prepa BL",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Oui;970",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDLC;Cultu;K'verne",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Nausicaa de la vallée du vent",
      "7-Que fais-tu de ton temps libre ?": "Je dessine et je lis",
      "8-Quels sont tes films": {
        "séries préférées ?": "Out of Africa/Peaky Blinders"
      },
      "9-Quel est ton navigateur préféré ?": "Safari",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;C++",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Windows]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas;J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:45:43 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205316,
      "2-D'où viens tu ?": "Bretagne",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prepa BL",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDLC;Jensim;MAO;GALA;K'verne;Trublions du Plateau",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Diane (dans Bojack Horseman)",
      "7-Que fais-tu de ton temps libre ?": "J'écoute de la musique et je jardine",
      "8-Quels sont tes films": {
        "séries préférées ?": "The magicians, dark, into the wild, Amélie Poulain"
      },
      "9-Quel est ton navigateur préféré ?": "Edge",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "HTML5 CSS",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "Connais pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:49:10 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205471,
      "2-D'où viens tu ?": "Cameroun",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;Infographie",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Sangoku",
      "7-Que fais-tu de ton temps libre ?": "Sport",
      "8-Quels sont tes films": {
        "séries préférées ?": "Breaking Bad"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Je suis fan",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "J'aime bien"
    },
    {
      "Timestamp": "2020/10/16 2:49:36 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205276,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prepa BL",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "980",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;BDLC;Jensim;Infographie;GALA;KFET;Trublions du Plateau;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Mara des Acoma (Guerres de la faille, Raymond E. FEIST)",
      "7-Que fais-tu de ton temps libre ?": "Discuter, dessiner, écrire, grimper, nager, lire, ecouter de la musique (beaucoup), glander, des maths, jeux videos, roller, VTT, courir, penser, observer, aider, traîner sur YouTube...",
      "8-Quels sont tes films": {
        "séries préférées ?": "Fringe (serie), Enigma, Porco Rosso..."
      },
      "9-Quel est ton navigateur préféré ?": "Firefox;Ghostery",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Je n'aime pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 2:51:32 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20184054,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Guts de Berserk",
      "7-Que fais-tu de ton temps libre ?": "Je m’instruis ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Altered Carbon, Black Mirror, Shutter Island, Minority Report"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 3:00:47 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20202842,
      "2-D'où viens tu ?": "Vietnam",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Oui",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;Infographie",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Spiderman",
      "7-Que fais-tu de ton temps libre ?": "Jouer aux jeux videos",
      "8-Quels sont tes films": {
        "séries préférées ?": "Des film d'action"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;C#;HTML5 CSS",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "J'aime bien",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Je n'aime pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Je n'aime pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 3:04:00 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 206001,
      "2-D'où viens tu ?": "Maroc",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;BDLC;Cultu;Jensim;Infographie;MAO;GALA;ENSIMIEN;KFET;ENSIM is running;K'verne;Trublions du Plateau;VASI;ENSIM'Elec;Abobinables",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Naruto",
      "7-Que fais-tu de ton temps libre ?": "Uhm uhm you know .... ...................................................des animes manhwas mangas league of legends",
      "8-Quels sont tes films": {
        "séries préférées ?": "The wolf of wallstreet / Dark"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Jamais",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "Connais pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 3:04:28 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205217,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prepa TSI",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Je ne sais pas encore. ",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Hachiman Hikigaya from Oregairu.",
      "7-Que fais-tu de ton temps libre ?": "Jeux vidéos et animés japonais. ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Breaking Bad, The Walking Dead, Game of Thrones. "
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 3:56:57 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 205468,
      "2-D'où viens tu ?": "Maroc",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;BDLC;Cultu;Jensim;Infographie;MAO;GALA;ENSIMIEN;KFET;ENSIM is running;K'verne;Trublions du Plateau;VASI;ENSIM'Elec;Abobinables",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Lucifer",
      "7-Que fais-tu de ton temps libre ?": "Sortir,dormir,améliorer mes compétences dans ce que j’aime faire, créer des apllications",
      "8-Quels sont tes films": {
        "séries préférées ?": "Breaking bad"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Jamais",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Jamais;Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Je suis fan",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Je n'aime pas"
    },
    {
      "Timestamp": "2020/10/16 4:09:09 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20206022,
      "2-D'où viens tu ?": "Nouvelle-Calédonie ",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT;Prépa ATS",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Oui",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Je ne sais pas",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Jhon wick",
      "7-Que fais-tu de ton temps libre ?": "Je lis des web novel, des mangas",
      "8-Quels sont tes films": {
        "séries préférées ?": "Solo leveling,jhon wick"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "J'aime bien",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 4:13:13 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20202888,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Infographie",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Garrius",
      "7-Que fais-tu de ton temps libre ?": "Lire, jouer à des jeux vidéo",
      "8-Quels sont tes films": {
        "séries préférées ?": "Interstellar"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Régulièrement",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "J'aime bien",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 4:13:15 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 197264,
      "2-D'où viens tu ?": "Cameroun",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Licence",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;ENSIMIEN;ENSIM'Elec",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Wonder Woman ",
      "7-Que fais-tu de ton temps libre ?": "Je médite ",
      "8-Quels sont tes films": {
        "séries préférées ?": "The catch"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "Je suis fan",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 4:27:28 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205281,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "BTS",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim",
      "5-Plutôt...": "Apple;Android",
      "6-Quel est ton personnage de fiction préféré ?": "Ironman",
      "7-Que fais-tu de ton temps libre ?": "Netflix, babbel, mooc, ...",
      "8-Quels sont tes films": {
        "séries préférées ?": " Series Marvel, films CAT8, films Hunger Games, films divergente, "
      },
      "9-Quel est ton navigateur préféré ?": "Chrome;Brave",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C#;HTML5 CSS;Php;Python;JavaScript;CMS",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Je suis fan",
      "13-Que penses-tu de ? [Eclipse]": "Je n'aime pas",
      "13-Que penses-tu de ? [IntellJ]": "Je suis fan",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Je n'aime pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 4:45:57 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 205266,
      "2-D'où viens tu ?": "Bretagne",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "BTS",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;KFET",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Jack Sparrow",
      "7-Que fais-tu de ton temps libre ?": "Skate, jeux, Netflix ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Fiche club/friend"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;C++",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Je n'aime pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 5:01:40 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 203085,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;K'verne;ENSIM is Gaming",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Braum",
      "7-Que fais-tu de ton temps libre ?": "Je suis avec mes amis, je joue, je lis etc",
      "8-Quels sont tes films": {
        "séries préférées ?": "Seigneur des Anneaux, Game of Thrones, Viking"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox;Opéra GX",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Régulièrement",
      "13-Que penses-tu de ? [Visual studio]": "Je suis fan",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 5:07:18 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20191920,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDLC",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Abe no Seimei",
      "7-Que fais-tu de ton temps libre ?": "Lecture, séries, tricot",
      "8-Quels sont tes films": {
        "séries préférées ?": "Seigneur des Anneaux, Doctor Who"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Un peu",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "J'aime bien",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/16 5:34:23 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 205371,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "DUT;1 année d'ingénieur après dut",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;BDLC;K'verne;Trublions du Plateau",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Gon",
      "7-Que fais-tu de ton temps libre ?": "Je regardes des vidéos",
      "8-Quels sont tes films": {
        "séries préférées ?": "Star wars, One piece, HxH"
      },
      "9-Quel est ton navigateur préféré ?": "Brave",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais;Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "Je n'aime pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "Je suis fan",
      "13-Que penses-tu de ? [Eclipse]": "Je n'aime pas",
      "13-Que penses-tu de ? [IntellJ]": "Je suis fan",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "J'aime bien",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/21 2:52:01 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205195,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Eragon",
      "7-Que fais-tu de ton temps libre ?": "Programmation et jeux vidéos ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Aucuns"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox;Brave",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;HTML5 CSS;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Un peu",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Je n'aime pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "Je n'aime pas",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Je suis fan",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Je n'aime pas",
      "13-Que penses-tu de ? [UnrealEngine]": "J'aime bien",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/21 5:08:45 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20182355,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "BDE;BDLC;MAO;ENSIMIEN;K'verne;VASI;ENSIM'Elec;Abobinables",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Rick Deckard",
      "7-Que fais-tu de ton temps libre ?": "Plein de choses",
      "8-Quels sont tes films": {
        "séries préférées ?": "Westworld, The eternal sunshine of the spotless mind"
      },
      "9-Quel est ton navigateur préféré ?": "Firefox",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;C++;C#;HTML5 CSS;Php;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Régulièrement"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Un peu",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Je n'aime pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Je n'aime pas",
      "13-Que penses-tu de ? [Eclipse]": "Je suis fan",
      "13-Que penses-tu de ? [IntellJ]": "J'aime bien",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "Je n'aime pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Je suis fan",
      "13-Que penses-tu de ? [Anaconda]": "Je suis fan",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/21 5:23:28 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20182116,
      "2-D'où viens tu ?": "France",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa intégrée",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;Trublions du Plateau;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Je sais pas trop ",
      "7-Que fais-tu de ton temps libre ?": "Je retrouve des amis",
      "8-Quels sont tes films": {
        "séries préférées ?": "Westworld, Handmaid's Tale, Dexter..."
      },
      "9-Quel est ton navigateur préféré ?": "Firefox;Opera",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C;HTML5 CSS;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Jamais",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Un peu",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Connais pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/21 5:29:00 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205886,
      "2-D'où viens tu ?": "Tunisie",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "Jensim;KFET;ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Killua (hxh)",
      "7-Que fais-tu de ton temps libre ?": "Jeux videos",
      "8-Quels sont tes films": {
        "séries préférées ?": "Got /Breaking bad /Lucifer/Peaky blinders/"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "C++;Python",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Un peu;Régulièrement;Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Un peu",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Jamais",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Connais pas",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "Connais pas",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "J'aime bien",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Connais pas",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "J'aime bien",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/22 10:55:16 AM GMT+1",
      "1-Quel est ton numéro étudiant ?": 205361,
      "2-D'où viens tu ?": "Maroc",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Licence",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Non",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "ENSIM'Elec",
      "5-Plutôt...": "Apple",
      "6-Quel est ton personnage de fiction préféré ?": "Gen xmen",
      "7-Que fais-tu de ton temps libre ?": "Sport",
      "8-Quels sont tes films": {
        "séries préférées ?": "Casa de papel"
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;Python;JavaScript;Assembleur",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Jamais"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Un peu",
      "11-As-tu déjà utilisé ? [Windows]": "Tout le temps",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Jamais",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Régulièrement",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Un peu",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Jamais",
      "13-Que penses-tu de ? [Visual studio]": "Connais pas",
      "13-Que penses-tu de ? [NotePad++]": "Je n'aime pas",
      "13-Que penses-tu de ? [Codblock]": "Je suis fan",
      "13-Que penses-tu de ? [AndroidStudio]": "J'aime bien",
      "13-Que penses-tu de ? [Eclipse]": "Je suis fan",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "Je suis fan",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je suis fan",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    },
    {
      "Timestamp": "2020/10/22 6:08:10 PM GMT+1",
      "1-Quel est ton numéro étudiant ?": 20205322,
      "2-D'où viens tu ?": "Benin",
      "3-Quel parcours avez vous fait avant d’intégrer l'ensim": "Prépa classique;Licence",
      "4-As-tu déjà passé le TOEIC ? Tu peux mettre ton score dans autre": "Oui",
      "5-Quelles sont les associations de l'ensim qui t’intéresse ?": "ENSIM'Elec",
      "5-Plutôt...": "Android",
      "6-Quel est ton personnage de fiction préféré ?": "Christian Grey ",
      "7-Que fais-tu de ton temps libre ?": "Je code ",
      "8-Quels sont tes films": {
        "séries préférées ?": "Élite "
      },
      "9-Quel est ton navigateur préféré ?": "Chrome",
      "10-Quel langage de programmation as-tu déjà utilisé ?": "Java;C;HTML5 CSS;Php;Python;JavaScript",
      "11-As-tu déjà utilisé ? [Une carte Arduino": {
        "Raspberry]": "Un peu"
      },
      "11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]": "Un peu",
      "11-As-tu déjà utilisé ? [Linux]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Mac]": "Jamais",
      "11-As-tu déjà utilisé ? [Windows]": "Régulièrement",
      "11-As-tu déjà utilisé ? [Des logiciels de montage vidéo]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de CAO (solidworks)]": "Un peu",
      "11-As-tu déjà utilisé ? [Des logiciels de création de jeux vidéos (Unity, Unreal)]": "Jamais",
      "12-As-tu déjà réalisé ? [Des logos]": "Jamais",
      "12-As-tu déjà réalisé ? [Un robot]": "Jamais",
      "12-As-tu déjà réalisé ? [Une application mobile]": "Jamais",
      "12-As-tu déjà réalisé ? [Un jeu video]": "Jamais",
      "12-As-tu déjà réalisé ? [Un logiciel sur pc]": "Un peu",
      "12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]": "Un peu",
      "13-Que penses-tu de ? [Visual studio]": "J'aime bien",
      "13-Que penses-tu de ? [NotePad++]": "J'aime bien",
      "13-Que penses-tu de ? [Codblock]": "J'aime bien",
      "13-Que penses-tu de ? [AndroidStudio]": "Connais pas",
      "13-Que penses-tu de ? [Eclipse]": "J'aime bien",
      "13-Que penses-tu de ? [IntellJ]": "Connais pas",
      "13-Que penses-tu de ? [LabView]": "Connais pas",
      "13-Que penses-tu de ? [Unity]": "Connais pas",
      "13-Que penses-tu de ? [UnrealEngine]": "Connais pas",
      "13-Que penses-tu de ? [SublimeText]": "J'aime bien",
      "13-Que penses-tu de ? [Atom]": "Connais pas",
      "13-Que penses-tu de ? [Anaconda]": "Je n'aime pas",
      "13-Que penses-tu de ? [Ionic]": "Connais pas"
    }
  ];


  Schart: boolean = false;

  SElec: number = -2;
  SJensim: number = 2;
  SRunning: number = -2;
  SLangWeb: number = 2;
  SlangMats: number = -2;

  SPaintPhotoshop_Regu: number = 16;
  SPaintPhotoshop_Unpeu: number = 8;
  SPaintPhotoshop_Jamais: number = -15;

  SLinux_Regu: number = -12;
  SLinux_Unpeu: number = -5;
  SLinux_Jamais: number = 11;

  SArduino_Regu: number = -15;
  SArduino_Unpeu: number = -8;
  SArduino_Jamais: number = 12;

  SLogicielpc_Regu: number = 16;
  SLogicielpc_Unpeu: number = 8;
  SLogicielpc_Jamais: number = -12;

  SLogos_Regu: number = 16;
  SLogos_Unpeu: number = 7;
  SLogos_Jamais: number = -15;

  SRobots_Regu: number = -16;
  SRobots_Unpeu: number = -8;
  SRobots_Jamais: number = 12;

  SElec_Regu: number = -16;
  SElec_Unpeu: number = -8;
  SElec_Jamais: number = 12;

  title = 'ASTRE-IPS';
  
  val;
  tests;

  Scores: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  Score1: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score3: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score4: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score5: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score6: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score7: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score8: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  Score9: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //Scores: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  

  Etudiants: number[] = [];
  Etudiants1: number[] = [];
  
  
  constructor() {
    for (var index in this.Questions) {
      console.log(index); // prints indexes: 0, 1, 2, 3
      this.val = this.Questions[index]["1-Quel est ton numéro étudiant ?"];
      this.tests = this.Questions[index]["1-Quel est ton numéro étudiant ?"].toString();
      console.log(this.val); // prints elements: 10, 20, 30, 40
      this.Etudiants.push(this.val);
      this.Etudiants1.push(this.tests);
      
    }
    console.log("Etudiants " + this.Etudiants);
  }
  

  hypothese: string;
  cover: File;

  onChangedSElec(event: any) {
    this.SElec = event.target.value;
    console.log("SElec" + this.SElec);
  }

  onChangedSJensim(event: any) {
    this.SJensim = event.target.value;
    console.log("SJensim" + this.SJensim);
  }

  onChangedSRunning(event: any) {
    this.SRunning = event.target.value;
    console.log("SRunning" + this.SRunning);
  }

  onChangedSLangWeb(event: any) {
    this.SLangWeb = event.target.value;
    console.log("SLangWeb" + this.SLangWeb);
  }

  onChangedSlangMats(event: any) {
    this.SlangMats = event.target.value;
    console.log("SlangMats" + this.SlangMats);
  }

  onChangedSPaintPhotoshop_Regu(event: any) {
    this.SPaintPhotoshop_Regu = event.target.value;
    console.log("SPaintPhotoshop_Regu" + this.SPaintPhotoshop_Regu);
  }

  onChangedSPaintPhotoshop_Unpeu(event: any) {
    this.SPaintPhotoshop_Unpeu = event.target.value;
    console.log("SPaintPhotoshop_Unpeu" + this.SPaintPhotoshop_Unpeu);
  }

  onChangedSPaintPhotoshop_Jamais(event: any) {
    this.SPaintPhotoshop_Jamais = event.target.value;
    console.log("SPaintPhotoshop_Jamais" + this.SPaintPhotoshop_Jamais);
  }

  onChangedSLinux_Regu(event: any) {
    this.SLinux_Regu = event.target.value;
    console.log("SLinux_Regu" + this.SLinux_Regu);
  }


  onChangedSLinux_Unpeu(event: any) {
    this.SLinux_Unpeu = event.target.value;
    console.log("SLinux_Unpeu" + this.SLinux_Unpeu);
  }

  onChangedSLinux_Jamais(event: any) {
    this.SLinux_Jamais = event.target.value;
    console.log("SLinux_Jamais" + this.SLinux_Jamais);
  }

  onChangedSArduino_Regu(event: any) {
    this.SArduino_Regu = event.target.value;
    console.log("SArduino_Regu" + this.SArduino_Regu);
  }

  onChangedSArduino_Unpeu(event: any) {
    this.SArduino_Unpeu = event.target.value;
    console.log("SArduino_Unpeu" + this.SArduino_Unpeu);
  }

  onChangedSArduino_Jamais(event: any) {
    this.SArduino_Jamais = event.target.value;
    console.log("SArduino_Jamais" + this.SArduino_Jamais);
  }

  onChangedSLogicielpc_Regu(event: any) {
    this.SLogicielpc_Regu = event.target.value;
    console.log("SLogicielpc_Regu" + this.SLogicielpc_Regu);
  }

  onChangedSSLogicielpc_Unpeu(event: any) {
    this.SLogicielpc_Unpeu = event.target.value;
    console.log("SLogicielpc_Unpeu" + this.SLogicielpc_Unpeu);
  }

  onChangedSLogicielpc_Jamais(event: any) {
    this.SLogicielpc_Jamais = event.target.value;
    console.log("SLogicielpc_Jamais" + this.SLogicielpc_Jamais);
  }

  onChangedSLogos_Regu(event: any) {
    this.SLogos_Regu = event.target.value;
    console.log("SLogos_Regu" + this.SLogos_Regu);
  }

  onChangedSLogos_Unpeu(event: any) {
    this.SLogos_Unpeu = event.target.value;
    console.log("SLogos_Unpeu" + this.SLogos_Unpeu);
  }

  onChangedSLogos_Jamais(event: any) {
    this.SLogos_Jamais = event.target.value;
    console.log("SLogos_Jamais" + this.SLogos_Jamais);
  }

  onChangedSRobots_Regu(event: any) {
    this.SRobots_Regu = event.target.value;
    console.log("SRobots_Regu" + this.SRobots_Regu);
  }

  onChangedSRobots_Unpeu(event: any) {
    this.SRobots_Unpeu = event.target.value;
    console.log("SRobots_Unpeu" + this.SRobots_Unpeu);
  }

  onChangedSRobots_Jamais(event: any) {
    this.SRobots_Jamais = event.target.value;
    console.log("SRobots_Jamais" + this.SRobots_Jamais);
  }

  onChangedSElec_Regu(event: any) {
    this.SElec_Regu = event.target.value;
    console.log("SElec_Regu" + this.SElec_Regu);
  }

  onChangedSElec_Unpeu(event: any) {
    this.SElec_Unpeu = event.target.value;
    console.log("SElec_Unpeu" + this.SElec_Unpeu);
  }

  onChangedSElec_Jamais(event: any) {
    this.SElec_Jamais = event.target.value;
    console.log("SElec_Jamais" + this.SElec_Jamais);
  }

  


  Prediction() {
    this.Schart = true;
    console.log("Elec " + this.SElec);
    console.log(JSON.stringify(this.Questions));
    console.log(this.Questions);
    console.log(this.Questions[0]);

    for (var index in this.Questions) {
      console.log(index); // prints indexes: 0, 1, 2, 3
      const val1 = this.Questions[index]["1-Quel est ton numéro étudiant ?"];
      if (this.Etudiants[index] == val1) {
        
        
        const val2 = this.Questions[index]["5-Quelles sont les associations de l'ensim qui t’intéresse ?"];
        console.log("val2 " + val2);
        
        const val3 = this.Questions[index]["10-Quel langage de programmation as-tu déjà utilisé ?"];
        console.log("val3 " + val3);

        const val4 = this.Questions[index]["11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]"];
        console.log("val4 " + val4);

        const val5 = this.Questions[index]["11-As-tu déjà utilisé ? [Linux]"];
        console.log("val5 " + val5);

        const val6 = this.Questions[index]["11-As-tu déjà utilisé ? [Une carte Arduino"]["Raspberry]"];
        console.log("val6 " + val6);

        const val7 = this.Questions[index]["12-As-tu déjà réalisé ? [Un logiciel sur pc]"];
        console.log("val7 " + val7);

        const val8 = this.Questions[index]["12-As-tu déjà réalisé ? [Des logos]"];
        console.log("val8 " + val8);

        const val9 = this.Questions[index]["12-As-tu déjà réalisé ? [Un robot]"];
        console.log("val9 " + val9);

        const val10 = this.Questions[index]["12-As-tu déjà réalisé ? [Un robot]"];
        console.log("val10 " + val10);
        
        const findTerm = (term) => {
          if (val2.includes(term)) {
            return val2;
          }
        };
        
        const findTerm2 = (term) => {
          if (val3.includes(term)) {
            return val3;
          }
        };

        switch (val2) {
          case findTerm("ENSIM'Elec"):
            console.log("It is ENSIM'Elec.");
            this.Score1[index] = Number(this.Score1[index]) + Number(this.SElec);
            console.log("Score1: " + this.Score1[index]);
            break;
          case findTerm("Jensim"):
            console.log("It is Jensim.");
            this.Score1[index] = Number(this.Score1[index]) + Number(this.SJensim);
            console.log("Score1: " + this.Score1[index]);
            break;
          case findTerm("running"):
            console.log("It is Ensim running.");
            this.Score1[index] = Number(this.Score1[index]) + Number(this.SRunning);
            console.log("Score1: " + this.Score1[index]);
            break;
          default:
            console.log("No such item exists!");
            break;
        }
        
        switch (val3) {
          case findTerm2("HTML5 CSS"):
            console.log("It is HTML5 CSS.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SLangWeb);
            console.log("Score2: " + this.Score2[index]);
            break;
          case findTerm2("Python"):
            console.log("It is Python.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SLangWeb);
            console.log("Score2: " + this.Score2[index]);
            break;
          case findTerm2("Php"):
            console.log("It is Php.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SLangWeb);
            console.log("Score2: " + this.Score2[index]);
            break;
          case findTerm2("C"):
            console.log("It is C.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SlangMats);
            console.log("Score2: " + this.Score2[index]);
            break;
          case findTerm2("C++"):
            console.log("It is C++.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SlangMats);
            console.log("Score2: " + this.Score2[index]);
            break;
          case findTerm2("Assembleur"):
            console.log("It is Assembleur.");
            this.Score2[index] = Number(this.Score2[index]) + Number(this.SlangMats);
            console.log("Score2: " + this.Score2[index]);
            break;
          default:
            console.log("No such item exists!");
            break;
        }
        
        switch (val4) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score3[index] = Number(this.Score3[index]) + Number(this.SPaintPhotoshop_Regu);
            console.log("Score3: " + this.Score3[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score3[index] = Number(this.Score3[index]) + Number(this.SPaintPhotoshop_Unpeu);
            console.log("Score3: " + this.Score3[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score3[index] = Number(this.Score3[index]) + Number(this.SPaintPhotoshop_Jamais);
            console.log("Score3: " + this.Score3[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score3[index] = Number(this.Score3[index]) + Number(this.SPaintPhotoshop_Unpeu);
            break;
        }

        switch (val5) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score4[index] = Number(this.Score4[index]) + Number(this.SLinux_Regu);
            console.log("Score4: " + this.Score4[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score4[index] = Number(this.Score4[index]) + Number(this.SLinux_Unpeu);
            console.log("Score4: " + this.Score4[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score4[index] = Number(this.Score4[index]) + Number(this.SLinux_Jamais);
            console.log("Score4: " + this.Score4[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score4[index] = Number(this.Score4[index]) + Number(this.SLinux_Unpeu);
            break;
        }

        switch (val6) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score5[index] = Number(this.Score5[index]) + Number(this.SArduino_Regu);
            console.log("Score5: " + this.Score5[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score5[index] = Number(this.Score5[index]) + Number(this.SArduino_Unpeu);
            console.log("Score5: " + this.Score5[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score5[index] = Number(this.Score5[index]) + Number(this.SArduino_Jamais);
            console.log("Score5: " + this.Score5[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score5[index] = Number(this.Score5[index]) + Number(this.SArduino_Unpeu);
            break;
        }

        switch (val7) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score6[index] = Number(this.Score6[index]) + Number(this.SLogicielpc_Regu);
            console.log("Score6: " + this.Score6[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score6[index] = Number(this.Score6[index]) + Number(this.SLogicielpc_Unpeu);
            console.log("Score6: " + this.Score6[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score6[index] = Number(this.Score6[index]) + Number(this.SLogicielpc_Jamais);
            console.log("Score6: " + this.Score6[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score6[index] = Number(this.Score6[index]) + Number(this.SLogicielpc_Unpeu);
            break;
        }

        switch (val8) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score7[index] = Number(this.Score7[index]) + Number(this.SLogos_Regu);
            console.log("Score7: " + this.Score7[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score7[index] = Number(this.Score7[index]) + Number(this.SLogos_Unpeu);
            console.log("Score7: " + this.Score7[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score7[index] = Number(this.Score7[index]) + Number(this.SLogos_Jamais);
            console.log("Score7: " + this.Score7[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score7[index] = Number(this.Score7[index]) + Number(this.SLogos_Unpeu);
            break;
        }

        switch (val9) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score8[index] = Number(this.Score8[index]) + Number(this.SRobots_Regu);
            console.log("Score8: " + this.Score8[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score8[index] = Number(this.Score8[index]) + Number(this.SRobots_Unpeu);
            console.log("Score8: " + this.Score8[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score8[index] = Number(this.Score8[index]) + Number(this.SRobots_Jamais);
            console.log("Score8: " + this.Score8[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score8[index] = Number(this.Score8[index]) + Number(this.SRobots_Unpeu);
            break;
        }

        switch (val10) {
          case "Régulièrement":
            console.log("It is Régulièrement.");
            this.Score9[index] = Number(this.Score9[index]) + Number(this.SElec_Regu);
            console.log("Score9: " + this.Score9[index]);
            break;
          case "Un peu":
            console.log("It is Un peu.");
            this.Score9[index] = Number(this.Score9[index]) + Number(this.SElec_Unpeu);
            console.log("Score9: " + this.Score9[index]);
            break;
          case "Jamais":
            console.log("It is Jamais.");
            this.Score9[index] = Number(this.Score9[index]) + Number(this.SElec_Jamais);
            console.log("Score9: " + this.Score9[index]);
            break;
          default:
            console.log("No such item exists!");
            this.Score9[index] = Number(this.Score9[index]) + Number(this.SElec_Unpeu);
            break;
        }
        
        
      }
      
      
    }

      console.log("Etudiants " + this.Etudiants);
      console.log("Scores " + this.Scores);
      console.log("Score1 " + this.Score1);
      console.log("Score2 " + this.Score2);
      console.log("Score3 " + this.Score3);
      console.log("Score4 " + this.Score4);
      console.log("Score5 " + this.Score5);
      console.log("Score6 " + this.Score6);
      console.log("Score7 " + this.Score7);
      console.log("Score8 " + this.Score8);
      console.log("Score9 " + this.Score9);
    
     
      for (var index in this.Scores) {
        console.log(index); // prints indexes: 0, 1, 2, 3
        this.Scores[index] = Number(this.Score1[index]) + Number(this.Score2[index]) +Number(this.Score3[index]) +Number(this.Score4[index]) +Number(this.Score5[index]) +Number(this.Score6[index]) +Number(this.Score7[index]) +Number(this.Score8[index]) +Number(this.Score9[index]);
        console.log(this.Scores[index]); // prints elements: 10, 20, 30, 40
        //this.Etudiants.push(this.val);
        
      }
      console.log("Scores " + this.Scores);
    
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: this.Etudiants,
            datasets: [{
                label: 'Score',
                data: this.Scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  
  }

}