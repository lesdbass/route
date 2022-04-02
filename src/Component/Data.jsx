export const  Movie=  [
            {
                id : "01",
                title: "The Unbearable" ,
                description : "Nicolas Cage stars as... Nick Cage in the action-comedy The Unbearable Weight of Massive Talent. Creatively unfulfilled and facing financial ruin." , 
                posterURL :  "./images/The Unbearable.jpg", 
                rating : 60,
                trailer:"https://www.youtube.com/embed/ffiW0PjCPnE",
                descrip:"Nicolas Cage stars as... Nick Cage in the action-comedy The Unbearable Weight of Massive Talent. Creatively unfulfilled and facing financial ruin, the fictionalized version of Cage must accept a $1 million offer to attend the birthday of a dangerous superfan Pedro Pascal. Things take a wildly unexpected turn when Cage is recruited by a CIA operative Tiffany Haddish and forced to live up to his own legend, channeling his most iconic and beloved on-screen characters in order to save himself and his loved ones. With a career built for this very moment, the seminal award-winning actor must take on the role of a lifetime: Nicolas Cage."
            },
            {
                id : "02",
                title: "Puss in Boots" ,
                description : "Academy Award® nominee Antonio Banderas returns as the voice of the notorious PiB as he embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore his lost lives." , 
                posterURL :  "./images/Puss in Boots.jpg", 
                rating : 40,
                trailer:"https://www.youtube.com/embed/xgZLXyqbYOc",
                descrip:"Puss in Boots is a 2011 American computer-animated comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. DreamWorks Animation's 24th feature film, it is directed by Chris Miller, who also directed Shrek the Third 2007, from a screenplay by Tom Wheeler and a story by Brian Lynch, Will Davies, and Wheeler. It stars Antonio Banderas, Salma Hayek, Zach Galifianakis, Billy Bob Thornton, and Amy Sedaris."
            },
            {
                id : "03",
                title: "Elvis" ,
                description : "The film explores the life and music of Elvis Presley (Butler), seen through the prism of his complicated relationship with his enigmatic manager." , 
                posterURL :  "./images/Elvis.jpg", 
                rating : 90,
                trailer:"https://www.youtube.com/embed/wBDLRvjHVOY",
                descrip:"La vie et l'œuvre musicale d'Elvis Presley à travers le prisme de ses rapports complexes avec son mystérieux manager, le colonel Tom Parker. Le film explorera leurs relations sur une vingtaine d'années, de l'ascension du chanteur à son statut de star inégalé, sur fond de bouleversements culturels et de la découverte par l'Amérique de la fin de l'innocence."
            },
            {
                id : "04",
                title: "Dakota" ,
                description : "Nicolas Cage stars as... Nick Cage in the action-comedy The Unbearable Weight of Massive Talent. Creatively unfulfilled and facing financial ruin." , 
                posterURL :  "./images/Dakota.jpg", 
                rating : 10,
                trailer:"https://www.youtube.com/embed/nEC9ZcV-ehk",
                descrip:"Kate a perdu son mari lors de la guerre en Afghanistan. Elle se bat à présent pour entretenir sa ferme dans une petite ville avec sa fille. Parallèlement, un soldat cherche à tenir sa promesse en ramenant à la maison le meilleur ami du défunt, un chien du nom de Dakota."
            },
            {
                id : "05",
                title: "The Batman" ,
                description : "From Warner Bros. Pictures comes The Batman, with director Matt Reeves (the “Planet of the Apes” films) at the helm and with Robert Pattinson (“Tenet" , 
                posterURL :  "./images/The Batman.jpg", 
                rating : 70,
                trailer:"https://www.youtube.com/embed/mqqft2x_Aa4",
                descrip:"Deux années à arpenter les rues en tant que Batman et à insuffler la peur chez les criminels ont mené Bruce Wayne au coeur des ténèbres de Gotham City. Avec seulement quelques alliés de confiance - Alfred Pennyworth, le lieutenant James Gordon - parmi le réseau corrompu de fonctionnaires et de personnalités de la ville, le justicier solitaire s'est imposé comme la seule incarnation de la vengeance parmi ses concitoyens. Lorsqu'un tueur s'en prend à l'élite de Gotham par une série de machinations sadiques, une piste d'indices cryptiques envoie le plus grand détective du monde sur une enquête dans la pègre, où il rencontre des personnages tels que Selina Kyle, alias Catwoman, Oswald Cobblepot, alias le Pingouin, Carmine Falcone et Edward Nashton, alias l’Homme-Mystère. Alors que les preuves s’accumulent et que l'ampleur des plans du coupable devient clair, Batman doit forger de nouvelles relations, démasquer le coupable et rétablir un semblant de justice au milieu de l’abus de pouvoir et de corruption sévissant à Gotham City depuis longtemps."
            },
            {
                id : "06",
                title: "American Underdog" ,
                description : "American Underdog tells the inspirational true story of Kurt Warner (Zachary Levi), who went from a stockboy at a grocery store to a two-time NFL MVP." , 
                posterURL :  "./images/American Underdog.jpg", 
                rating : 100,
                trailer:"https://www.youtube.com/embed/koqQnyGeKbs",
                descrip:"L'histoire du joueur par excellence de la NFL et quart-arrière du Temple de la renommée Kurt Warner, qui est passé des rayons d'un supermarché à devenir une star du football américain."
            },

        ]


        export function getMovie(number) {
            return Movie.find(
              (Movie) => Movie.id === number
            );
          }
