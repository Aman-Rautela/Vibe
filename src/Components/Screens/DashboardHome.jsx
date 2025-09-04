import Card from "../Card/Card";

export default function DashboardHome(){
    const cards = Array(12).fill(null);

    return(
        <>
        <div className="grid grid-cols-3 gap-6">
                {cards.map((_, i) => (
                <Card key={i} />
            ))}
        </div>
        </>
    )
}