const Contact = () => {
    return (
        <div className="text-center">
            <h3 className="">
                {`  Whats's Nexts? `}
            </h3>
            <p className="text-4xl font-bold">
                {`Get In touch`}
            </p>
            <p className="whitespace-pre-line">
                {`
                I'm currently looking for new challenges 
                and opportunities to co-create amazing products.
                
                If you have any questions,
                 feel free to contact me.
                `}
            </p>
            <div>
                <a 
                href="mailto:raulzarza.dev@gmail.com" 
                className=" btn btn-outline my-10 " 
                target='_blank' 
                rel="noreferrer"
                >
                    {`Say Hello`}
                </a>
            </div>
        </div>
    )
}

export default Contact