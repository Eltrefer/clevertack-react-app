import './css/normalize.css';
import './App.css';
import './css/modal.css'

import Search from "./Components/Search";


function App() {

  const switch_theme = () => {
    const app_theme = document.querySelector('.App');
   
    app_theme.classList.toggle("light");
    app_theme.classList.toggle("dark");
  };

  const props = [
    { id: '1', name: "Spider-man",
      description: {
        description_text: "Укушенный радиоактивным пауком, старшеклассник Питер Паркер обрел скорость, силу и силу паука. Приняв имя Человек-паук, Питер надеялся начать карьеру, используя свои новые способности. Наученный тому, что с большой силой приходит большая ответственность, Паук поклялся использовать свои силы, чтобы помогать людям.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'
    },
    { id: '2', name: "Batman",
      description: {
        description_text: "После двух лет поисков правосудия на улицах Готэма для своих сограждан Бэтмен становится олицетворением беспощадного возмездия. Когда в городе происходит серия жестоких нападений на представителей элиты, загадочные улики приводят Брюса Уэйна в самые темные закоулки преступного мира, где он встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость во имя Готэма.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415c73ae-5d9b-4a66-9155-589f0f5199a3/d9tvd1s-1c9b5d19-23ad-437a-bff4-9b16240baabf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxNWM3M2FlLTVkOWItNGE2Ni05MTU1LTU4OWYwZjUxOTlhM1wvZDl0dmQxcy0xYzliNWQxOS0yM2FkLTQzN2EtYmZmNC05YjE2MjQwYmFhYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yNFFYgwZE6u-35TkCYxr0_fTkZ-IRN44DHWAuxIyVes" },
    { id: '3', name: "Logan",
      description: {
        description_text: 'Рожденный со сверхчеловеческими чувствами и способностью исцелять практически от любой раны, Росомаха был захвачен тайной канадской организацией и получил нерушимый скелет и когти. С ним обращались как с животным, и ему потребовались годы, чтобы взять себя в руки. Теперь он является премьером как "Людей Икс", так и "Мстителей".',
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg" },
    { id: '4', name: "Maybe baby",
      description: {
        description_text: "Мэйби Бэйби — российская и белорусская певица, участница российской группы «Френдзона».",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/1c8c48fe1b6/512756586e2699ddc8546/ios_large_1611156327_image.jpg" },
    { id: '5', name: "Thor",
      description: {
        description_text: "Будучи скандинавским богом грома и молнии, Тор владеет одним из величайших видов оружия, когда-либо созданных, - заколдованным молотом Мьельниром. В то время как другие описывали Тора как чрезмерно мускулистого, туповатого идиота, он довольно умен и сострадательен. Он уверен в себе и никогда, никогда не перестанет бороться за достойное дело.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg" },
      { id: '6', name: "Hulk",
      description: {
        description_text: "Попав во время взрыва гамма-бомбы, пытаясь спасти жизнь подростка, доктор Брюс Баннер превратился в невероятно мощное существо по имени Халк. Слишком часто неправильно понимаемый герой, чем злее становится Халк, тем сильнее становится Халк.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg" },
      { id: '7', name: "Deadpull",
      description: {
        description_text: "Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура постоянно меняется, а здравомыслие сомнительно. Всё, чего хочет Уилсон, — держаться на плаву в социальной выгребной яме. Но течение в ней слишком быстрое.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg" },
      { id: '8', name: "Captan America",
      description: {
        description_text: "Поклявшись служить своей стране во что бы то ни стало, молодой Стив Роджерс принял сыворотку суперсолдата, чтобы стать американской армией из одного человека. Сражаясь за красно-бело-синих на протяжении более 60 лет, Капитан Америка является живым, дышащим символом свободы и свободы.",
        comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
      },
      img: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg" },
  ];

  return (
    <div className="App dark">
      <Search details={props}/>
      <button className='switch-button' onClick={switch_theme} >GHgjjgjgjg</button>
    </div>
  );
}

export default App;
