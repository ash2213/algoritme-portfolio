Den gennemgår arrayet fra venstre mod højre, sammenligner to naboelementer og bytter dem, hvis de står forkert.
Hver gang der byttes, går algoritmen ét skridt tilbage; hvis der ikke skal byttes, går den ét skridt frem. Det fortsætter, indtil hele listen er sorteret.

https://en.wikipedia.org/wiki/Gnome_sort

O(n^2)
I værste fald står listen helt blandet.
For hvert element kan gnome sort være nødt til at gå flere skridt tilbage og lave en række bytte-operationer, næsten som en bubble/insertion sort.
Når mange elementer skal flyttes langt, ender vi med cirka “n gange n” sammenligninger og bytter.
