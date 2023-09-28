const [deck, setDeck] = useState(
  JSON.parse(localStorage.getItem("deck")) || []
);
//const [selectedCard, setSelectedCard] = useState(null)

function randomizeDeck(array) {
  let length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  
  }

  return array;
}

function setElementsOfDeck(array) {
  let deckArr = [];
  for (let index = 0; index < array.length; index++) {
    let elem = {
      id: "id",
      name: "name",
      selected: false,
      isMatched: false,
    };
    elem.id = index;
    elem.name = array[index].name;
    //elem.url = array[index].url;
    deckArr.push(elem);
  }

  for (let index = array.length; index < array.length * 2; index++) {
    let elem = {
      id: "id",
      name: "name",
      selected: false,
      isMatched: false,
    };
    elem.id = index;
    elem.name = array[index - array.length].name;
    //elem.url = array[index - array.length].url;
    deckArr.push(elem);
  }
  return randomizeDeck(deckArr);



  function possibleSolution(arr) {
    const solution = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].name === arr[j].name) {
          solution.push([i, j]);
        }
      }
    }
    console.log(solution.flat());
  }
}

useEffect(() => {
  if (!deck.length > 0) {
    const getData = async () => {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
        const data = await resp.json();
        const elements = setElementsOfDeck(data.results);
        setDeck(elements);
        localStorage.setItem("deck", JSON.stringify(elements));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
}, []);
