import TableWrapper from "@/Components/Common/TableWrapper";
import Image from "next/image";


const UrlList = [
  {"url":"https://thingspeak.com/channels/2588396/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15", title: "Captura de Ruido"},// sound url
  {"url":"https://thingspeak.com/channels/2588396/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15", title: "Captura de Humedad"},
  {"url":"https://thingspeak.com/channels/2588396/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15", title: "Captura de Temperatura"},// hummidity
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mb-4">
        <iframe width="450" height="260" style={{border: "1px solid #cccccc"}} src="http://192.168.4.125"></iframe>
      </div>
      <div className="grid grid-cols-1 gap-2 w-[calc(100%-20px)]">
      {UrlList.map(table => {
        return (
          <TableWrapper url={table.url} title={table.title} />
        )
      })}
      </div>
      
          
    </main>
  );
}
