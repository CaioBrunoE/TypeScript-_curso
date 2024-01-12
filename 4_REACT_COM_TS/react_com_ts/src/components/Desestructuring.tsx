

type Props = {
    title: string,
    content: string,
    commentsQTY: number,
    tags: string[];

    //8- Enums
    category: Category

}

export enum Category {
    ts = "Type Script",
    js = "Java Script",
    p = "Python"
}

const Desestructuring = ({ title, content, commentsQTY, tags , category }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantodade de comentarios :{commentsQTY}</p>
            <div>
                {tags.map((tag) => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h4>{category}</h4>
        </div>
    )
}

export default Desestructuring