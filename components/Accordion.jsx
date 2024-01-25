import React, { useState } from 'react'

const cards = [
    {
        header: 'Perchè Open Ball?',
        backgroudCol: 'rgb(20 184 166)',
        text: 'Forse alcuni traumi universitari si innestano in profondità. Una Open Ball è la prova che un insieme sia aperto, in questo caso che non ci sia limite a ciò su cui ci possiamo informare, per quanto sia complesso ci sarà sempre una spiegazione alla portata di tutti, basta essere disposti ad ascoltare.',
    },
    {
        header: 'Open Data',
        backgroudCol: 'rgb(13 148 136)',
        text: "La buona informazione e la lotta alla disinformazione non possono prescindere dall'utilizzo di dati, statistiche e grafici per meglio rappresentare scelte, eventi e movimenti di questo nostro strano mondo.",
    },
    {
        header: 'Open Members',
        backgroudCol: 'rgb(15 118 110)',
        text: "Dal mio punto di vista questo progetto ha una duplice utilità. La prima è del tutto divulgativa: combattere il becero dibattito con una ventata di fresca verità. L'altra è più personale: dover scrivere pubblicamente costringe ad informarsi prima di farlo e di conseguenza a crescere individualmente costruendo una propria identità critica. Se pensi che sia anche la tua strada aspetto solo una notifica. ",
    },
    {
        header: 'Open Theme',
        backgroudCol: 'rgb(17 94 89)',
        text: "Fintanto che siamo difesi dalla veridicità dei dati e dal senso del ragionamento critico qui tutti gli argomenti sono ben accetti, anzi, l'eterogeneità costruisce una fantastica base da cittadino consapevole.",
    }
];

function Accordion() {
    const [active, setActive] = useState(0);

    return (

        <div className='flex cursor:pointer lg:col-span-2'>
            {cards.map((card, index) => (
                <article
                    style={{ backgroundColor: card.backgroudCol }}
                    key={card.index}
                    className={active === index ? 'active' : ''}
                    onClick={() => setActive(index)}
                >
                    <div className='content'>
                        <div>
                            <h3 className='text-3xl font-semibold mb-8 text-white border-b pb-4'>{card.header}</h3>
                            <p className='text-lg text-gray-100 font-normal mb-8'>{card.text}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>


    )
};

export default Accordion;