/* eslint-disable react/prop-types */
//pra o cód cometado no app funcionar mudar data para dados!!!
const Produto = ({datas})=>{
    return(
        <>
        <div className="container">
            <h1>{datas.nome}</h1>
            <p>R$: {datas.preco}</p>
            <img className="image" src={datas.fotos[0].src} alt={datas.fotos[0].titulo} />
        </div>
        </>
    )

}
export default Produto;