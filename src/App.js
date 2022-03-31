import Header from "./componenets/Header";
import MainContent from './componenets/MainContent'
import datas from './data'

export default function App() {
    const returnData = datas.map((data)=>{
        return (
            <MainContent 
                img={data.imageUrl}
                description={data.description}
                startdate={data.startDate}
                enddate={data.endDate}
                title={data.title}
                location={data.location}
            />
        )
    })

    return (
        <div className="container">
                <Header />
                {returnData}     
        </div>
    )
}