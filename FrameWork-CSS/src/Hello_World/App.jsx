import {Card, Title, Title2, Text} from './App'

const App = () => {
  return(
    <Card>
      <Title>Hello World!</Title>
      <Title2>{'Olá mundo! <3'}</Title2>
      <Text>Amor é fogo que arde sem se ver,
            é ferida que dói, e não se sente;
            é um contentamento descontente,
            é dor que desatina sem doer.</Text>
       <Text>É um não querer mais que bem querer;
            é um andar solitário entre a gente;
            é nunca contentar-se de contente;
            é um cuidar que ganha em se perder.</Text>     
        <Text>É querer estar preso por vontade;
            é servir a quem vence, o vencedor;
            é ter com quem nos mata, lealdade.</Text>  
        <Text>Mas como causar pode seu favor
            nos corações humanos amizade,
            se tão contrário a si é o mesmo Amor</Text>  
    </Card>
  )
}

export default App;