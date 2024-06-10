import './Card.scss'

export const Card = ({product}) => {
    const {title, thumbnailUrl} = product;
    return (
        <>
         <div className="card">
            <div className="card__img">
                <img src={thumbnailUrl}/>
            </div>
            <h4 className="card__title">{title}</h4>
         </div>
        </>
    )
}